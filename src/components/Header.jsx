import React from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <>
      <header className="header border flex center-all">
        <h1>DEV ROADMAP</h1>
        <DarkModeToggle />
      </header>
    </>
  );
}
