import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function CustomTextInput({ ...props }) {
  // console.log(props)
  //reflect api"
  const [fields, meta] = useField(props);
  //console.log(meta);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...fields} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}
