import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';

export default class SignInView extends Component<any, object> {
	OnSignIn() {

	}

	OnSignUp() {
		this.props.navigation.navigate('SignUpView');
	}

	render() {
		return (
			<Container>
				<Grid>
					<Col style={styles.leftRightPad}></Col>
					<Col style={styles.formContainer}>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input placeholder='User Name' />
							<Icon active type='SimpleLineIcons' name='user' />
						</Item>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input placeholder='Password' />
							<Icon active type='SimpleLineIcons' name='key' />
						</Item>
						<Button 
							full bordered 
							style={styles.signInButton as ViewStyle}
							onPress={() => this.OnSignIn()}>
							<Text>SIGN IN</Text>
						</Button>
						<Button
							full bordered small
							style={styles.signUpButton as ViewStyle}
							onPress={() => this.OnSignUp()}>
							<Text>SIGN UP</Text>
						</Button>
					</Col>
					<Col style={styles.leftRightPad}></Col>
				</Grid>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	temp: {
		color: ThemeColor.Blue1
	},
	formContainer: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftRightPad: {
		flex: 1
	},
	signInButton: {
		borderColor: ThemeColor.Blue1,
		marginTop: 10
	},
	signUpButton: {
		borderColor: ThemeColor.Blue1,
		marginTop: 10,
		padding: 5
	},
	formInputContainerStyles: {
		marginTop: 20
	},
	formInputInputStyles: {
		fontSize: FontSize.H7,
		padding: 0
	},
	formLabelLabelStyles: {
		fontSize: FontSize.H5,
		padding: 0,
		marginTop: 10,
		backgroundColor: ThemeColor.Blue3
	},
	formLabelContainerStyles: {
		padding: 0,
		margin: 0,
		backgroundColor: ThemeColor.Grey2
	}
});