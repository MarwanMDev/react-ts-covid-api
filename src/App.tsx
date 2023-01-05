import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
      'X-RapidAPI-Key':
        '43ba294a17mshda1b9904dc000ffp19d49fjsn36d66232a6a9',
      'X-RapidAPI-Host':
        'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.table(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
