import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from '../redux/contactsSelector';
import { filterContactsAction } from '../redux/contactsSlice';


export  const Filter = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);
  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(filterContactsAction(value.trim()));
  };

    return (
      <div className={s.find}>
        Find contacts by name
        <input className={s.input_search}
          type="text"
          name="filter"
          value={filtered}
          onChange={e=>{handleFilter(e)}}
        />
      </div>
    );
  }
