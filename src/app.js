import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCw-cuEjand7pg1Rl9xy2P0wdJuX_AirjU',
			authDomain: 'authsample-ab929.firebaseapp.com',
			databaseURL: 'https://authsample-ab929.firebaseio.com',
			projectId: 'authsample-ab929',
			storageBucket: 'authsample-ab929.appspot.com',
			messagingSenderId: '369657555837' 
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Logout
							</Button>
						</CardSection>
					</Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
