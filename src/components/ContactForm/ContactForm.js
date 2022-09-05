import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const nameInputId = nanoid();
    console.log(this.state.name);
    return (
      <>
        <form className={s.contact__form} onSubmit={this.handleSubmit}>
          <label className={s.contact__labelName} htmlFor={nameInputId}>
            Name
          </label>
          <input
            className={s.contact__inputName}
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button className={s.contact__button} type="submit">
            Add contacts
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
