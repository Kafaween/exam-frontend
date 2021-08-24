import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CardApi from './CardApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: [],
      showapi: false,
    };
  }

  componentDidMount = async () => {
    let reqapi = await axios.get(`${process.env.REACT_APP_SERVER_URL}/data`);

    this.setState({
      apidata: reqapi.data,
      showapi: true,
    });
  };

  handlecreate = async (x) => {
    console.log(x);
    let y = await axios.post(`${process.env.REACT_APP_SERVER_URL}/crud`, x);
    console.log(y.data);
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        {!isAuthenticated && <Login />}

        <h1>API Flowers</h1>

        {this.state.showapi && (
          <>
            <CardApi
              apidata={this.state.apidata}
              handlecreate={this.handlecreate}
            />
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Home);
