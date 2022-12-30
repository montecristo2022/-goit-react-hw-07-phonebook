import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import { getContacts } from 'redux/contactsListSlice';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsListSlice';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactsFilterSlice';
import { useEffect } from 'react';

// import { fetchContacts } from 'redux/operations';
import { deleteOneContact } from 'redux/operations';

export const ContactList = () => {
  const contactsArray = useSelector(getContacts).myContacts;

  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilter);

  const contactsLowerFilter = filteredContacts.toLowerCase();

  const visibleContacts = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(contactsLowerFilter)
  );

  return (
    <ul className={styles.contactsWrapper}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.oneContact} key={id}>
            <p className={styles.oneContactText}>
              {' '}
              {name}: {number}
            </p>

            <button
              className={styles.deleteButton}
              onClick={() => {
                dispatch(deleteOneContact(id));
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
