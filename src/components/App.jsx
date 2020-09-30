import React from "react";
import Header from "./Header";
import Roadmap from "./Roadmap";
import Content from "./Content";
import SideBar from "./SideBar";
import Footer from "./Footer";
// import Nav from "./Nav";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Roadmap />
      <Content />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
