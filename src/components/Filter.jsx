import React from "react";
import Form from 'react-bootstrap/Form';

const Filter = ({ razas, setFilter }) => {
    const handleFilter = (e) => {
        setFilter(e.target.value)
        alert(e.target.value)
      };

    return (
        <>
            {
                <Form.Select
                onChange={handleFilter}
                >
                
                    <option value="">Razas...</option>
                    {Object.keys(razas).map((item) => (
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