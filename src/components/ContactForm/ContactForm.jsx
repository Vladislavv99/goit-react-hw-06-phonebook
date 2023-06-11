import { useState } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm =({onAddContact})=> {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name){
      case 'name':
        setName(value);
        break;
        case 'number':
          setNumber(value);
          break;
          default:
            return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact({ name,number });

    setName('');
    setNumber('');
  };
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={s.button_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};