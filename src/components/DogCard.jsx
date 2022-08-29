import React from 'react'
import Card from 'react-bootstrap/Card';

const DogCard = ({ imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} className="imgCard"/>
    </Card>
  )
}

export default DogCard