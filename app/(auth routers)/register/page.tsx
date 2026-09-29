"use client";
import Title from "@/app/components/ui/title/title";
import css from "../page.module.css";
import ImageBlock from "@/app/components/ui/ImageBlock/ImageBlock";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "@/app/lib/validation/shema";
import Image from "next/image";
import { useState } from "react";
interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterFormSchema),
    mode: "onSubmit",
  });
  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <ImageBlock
          src="/image/registration-image.jpg"
          tabletSrc="/image/register-tablet-image.jpg"
          alt="Register image"
          width={335}
          height={280}
        />
      </div>
      <div className={css.formContainerRegister}>
        <Title>Registration</Title>
        <p className={css.formText}>
          Thank you for your interest in our platform.
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.inputWrapper}>
            <input
              type="text"
              placeholder="Name"
              className={css.input}
              {...register("name")}
            />
          </label>
          <label className={css.inputWrapper}>
            <input
              type="email"
              placeholder="Email"
              className={`${css.input} ${errors.email ? css.inputError : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <Image
                src="/icon/cross-icon.svg"
                width={12}
                height={12}
                alt="croos icon"
                className={css.crossIcon}
              />
            )}
            <p className={css.errorMessage}>{errors.email?.message}</p>
          </label>
          <label className={css.inputWrapper}>
            <input
              type="password"
              placeholder="Password"
              className={`${css.input} ${
                errors.password
                  ? css.inputError
                  : password?.length >= 7
                    ? css.inputSuccess
                    : ""
              }`}
              {...register("password")}
            />
            {password?.length >= 7 && !errors.password && (
              <>
                <Image
                  src="/icon/check-icon.svg"
                  alt="check icon"
                  width={14}
                  height={10}
                  className={css.checkIcon}
                />
              </>
            )}
            {showPassword ? (
              <Image
                src="/icon/eye-on-icon.svg"
                alt="eye-icon"
                width={18}
                height={18}
                className={css.eyeIcon}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Image
                src="/icon/eye-off-icon.svg"
                alt="eye-icon"
                width={18}
                height={18}
                className={css.eyeIcon}
                onClick={() => setShowPassword(true)}
              />
            )}
            {password?.length >= 7 && !errors.password && (
              <p className={css.successMessage}>Password is secure</p>
            )}
            {errors.password && (
              <p className={css.errorMessage}>{errors.password.message}</p>
            )}
          </label>
          <label className={css.inputWrapper}>
            <input
              type="password"
              placeholder="Confirm password"
              className={css.input}
              {...register("confirmPassword")}
            />
            {showConfirmPassword ? (
              <Image
                src="/icon/eye-on-icon.svg"
                alt="eye-icon"
                width={18}
                height={18}
                className={css.eyeIcon}
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <Image
                src="/icon/eye-off-icon.svg"
                alt="eye-icon"
                width={18}
                height={18}
                className={css.eyeIcon}
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
            {errors.confirmPassword && (
              <p className={css.errorMessage}>
                {errors.confirmPassword.message}
              </p>
            )}
          </label>
          <button type="submit" className={css.RegisterBtn}>
            Registration
          </button>
          <p className={css.loginRegisterText}>
            Already have an account?
            <Link href="/login" className={css.loginRegisterLink}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
