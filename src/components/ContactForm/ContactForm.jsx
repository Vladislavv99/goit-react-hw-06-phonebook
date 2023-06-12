import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { getContacts } from '../redux/contactsSelector';



export const ContactForm =({ title, handleSubmit })=> {

  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleInput = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        alert('Error');
    }
  };
  const onSubmitData = ev => {
    ev.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert('This contact is already in the list');
    }

    handleSubmit({ name, number });
    setName('');
    setNumber('');
  };

    return (
      <form className={s.form} onSubmit={onSubmitData}>
        <label className={s.label}>
          Name:
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInput}
            value={name}
          />
        </label>
        <label className={s.label}>
          Number:
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInput}
            value={number}
          />
        </label>
        <button className={s.button_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
