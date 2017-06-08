import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCw-cuEjand7pg1Rl9xy2P0wdJuX_AirjU',
			authDomain: 'authsample-ab929.firebaseapp.com',
			databaseURL: 'https://authsample-ab929.firebaseio.com',
			projectId: 'authsample-ab929',
			storageBucket: 'authsample-ab929.appspot.com',
			messagingSenderId: '369657555837' });
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
