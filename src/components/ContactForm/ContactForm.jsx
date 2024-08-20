import { useId } from "react";
import { Field, Form, Formik } from "formik";

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="phone" id={phoneFieldId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
