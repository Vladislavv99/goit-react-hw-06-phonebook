
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction } from './redux/contactsSlice';
import { getContacts } from './redux/contactsSelector';
import s from './App.module.css';

export const App = ()=>{
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ number, name }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContactsAction(contact));
  };

  return (
    <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm  handleSubmit={handleSubmit} contacts={contacts}/>
        <h2 className={s.title}>Contacts</h2>
          <Filter  />
          <ContactList />
      </div>
  )
}
