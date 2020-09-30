import React from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <>
      <header className='header border flex center-all'>
        {/* TODO: Fix layout for dark mode switch */}
        <h1>DEV ROADMAP</h1>
        <DarkModeToggle />
      </header>
    </>
  );
}
