import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/form/formContainer'
import View from './components/view/viewContainer'

class App extends Component {
  render() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-title'>Homework 13</h1>
            </header>
            <h2>My Account Information</h2>
            <Form />
            <View />
        </div>
    );
  }
}

export default App;
