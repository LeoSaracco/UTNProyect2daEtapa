import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Spinner from 'react-bootstrap/Spinner';
import DogCard from './components/DogCard.jsx';
import './App.css'

function App() {
  const [dogs, setDogs] = useState();
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images/random/10")
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
      {/* <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <button>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>

        
      </button> */}

      {
        dogs.map((item) => {
          return <DogCard key={item} imageUrl={item} />
        })
      }
    </div>
  );
}

export default App
