import { useState } from "react";
import "./App.css";
import phoneBookData from "./Data/PhoneBook.json";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

export default function App() {
  const [phoneBook, setPhone] = useState(phoneBookData);
  const [filterBook, setFilterBook] = useState("");

  function deletePhone(phoneId) {
    setPhone(prevPhone => {
      return prevPhone.filter(phone => phone.id !== phoneId);
    });
  }

  const visiblePhone = phoneBook.filter(phone =>
    phone.name.toLowerCase().includes(filterBook.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox value={filterBook} onFilter={setFilterBook} />
      <ContactList phoneBook={visiblePhone} onDelete={deletePhone} />
    </>
  );
}
