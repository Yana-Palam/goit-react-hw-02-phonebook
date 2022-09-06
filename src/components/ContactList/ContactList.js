import React from 'react';
import s from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
