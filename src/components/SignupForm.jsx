import { Formik, Form } from "formik";
import { basicSchema } from "../schemas";
import CustomInput from "./customFields/CustomInput";
import CustomSelect from "./customFields/CustomSelect";
import CustomCheckbox from "./customFields/CustomCheckbox";

const onSubmit = async (values, actions) => {
  // wait after submit button click and then reset the form
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        jobType: "",
        password: "",
        confirmPassword: "",
        acceptedTos: false,
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="firstName"
            name="firstName"
            type="text"
            placeholder="Enter first name"
          />
          <CustomInput
            label="lastName"
            type="text"
            name="lastName"
            placeholder="Enter last name"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job">
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="productOwner">Product Owner</option>
            <option value="other">Other</option>
          </CustomSelect>
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
          <CustomInput
            label="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Comfirm password"
          />
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpForm;
