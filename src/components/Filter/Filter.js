import React from 'react';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const findInputId = nanoid();
  return (
    <div className={s.find}>
      <label className={s.find__label} htmlFor={findInputId}>
        Find contacts by name
      </label>
      <input
        className={s.find__input}
        id={findInputId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
