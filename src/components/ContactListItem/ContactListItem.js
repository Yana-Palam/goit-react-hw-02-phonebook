import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  return (
    <li key={id} className={s.contact__item}>
      {name}:&nbsp;{number}
    </li>
  );
};

export default ContactListItem;
