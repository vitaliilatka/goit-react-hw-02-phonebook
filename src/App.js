import React, { Component } from 'react';
// import { uuid } from 'uuid';
import ContactsList from './Components/ContactsList/ContactsList';
import ContactsForm from './Components/ContactsForm/ContactsForm';
import Container from './Components/Container/Container';
import Filter from './Components/Filter/Filter';
// import styles from './styles.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      // id: uuid(),
      name,
      number,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <section title="Phonebook" className="Section">
          <h1>Phonebook</h1>
          <ContactsForm contacts={contacts} onAddContact={this.addContact} />
        </section>
        <section title="Contacts" className="Section">
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          <ContactsList
            filteredContacts={this.getFilteredContacts()}
            onRemove={this.handleRemove}
          />
        </section>
      </Container>
    );
  }
}

export default App;
