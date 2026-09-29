import * as Yup from "yup";
export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    )
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Minimum 7 characters")
    .required("Password is required"),
});

export const RegisterFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    )
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Minimum 7 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});
