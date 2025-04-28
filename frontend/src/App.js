// src/App.js
import React from 'react';
import AnimalList from './components/AnimalList';
import AddAnimalForm from './components/AddAnimalForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Animals For All Lives 🐾</h1>
      <AddAnimalForm />
      <AnimalList />
    </div>
  );
}

export default App;

