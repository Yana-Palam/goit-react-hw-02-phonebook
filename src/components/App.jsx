import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    return (
      <div className="phonebook">
        <h1 className="phonebook__title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className="contacts__title">Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
