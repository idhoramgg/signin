import React from 'react'
import axios from 'axios'
import './reqres.css'

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
      <div className="container">
      <ol>
      <h1>Nama dan Email Karyawan</h1>
        {this.state.persons.length > 0 && this.state.persons.map(person => 
        <li> 
        <div className="card">Nama : {person.first_name} {person.last_name} <br/> Email : {person.email}</div> <hr/> 
        </li>
        )}
      </ol>
      </div>
    )
  }
}