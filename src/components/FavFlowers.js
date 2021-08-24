import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardCrud from './CardCrud';
import axios from 'axios';
import Formcrud from './Formcrud';

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crudata: [],
      showcrud: false,
      form: false,
      item: [],
    };
  }

  componentDidMount = async () => {
    let reqcrud = await axios.get(`${process.env.REACT_APP_SERVER_URL}/crud`);
    console.log(reqcrud.data);
    this.setState({
      crudata: reqcrud.data,
      showcrud: true,
    });
  };

  handledelete = async (x) => {
    console.log(x);
    let delcrud = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/crud/${x}`
    );
    let datanew = this.state.crudata.filter((e) => e.name !== x);
    this.setState({
      crudata: datanew,
    });
  };

  showform = (z) => {
    console.log(z);
    this.setState({
      form: true,
      item: z,
    });
  };

  handlesubmit = async (event, i) => {
    event.preventDefault();
    console.log(event.target.name.value);
    let f = { instructions: event.target.name.value };
    let upd = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/crud/${i.name}`,
      f
    );

    let final = this.state.crudata.map((e) => {
      if (e == i) {
        e.instructions = event.target.name.value;
        return e;
      } else {
        return e;
      }
    });
    this.setState({
      crudata: final,
      form: false,
    });
  };

  render() {
    return (
      <>
        <div>
          {this.state.form && (
            <>
              <Formcrud
                item={this.state.item}
                handlesubmit={this.handlesubmit}
              />
            </>
          )}
        </div>
        {this.state.showcrud && (
          <>
            <CardCrud
              crudata={this.state.crudata}
              handledelete={this.handledelete}
              showform={this.showform}
            />
          </>
        )}
      </>
    );
  }
}

export default FavFlowers;
