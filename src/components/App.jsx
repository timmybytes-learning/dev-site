import React from 'react';
import Header from './Header';
import Roadmap from './Roadmap';
import Content from './Content';
import SideBar from './SideBar';
import Footer from './Footer';
// import Nav from "./Nav";

function App() {
  const num = 1;
  return (
    <div className='grid-container'>
      <Header />
      <Roadmap />
      <Content current={num} />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
