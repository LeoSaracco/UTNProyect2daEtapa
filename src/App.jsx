import { useState, useEffect } from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Spinner from 'react-bootstrap/Spinner';

import DogCard from './components/DogCard.jsx';
import Filter from './components/Filter';
import LoadNext from './components/LoadNext';
import ModalDog from './components/ModalDog.jsx';

import './App.css'

function App() {
  const [dogs, setDogs] = useState([]);
  const [razas, setRazas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState(12);

  useEffect(() => {
    //Cargo en el init todos los perros de ésta api
    fetch("https://dog.ceo/api/breed/hound/images/random/100")
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

  function load_next() {
    setPaginate((prevState) => prevState + 12);
  }


  if (isLoading) {
    return (
      <div className="App">
        <Spinner animation="grow" variant="dark" />
      </div>
    );
  }
  return (
    <>
      <div className="App">
        <div className="container d-flex flex-wrap">
          {dogs.length > 0 && (
            <>
              <ul className="listaButtons">
                <li>
                  <div class="btnNext">
                    <LoadNext load_next={load_next} />
                  </div>
                </li>
                <li>
                  <ModalDog setDogs={setDogs} dogs={dogs} />
                </li>
              </ul>
              <Filter razas={razas} setDogs={setDogs} />
              <section className="cards">
                {
                  dogs
                    .slice(0, paginate)
                    .map((item) => {
                      return <DogCard key={item} imageUrl={item} />;
                    })
                }
              </section></>
          )}
        </div>
      </div>
    </>
  );
}

export default App