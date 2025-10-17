import React from 'react';
import { StatusBar } from 'react-native';
import TemplateTester from './components/TemplateTester';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TemplateTester />
    </>
  );
};

export default App;
