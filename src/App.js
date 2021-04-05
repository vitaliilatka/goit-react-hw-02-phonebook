import React, { useState } from 'react';
import shortid from 'shortid';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import Container from './Components/Container/Container';
import Filter from './Components/Filter/Filter';
import './styles.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prState => [newContact, ...prState]);
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = contactId =>
    setContacts(prState => prState.filter(({ id }) => id !== contactId));

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <Container>
      <section className="Section">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </section>
      <section className="Section">
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </section>
    </Container>
  );
}

export default App;
