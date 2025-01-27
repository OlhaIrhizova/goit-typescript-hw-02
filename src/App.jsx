import { useState } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import css from "./App.module.css";


function App() {
const[contacts, setContacts] = useState(()=>{
  const saveContacts = localStorage.getItem('contacts');
  return saveContacts ? JSON.parse(saveContacts) : initialContacts;
});


const [filter, setFilter] = useState("");

const addContact = (newContact) => {
  const duplicate = contacts.some(
    ({ number, name }) => number === newContact.number || name.toLowerCase() === newContact.name.toLowerCase());

  if (duplicate) {
    alert(`The contact with the name ${newContact.name} or the number ${newContact.number} is already in contacts.`);
    return;
  }
  setContacts((prevContacts) => {
    const updatedContacts = [...prevContacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); 
    return updatedContacts;
  });
};

const deleteContact = (contactId) => {
  setContacts((prevContacts) =>{
    const updatedContacts = prevContacts.filter((contact)=> contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); 
      return updatedContacts;
    });
  
}

const filterContacts = contacts.filter( (contact) => 
  contact.name.toLowerCase().includes(filter.toLowerCase()));


  return(
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm onAdd = {addContact}/>
    <SearchBox value = {filter} onFilter={setFilter}/>
    <ContactList contacts = {filterContacts} onDelete = {deleteContact}/>
    
    </div>
  )

}
export default App;