import React from 'react';

const Input = (props) => {

  return (
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      placeholder={props.placeholder || ''}
      onChange={props.onChange ? (e, num) => {props.onChange(e, num)} : null}
      onClick={props.onClick ? props.onClick : null}
    />
  )
}

export default Input;