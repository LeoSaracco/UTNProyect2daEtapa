import React from "react";
import Button from 'react-bootstrap/Button';
const LoadNext = ({ load_next }) => {
  return (
    <Button onClick={load_next} variant="warning">
      <b>Next</b>
    </Button>
  );
};

export default LoadNext;