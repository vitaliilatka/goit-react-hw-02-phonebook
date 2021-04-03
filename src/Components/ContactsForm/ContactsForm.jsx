import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './ContactsForm.module.css';

const InitialState = {
  name: '',
  number: '',
};

export default class ContactsForm extends Component {
  state = InitialState;

  handleChange = (type, e) => {
    const { contacts } = this.props;
    if (type === 'name') {
      const contactInState = contacts.find(
        contact => contact.name.toLowerCase() === e.target.value.toLowerCase(),
      );
      if (contactInState) {
        alert(`${contactInState.name} is already in contacts!`);
      }
    }
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const contactInState = contacts.find(
      contact => contact.name.toLowerCase() === name.toLocaleLowerCase(),
    );
    contactInState && alert(`${contactInState.name} is already in contacts!`);
    if (!contactInState && name && number) {
      onAddContact(name, number);
      this.setState(InitialState);
      return;
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form>
        <h3>Имя</h3>
        <label>
          <input
            type="text"
            value={name}
            onChange={e => this.handleChange('name', e)}
          />
        </label>
        <br />
        <h3>Номер Телефона</h3>
        <label>
          <input
            type="tel"
            value={number}
            onChange={e => this.handleChange('number', e)}
          />
        </label>
        <br />
        <button type="submit" className="buttonForm">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onAddContact: PropTypes.func.isRequired,
};
