import React from 'react'
import Card from 'react-bootstrap/Card'
import {GiCookingPot} from 'react-icons/gi'

function Cards () {
    return (
        <div className="row cards">
         <Card className="col card">
            <GiCookingPot className="icon" style={{ width: '6em', height: '4em' }}/>
                <Card.Body>
                    <Card.Title>Chicken Noodle Soup</Card.Title>
                </Card.Body>
        </Card>
        <Card className="col">
            <GiCookingPot className="icon" style={{ width: '6em', height: '4em' }}/>
                <Card.Body>
                    <Card.Title>Chicken Noodle Soup</Card.Title>
                </Card.Body>
        </Card>
        </div>
  );
}


export default Cards