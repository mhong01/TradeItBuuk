import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';
import { EmailRegexString, PasswordRegexString } from '../../Helpers';

// Todo: to be moved to AppGlobal
import UserControllerInstance, { SignUpEnum, ConfirmSignUpEnum } from '../../Controller/UserController';

// Aws Amplify
import { Auth } from 'aws-amplify';
import { from } from 'zen-observable';

export default class ConfirmSignUpView extends Component<any, any> {

	constructor(props: any) {
		super(props);
	}

	componentWillMount() {
		this.setState(() => ({
			code: 'nguyenh57@student.douglascollege.ca',
			IsCodeError: false
		}));
	}

	async OnConfirmCode() {
		let codelErrorMessage: string;
		let isCodeError: boolean = false;

		if (this.state.Code.length == '') {
			console.log('email required');
			codelErrorMessage = 'Required';
			isCodeError = true;
		}

		if (!isCodeError) {
			let confirmSignUpReview = await UserControllerInstance.ConfirmSignUpUser(this.state.Email, this.state.Code);

			switch (confirmSignUpReview) {
				case ConfirmSignUpEnum.Success:
					this.props.navigation.navigate('ConfirmSignUpView');
					break;
				default:
					Toast.show({
						text: "Encounter Problem!",
						duration: 2000
					})
					break;
			}

			console.log("confirmSignUpReview:");
			console.log(confirmSignUpReview);
		}

		this.setState({
			IsEmailError: isCodeError,
			EmailErrorMessage: codelErrorMessage
		});
	}

	GetEmailErrorMessage() {
		if (this.state.IsEmailError) {
			return (
				<Text style={styles.ErrorText}>{this.state.EmailErrorMessage}</Text>
			);
		} else {
			return null;
		}
	}

	GetPasswordErrorMessage() {
		if (this.state.IsPasswordError) {
			if (this.state.PasswordErrorMessage == 'Invalid') {
				return (
					<View style={styles.passwordErrorText}>
						<Text style={styles.ErrorText}>At least 8 characters</Text>
						<Text style={styles.ErrorText}>At least 1 number</Text>
						<Text style={styles.ErrorText}>At least 1 letter</Text>
						<Text style={styles.ErrorText}>At least 1 special characters</Text>
					</View>
				);
			}
			else {
				return (
					<Text style={styles.ErrorText}>{this.state.PasswordErrorMessage}</Text>
				);
			}
		} else {
			return null;
		}
	}

	render() {
		return (
			<Container>
				<Grid>
					<Col style={styles.leftRightPad}></Col>
					<Col style={styles.formContainer}>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='Confirm code from your email'
								onChangeText={(text) => this.setState({ Email: text })} />
						</Item>
						{this.GetEmailErrorMessage()}
						<Button
							full bordered
							style={styles.signInButton as ViewStyle}
							onPress={() => this.OnConfirmCode()}>
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
		alignItems: 'center',
	},
	leftRightPad: {
		height: 1
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
	ErrorText: {
		fontSize: FontSize.H9,
		color: ThemeColor.Error,
		alignSelf: 'flex-end'
	},
	passwordErrorText: {
		alignSelf: 'flex-end'
	}
});