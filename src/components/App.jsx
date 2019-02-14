import React from 'react';
import NavBar from './NavBar/NavBar';
import SplashImage from './SplashImage/SplashImage';
import TypingAnimation from './Text/TypingAnimation';
import Block from './Block/Block';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <NavBar/>
      <SplashImage/>
      <TypingAnimation/>
      <Block/>
    </div>
  );
}

export default App;
