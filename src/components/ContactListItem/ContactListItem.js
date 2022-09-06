import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p>
        {name}:&nbsp;{number}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
