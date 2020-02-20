import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const token = localStorage.getItem('token');
class Users extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    return axios
      .get('https://digitalhealthsolutions.herokuapp.com/api/v1/users/all', {
        // method: 'GET',
        // mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-access-token': token
        }

        // withCredentials: true,
        // credentials: 'same-origin'
      })
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    const { data } = this.state.users;
    return (
      <div className='container'>
        <div className='col-sm-4'>
          <h1>List of users</h1>
          {data &&
            data.map((item, i) => {
              return (
                <div className='card' key={i}>
                  <Card.Body>
                    <Card.Title className='mb-2 text-muted'>
                      Firstname:{item.firstname}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      Lastname:{item.lastname}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      email:{item.email}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      phone:{item.phone}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      gender:{item.gender}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      location:{item.location}
                    </Card.Title>
                    <Card.Title className='mb-2 text-muted'>
                      usertype:{item.usertype}
                    </Card.Title>
                    <Button variant='danger'>Delete</Button>
                  </Card.Body>
                  {/* <div className='card-body'>
                    <h5 className='card-title'>{item.firstname}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {item.lastname}
                    </h6>
                  </div> */}
                </div>
              );
            })}
        </div>
        <div></div>
      </div>
    );
  }
}

export default Users;
