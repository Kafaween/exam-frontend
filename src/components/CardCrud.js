import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export class CardCrud extends Component {
  render() {
    console.log(this.props.crudata);
    return this.props.crudata.map((obj) => {
      return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={obj.photo} />
            <Card.Body>
              <Card.Title>{obj.name}</Card.Title>
              <Card.Text>{obj.instructions}</Card.Text>
              <Button
                variant='primary'
                onClick={(e) => {
                  this.props.handledelete(obj.name);
                }}
              >
                Delete
              </Button>
              <Button
                variant='primary'
                onClick={(e) => {
                  this.props.showform(obj);
                }}
              >
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default CardCrud;
