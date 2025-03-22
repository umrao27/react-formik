import { Formik, Form } from "formik";
import { basicSchema } from "../schemas";
import CustomInput from "./customFields/CustomInput";

/**
 * The onSubmit function in this JavaScript React code waits for 1 second after the submit button is
 * clicked before resetting the form.
 */
const onSubmit = async (values, actions) => {
  // wait after submit button click and then reset the form
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="email"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <CustomInput
            label="password"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;
