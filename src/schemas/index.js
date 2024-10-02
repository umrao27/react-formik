import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 numeric digit, 1 lower case letter, 1 upper case letter

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["developer", "designer", "productOwner", "other"])
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
});
