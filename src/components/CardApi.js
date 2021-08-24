import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export class CardApi extends Component {
  render() {
    console.log(this.props.apidata);
    return this.props.apidata.map((obj) => {
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
                  this.props.handlecreate(obj);
                }}
              >
                make favourite
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default CardApi;
