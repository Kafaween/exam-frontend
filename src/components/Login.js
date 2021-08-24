import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Login extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Below to Log In</Card.Text>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </Card.Body>
      </Card>
    );
  }
}

export default withAuth0(Login);
