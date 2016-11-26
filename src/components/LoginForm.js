import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password);
	}

	render() {
		return (
			<Card>
				<CardItem>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardItem>

				<CardItem>
					<Input
						label="Password"
						placeholder="password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardItem>

				<CardItem>
					<Button>
						Login
					</Button>
				</CardItem>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
