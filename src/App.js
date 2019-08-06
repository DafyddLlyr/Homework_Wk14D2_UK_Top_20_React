import React from 'react';
import Header from './components/Header';
import TopTwenty from './containers/TopTwenty';
import './App.css';

function App() {
  return (
    <div id="app">
      <Header title="UK iTunes Top 20 Chart"/>
      <TopTwenty />
    </div>
  );
}

export default App;
