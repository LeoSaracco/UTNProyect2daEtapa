import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Spinner from 'react-bootstrap/Spinner';

import DogCard from './components/DogCard.jsx';
import Filter from './components/Filter';

import './App.css'

function App() {
  const [dogs, setDogs] = useState([]);
  const [razas, setRazas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(""); //null?

  useEffect(() => {

    //Cargo en el init todos los perros de ésta api
    fetch("https://dog.ceo/api/breed/hound/images/random/200")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message);
        setDogs(data.message);
      },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });

    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.message);
        setRazas(data.message);
      },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Spinner animation="grow" variant="dark" />
      </div>
    );
  }
  return (
    <div className="App">
      <div class="centered">
      <Filter razas={razas} setDogs={setDogs} />
        {
          dogs.length > 0 && (
            <section class="cards">
              
              {dogs.map((item) => {
                return <DogCard key={item} imageUrl={item} className="imgCard" />
              })}
            </section>
          )
        }
      </div>
    </div>
  );
}

export default App
