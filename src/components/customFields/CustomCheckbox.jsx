import { useField } from "formik";

/**
 * The CustomCheckbox component in JavaScript React handles input validation and displays error
 * messages based on user interaction.
 * @returns The CustomCheckbox component is being returned. It consists of a checkbox input field with
 * validation for errors and a message indicating acceptance of terms of service. If there is an error
 * and the field has been touched, an error message is displayed below the checkbox.
 */
const CustomCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>
      {meta.error && meta.touched && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default CustomCheckbox;
