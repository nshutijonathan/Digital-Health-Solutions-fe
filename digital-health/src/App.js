import React, { Component } from 'react';
import Routes from './components/routes';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// const token = localStorage.getItem('token');
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  state = {
    users: []
  };

  // componentDidMount() {
  //   return axios
  //     .get('http://localhost:3000/api/v1/users/all', {
  //       // method: 'GET',
  //       // mode: 'no-cors',
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //         'x-access-token': token
  //       }

  //       // withCredentials: true,
  //       // credentials: 'same-origin'
  //     })
  //     .then(response => response.data)
  //     .then(data => {
  //       this.setState({ users: data });
  //     });
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users/all', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-auth-token': `${token}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ users: data });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    return <Routes />;
  }
}
export default App;
