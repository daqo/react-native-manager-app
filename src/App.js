import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCEz-QFlLSorDa8_gIvo3GuMYEvGVCWLDs',
			authDomain: 'manager-app-rn.firebaseapp.com',
			databaseURL: 'https://manager-app-rn.firebaseio.com',
			storageBucket: 'manager-app-rn.appspot.com',
			messagingSenderId: '410325454890'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
