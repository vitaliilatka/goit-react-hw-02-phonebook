import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactsListItem = ({ name, number, onClickRemove }) => {
  return (
    <li className={styles.ContactsListItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={styles.ContactsList__button}
        onClick={onClickRemove}
      >
        Delete
      </button>
    </li>
  );
};

const ContactsList = ({ filteredContacts, onRemove }) => {
  return (
    filteredContacts.length > 0 && (
      <ul className={styles.ContactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemove(id)}
          />
        ))}
      </ul>
    )
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
