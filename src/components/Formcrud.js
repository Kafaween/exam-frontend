import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Formcrud extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.props.handlesubmit(e, this.props.item)}>
          <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
            <Form.Label column sm='2'>
              {this.props.item.name}
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue={this.props.item.instructions}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Form.Label column sm='2'>
              Change the instructions
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                placeholder={this.props.item.instructions}
                name='name'
              />
            </Col>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default Formcrud;
