// src/components/AddAnimalForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddAnimalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    description: '',
    image_url: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/animals`, formData)
      .then(res => {
        alert('Animal added successfully!');
        window.location.reload(); // quick refresh to show the new animal
      })
      .catch(err => {
        console.error(err);
        alert('Error adding animal');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-5 shadow-sm">
      <h4 className="mb-4">Add a New Animal</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <input type="text" name="species" className="form-control" placeholder="Species" value={formData.species} onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <input type="text" name="breed" className="form-control" placeholder="Breed" value={formData.breed} onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <input type="number" name="age" className="form-control" placeholder="Age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="col-12 mb-3">
          <textarea name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="col-12 mb-3">
          <input type="text" name="image_url" className="form-control" placeholder="Image URL" value={formData.image_url} onChange={handleChange} required />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Add Animal</button>
    </form>
  );
};

export default AddAnimalForm;
