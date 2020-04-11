import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker'

function App() {
  return (
    <div className="App">
      <ColorPicker colors = {["#F44336", "#9C27B0", "#E91E63", "#673AB7", "#3F51B5", "#4CAF50", "#FF9800"]}/>
    </div>
  );
}

export default App;
