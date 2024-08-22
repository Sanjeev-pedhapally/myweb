// src/App.js
//This is the skeleton of what you will see on the front-end
import React from 'react';
import ResultList from './components/ResultList';
import ResultForm from './components/ResultForm';
import './App.css'; 

function App() {
  return (
    <div className="App">
	<h1>WELCOME TO EPL WEBSITE FOR 2024</h1>
      <h2>EPL Results Dashboard</h2>
      
      <ResultList />
	  
	   <h2>We don't do this everyday but...</h2>
	  
	  <ResultForm />
    </div>
  );
}

export default App;
