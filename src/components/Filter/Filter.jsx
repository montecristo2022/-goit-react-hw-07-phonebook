import React from 'react';
import { useState } from 'react';
import styles from '../Filter/Filter.module.css';
import { filterContact } from 'redux/contactsFilterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const [inputValue, setiIputValue] = useState('');
  const handleChange = e => {
    setiIputValue(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  return (
    <label className={styles.labelText}>
      <input
        className={styles.inputFilter}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="name or number"
      />
    </label>
  );
};

export default Filter;
