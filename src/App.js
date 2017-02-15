import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user : null
    }

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({
        user
      });
    });
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} se ha logeado`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} se ha desconectado`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton () {
    if (this.state.user) {
      return (
        <div>
          <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      )
    } else {
      return <button onClick={this.handleAuth}>Logear con Google</button>
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>KrasGram</h2>
        </div>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default App;
