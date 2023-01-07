import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [worldData, setWorldData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
    headers: {
      'X-RapidAPI-Key':
        '43ba294a17mshda1b9904dc000ffp19d49fjsn36d66232a6a9',
      'X-RapidAPI-Host':
        'covid-19-coronavirus-statistics.p.rapidapi.com',
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setWorldData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(worldData);

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper flex justify-center items-start p-20">
        <div className="h-96 w-3/4 flex flex-col justify-center items-center gap-y-20 rounded border border-gray-200">
          <h1 className="text-3xl font-bold">
            {worldData?.location}
          </h1>
          <div className="flex flex-row gap-x-5 w-full justify-around items-center">
            <h2 className="text-xl">
              Confirmed: {worldData?.confirmed}
            </h2>
            <h2 className="text-xl">Deaths: {worldData?.deaths}</h2>
          </div>

          <div className="flex flex-row gap-x-5 w-full justify-around items-center">
            <p>last checked: {worldData?.lastChecked.slice(0, 10)}</p>
            <p>
              last reported: {worldData?.lastReported.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
