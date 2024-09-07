import React from 'react';
   import { Card, Button } from 'react-bootstrap';

   function Jeu({ nom, description, image }) {
     return (
       <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={image} />
         <Card.Body>
           <Card.Title>{nom}</Card.Title>
           <Card.Text>{description}</Card.Text>
           <Button variant="primary">Louer</Button>
         </Card.Body>
       </Card>
  );
}

export default Jeu;