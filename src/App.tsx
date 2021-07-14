import React from 'react';
import './App.css';
import {PageAuth, PageProfile} from "./components/pages";

function App() {
  return (
    <div className="App">
        <PageAuth/>
        <PageProfile/>
    </div>
  );
}

export default App;
