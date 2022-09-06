import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact__item}>
          {name}:&nbsp;{number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
