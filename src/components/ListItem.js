import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardItem } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render() {
		const { name } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardItem>
						<Text>
							{name}
						</Text>
					</CardItem>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ListItem;
