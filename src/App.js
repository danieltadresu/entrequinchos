import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(`visible`, visible)
  }, [visible]);

  return (
    <React.Fragment>
      <Header setVisible={setVisible} />
      <Home visible={visible} />
    </React.Fragment>
  );
}

export default App;
