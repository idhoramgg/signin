import React from 'react'
import axios from 'axios'

export class Reqres extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios
    .get(`https://reqres.in/api/users?page=1`)
    .then(res => {
      
      const persons = res.data.data
      this.setState({ persons })
      console.log(persons);
    })
  }
  render(){
    return (
      <ul>
        {this.state.persons.length > 0 && this.state.persons.map(person => <li>{person.email}</li>)}
      </ul>
    )
  }
}