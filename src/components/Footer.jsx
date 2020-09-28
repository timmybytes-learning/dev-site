import React from "react";

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer className="footer border" style={{ gridArea: "footer", textAlign: "center" }}>
      &copy; {year}
    </footer>
  );
}
