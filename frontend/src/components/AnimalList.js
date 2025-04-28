// src/components/AnimalList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/animals`)
      .then(res => setAnimals(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="row mt-4">
      {animals.map(animal => (
        <div key={animal.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={animal.image_url} className="card-img-top" alt={animal.name} style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
              <p className="card-text">{animal.species} - {animal.breed}</p>
              <p className="card-text">{animal.description}</p>
              <p className="card-text">
                <small className="text-muted">Age: {animal.age}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
