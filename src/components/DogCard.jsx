import React from 'react'
import Card from 'react-bootstrap/Card';

const DogCard = ({ imageUrl }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} className="imgCard"/>
    </Card>
  )
}

export default DogCard