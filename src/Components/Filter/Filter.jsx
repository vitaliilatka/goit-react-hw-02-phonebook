import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.Filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
