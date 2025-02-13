import * as Yup from "yup";

const Schema = Yup.object({
  name: Yup.string().min(2).max(15).required("Username is required"),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string().min(6).max(20).required("Password is required"),
});
export default Schema;

const SchemaSignIn = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).max(20).required("Password is required"),
});
export { SchemaSignIn };
