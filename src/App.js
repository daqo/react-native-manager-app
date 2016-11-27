import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
