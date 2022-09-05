import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name }) => (
        <li key={id} className={s.contact__item}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
