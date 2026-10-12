"use client";
import Image from "next/image";
import css from "./ConfirmModal.module.css";
import { createPortal } from "react-dom";
import { useEffect, useRef, useCallback } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel?: () => void;
}
export default function ConfirmModal({
  onClose,
  onConfirm,
  isOpen,
  onCancel,
}: ConfirmModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onCancel?.();
    onClose();
  }, [onCancel, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    modalRef.current?.focus();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, handleClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;
  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="Close modal"
          className={css.closeBtn}
          onClick={handleClose}
        >
          <Image
            src="/icon/close_icon.svg"
            alt="close modal"
            height={24}
            width={24}
          />
        </button>
        <div className={css.imageWrapper}>
          <span className={css.cat}>🐈</span>
        </div>
        <h3 className={css.title}>Already leaving?</h3>
        <div className={css.btnContainer}>
          <button className={css.logOutBtn} onClick={onConfirm}>
            Yes
          </button>
          <button className={css.cancelBtn} onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
