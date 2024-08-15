import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ phoneBook }) {
  return (
    <ul className={css.contactList}>
      {phoneBook.map(data => (
        <li key={data.id} className={css.contact}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
}
