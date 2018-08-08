import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm'; 

class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC3YxaopMinMHYykvkbR5NddLY44zsMnMU",
      authDomain: "manager-4be7c.firebaseapp.com",
      databaseURL: "https://manager-4be7c.firebaseio.com",
      projectId: "manager-4be7c",
      storageBucket: "manager-4be7c.appspot.com",
      messagingSenderId: "1092454339641"
    });
    
  }

  render() {
    return (
        <Provider store={createStore(reducers)}>
            <LoginForm/>
      </Provider>
    );
  }
}

export default App;
