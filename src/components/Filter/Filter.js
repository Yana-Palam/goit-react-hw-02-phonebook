import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const findInputId = nanoid();
  return (
    <div className={s.find}>
      <label className={s.label} htmlFor={findInputId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={findInputId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
