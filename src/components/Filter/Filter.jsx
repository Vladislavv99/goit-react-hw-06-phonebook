import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ value, onChangeFilter }) {
    return (
      <div className={s.find}>
        Find contacts by name
        <input className={s.input_search}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </div>
    );
  }
  
  Filter.propTypes = {
    value: PropTypes.string,
    onchangeFilter: PropTypes.func,
  };