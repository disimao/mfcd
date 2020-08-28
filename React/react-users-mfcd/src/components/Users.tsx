import React, {Component} from 'react'
import axios from '../axios'

interface UsersState {
  users: any[];
}

export default class Users extends Component<{}, UsersState>  {

  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    };
  }

  getUsersData() {
    axios
        .get('/users', {})
        .then(res => {
          const data = res.data.data
          console.log(data)
          const users = data.map((u:any) =>
              <div key={u.id}>
              <img src={u.avatar}/>
              <li>{u.name}</li>
              <li>{u.email}</li>
              <li>{u.first_name}</li>
              <li>{u.last_name}</li>
              <br/>
              </div>
              )

              this.setState({
                  users
              })
      })
      .catch((error) => {
          console.log(error)
      })
  }

  componentDidMount() {
    this.getUsersData()
  }

  render() {
    return (
      <div className="App">
        {this.state.users}
      </div>
    );
  }
}
