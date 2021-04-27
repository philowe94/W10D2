import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(<Tabs/>, root)

  ReactDOM.render(<Clock/>, root);
});
