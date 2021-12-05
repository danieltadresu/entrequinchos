import React from 'react';
import { Button } from 'antd';
import './App.less';

import Header from './components/layout/Header';

const App = () => (
  <div className="App">
    <Header />
    <h1>E-Commerce Entrequinchos.com</h1>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
