import React, { Component } from 'react'
import Input from '../components/input'

export default class LoginPage extends Component {
  state = {
    userName: null,
    password: null
  }

  onChangeFields = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='container'>
        <form>
          <h1 className='text-center'>Login</h1>
          <Input type='text' name='userName' label='Username' onChangeFields={this.onChangeFields}/>
          <Input type='password' name='password' label='Password' onChangeFields={this.onChangeFields}/>
          <div className='text-center'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}
