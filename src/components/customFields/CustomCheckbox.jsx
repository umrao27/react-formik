import { useField } from "formik";

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
