import React from 'react';
import {
  FaMoon,
  FaSun
} from 'react-icons/fa';

export default function DarkModeToggle() {
  const handleClick = () => {
    document.body.classList.toggle('dark');
  };

  return ( <
    div >
    <
    input type = 'checkbox'
    className = 'checkbox'
    id = 'checkbox' / >
    <
    label htmlFor = 'checkbox'
    className = 'toggle-label'
    onClick = {
      handleClick
    } >
    <
    FaMoon className = 'toggle-icons' / >
    <
    FaSun className = 'toggle-icons' / >
    <
    div className = 'ball' > < /div>{' '} <
    /label>{' '} <
    /div>
  );
}
