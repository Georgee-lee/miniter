import React from 'react';

const Input = (props) => {

  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e, num) => {props.onChange(e, num)}}
      onClick={props.onClick}
    />
  )
}

export default Input;