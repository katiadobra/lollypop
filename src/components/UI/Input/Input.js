import React from 'react';
import './Input.scss';

const input = props => {
  let inputElement = null;
  const {
    elementConfig,
    value,
    id,
    change,
    invalid,
    touched,
    shouldValidate
  } = props;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={id}
          onChange={change}
          className="input-group__input"
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...elementConfig}
          value={value}
          id={id}
          onChange={change}
          className="input-group__input"
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={id}
          onChange={change}
          className="input-group__input"
        />
      );
  }

  return (
    <div
      className={`input-group ${invalid && touched && shouldValidate
        ? 'invalid'
        : null}`}
    >
      <label className="input-group__label" htmlFor={id}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default input;
