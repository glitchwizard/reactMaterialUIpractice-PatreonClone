import React from 'react';
import NavBar from './NavBar/NavBar';
import SplashImage from './SplashImage/SplashImage';
import TypingAnimation from './Text/TypingAnimation';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <SplashImage/>
      <TypingAnimation/>
    </div>
  );
}

export default App;
