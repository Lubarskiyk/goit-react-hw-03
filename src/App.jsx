import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import phoneBook from "./Data/PhoneBook.json";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

function App() {
  return (
    <>
      <h1>Hallo</h1>
      <SearchBox />
      <ContactList phoneBook={phoneBook} />
    </>
  );
}

export default App;
