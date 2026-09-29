"use client";
import Image from "next/image";
import css from "../page.module.css";
import Link from "next/link";
import ImageBlock from "@/app/components/ui/ImageBlock/ImageBlock";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/app/lib/validation/shema";
interface LoginFormvalues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormvalues>({
    resolver: yupResolver(LoginFormSchema),
    mode: "onChange",
  });
  const onSubmit = (data: LoginFormvalues) => {
    console.log(data);
  };
  const password = watch("password");
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <ImageBlock
          src="/image/login-image.jpg"
          alt="Login image"
          width={335}
          height={280}
        />
      </div>
      <div className={css.formContainer}>
        <h2 className={css.fromTitle}>Log in</h2>
        <p className={css.formText}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.inputWrapper}>
            <input
              type="email"
              placeholder="Email"
              className={css.input}
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
              className={`${css.input} ${password && !errors.password ? css.inputSuccess : ""}`}
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
            <Image
              src="/icon/eye-off-icon.svg"
              alt="eye-icon"
              width={18}
              height={18}
              className={css.eyeIcon}
            />
            {password?.length >= 7 && !errors.password && (
              <p className={css.successMessage}>Password is secure</p>
            )}
          </label>
          <button className={css.btn} type="submit">
            log in
          </button>
        </form>
        <p className={css.loginRegisterText}>
          Don’t have an account?
          <Link href="/register" className={css.loginRegisterLink}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
