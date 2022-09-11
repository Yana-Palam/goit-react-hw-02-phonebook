import React from 'react';
import PropTypes from 'prop-types';
import { Contact, Text, Button } from './ContactListItem.styled';
import Avatar from 'react-avatar';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Contact>
      <Text>
        <Avatar size="40" name={name} round={true} />
        &nbsp;
        {name}:&nbsp;{number}
      </Text>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </Button>
    </Contact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
