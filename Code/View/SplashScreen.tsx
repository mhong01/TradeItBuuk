import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class SplashScreen extends Component<any, object> {
	TimingSplashScreen(): void {
		let timeoutID = setInterval(() => {
			this.props.navigation.navigate('SignInView');
			clearInterval(timeoutID);
		}, 2000);
	}

	render() {
		this.TimingSplashScreen();
		return (
			<View style={styles.container}>
				<Text>TradeItBook</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});