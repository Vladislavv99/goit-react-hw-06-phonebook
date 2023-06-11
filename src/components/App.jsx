import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css'


const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parse = JSON.parse(localStorage.getItem(CONTACTS_KEY));

    if(parse){
      setContacts(parse)
    }
  }, []);  
  
  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = ({name, number}) => {
    const searchSameName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevState =>  [...prevState, contact]);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value)
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId => {
    setContacts(prevState =>prevState.filter(contact => contact.id !== contactId)); 
  };

    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <h1 className={s.title}>Contacts</h1>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={getVisibleContacts()}
            onRemoveContact={removeContact}
          />
        )}
      </div>
    );
  }
