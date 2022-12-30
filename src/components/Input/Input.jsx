import styles from '../Input/Input.module.css';
import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
//import { addContact } from 'redux/contactsListSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsListSlice';
import { addOneContact } from 'redux/operations';

export default function Input() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsArray = useSelector(getContacts).myContacts;

  const handleChange = event => {
    let eventName = event.target.name;
    let eventValue = event.target.value;

    if (eventName === 'name') {
      setName(eventValue);
    }

    if (eventName === 'number') {
      setNumber(eventValue);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let name = event.target.name.value;
    let number = event.target.number.value;

    addContactToArray(name, number);
  };

  const addContactToArray = (name, number) => {
    const oneContact = {
      id: nanoid(),
      // phone: number,
      name,
      number,
    };
    areTheseNumbersSame(oneContact);
  };

  const areTheseNumbersSame = oneContact => {
    if (
      contactsArray.find(
        oneArrayContact =>
          oneArrayContact.name.toLowerCase() === oneContact.name.toLowerCase()
      )
    ) {
      alert(`контакт с именем ${oneContact.name}уже существует`);
      return;
    }

    // if (
    //   contactsArray.find(
    //     oneArrayContact => oneArrayContact.number === oneContact.number
    //   )
    // ) {
    //   alert(`контакт с номером ${oneContact.number} уже существует`);
    //   return;
    // }

    dispatch(addOneContact(oneContact));
    // console.log(oneContact)
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <p className={styles.text}> Name </p>
        <input
          className={styles.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>

        <p className={styles.text}> Number </p>
        <input
          className={styles.input}
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>

        <div>
          <button className={styles.button} type="submit">
            Добавить контакт
          </button>
        </div>
      </form>
    </div>
  );
}
