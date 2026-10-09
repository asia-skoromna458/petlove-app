import Image from "next/image";
import css from "./Pagination.module.css";
import { useMediaQuery } from "usehooks-ts";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const isTablet = useMediaQuery("(min-width: 768px)");

  const pageCount = isTablet ? 3 : 2;
  const pages = [page, page + 1, page + 2]
    .filter((pageNumber) => pageNumber <= totalPages)
    .slice(0, pageCount);
  return (
    <div className={css.container}>
      <div className={css.arrows}>
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className={css.btnArrows}
        >
          <Image
            src="/icon/left-arrow.svg"
            alt="Previous"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
          <Image
            src="/icon/left-arrow.svg"
            alt="Previous"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
        </button>
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={css.btnArrows}
        >
          <Image
            src="/icon/left-arrow.svg"
            alt="Previous"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
        </button>
      </div>
      <div className={css.numbers}>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === page ? css.activePage : css.btnNumber}
          >
            {pageNumber}
          </button>
        ))}
        {pages[pages.length - 1] < totalPages && (
          <span className={css.dots}>...</span>
        )}
      </div>
      <div className={css.arrows}>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={css.btnArrows}
        >
          <Image
            src="/icon/right-arrow.svg"
            alt="Next"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          className={css.btnArrows}
        >
          <Image
            src="/icon/right-arrow.svg"
            alt="Next"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
          <Image
            src="/icon/right-arrow.svg"
            alt="Next"
            width={6}
            height={12}
            className={css.arrowIcon}
          />
        </button>
      </div>
    </div>
  );
}
