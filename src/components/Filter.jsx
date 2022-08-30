import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const Filter = ({ razas, setDogs }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (e) => {
        setIsLoading(true);
        setDogs([])
        fetch(`https://dog.ceo/api/breed/${e.target.value}/images/random/9`)
            .then((response) => response.json())
            .then((data) => {
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
        // setDogs(e.target.value)
        // alert(e.target.value)
    };

    if (isLoading) {
        return (
          <div className="App">
            <Spinner animation="grow" variant="dark" />
          </div>
        );
      }
    return (
        <>
            {  
                <Form.Select
                    onChange={handleFilter}
                    className='filter'
                    id="cmbRazas"
                >
                    <option value="0">Razas...</option>
                    {
                    Object.keys(razas).map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}

                </Form.Select>
            }
        </>
    );
};

export default Filter;