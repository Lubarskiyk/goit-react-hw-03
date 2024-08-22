import { useId } from "react";
import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form className={css.contactForm}>
        <div className={css.contact}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
        </div>
        <div className={css.contact}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="tel" name="number" id={phoneFieldId} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
