import s from './ContactList.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { getContacts } from '../redux/contactsSelector';
import { deleteContactsAction } from '../redux/contactsSlice';


export const ContactList = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {contacts && contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContactsAction(contact.id))}
                className={s.button_delete}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={s.no_contacts}>There are no contacts here</p>
        )}
      </ul>
    </>
  );
};
