import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [worldData, setWorldData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
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
        setWorldData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(worldData[0]);

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <h2>Content wrapper</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
