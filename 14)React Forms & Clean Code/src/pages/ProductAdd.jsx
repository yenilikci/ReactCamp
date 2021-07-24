import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import CustomTextInput from "../utilities/customFormControls/CustomTextInput";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 0,
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          //values = input values
          console.log(values);
        }}
      >
        <Form className="ui form">
          <CustomTextInput name="productName" placeholder="Ürün Adı" />
          {/*
            <FormField>
                <Field name="productName" placeholder="Ürün Adı"></Field>
                <ErrorMessage
                name="productName"
                render={(error) => (
                    <Label pointing basic color="red" content={error}></Label>
                )}
                ></ErrorMessage>
            </FormField>
          */}
          {/*
            FormField>
                <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                <ErrorMessage
                name="unitPrice"
                render={(error) => (
                    <Label pointing basic color="red" content={error}></Label>
                )}
                ></ErrorMessage>
            </FormField>
          */}
          <CustomTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
