import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';
import { EmailRegexString, PasswordRegexString } from '../../Helpers';

// Todo: to be moved to AppGlobal
import UserControllerInstance, { SignUpEnum } from '../../Controller/UserController';

// Aws Amplify
import { Auth } from 'aws-amplify';
import { from } from 'zen-observable';

export default class SignUpView extends Component<any, any> {

	EmailRegex: RegExp;
	PasswordRegex: RegExp;
	EmailItem: Item;
	SignUpButton: Button;

	constructor(props: any) {
		super(props);

		this.EmailRegex = new RegExp(EmailRegexString, 'i');
		this.PasswordRegex = new RegExp(PasswordRegexString);

		this.EmailItem = null;
	}

	componentWillMount() {
		this.setState(() => ({
			Email: 'nguyenh57@student.douglascollege.ca',
			IsEmailError: false,
			Password: 'testPD123!',
			ConfirmPassword: 'testPD123!',
			IsPasswordError: false
		}));
	}

	async OnSignUp() {
		let emailErrorMessage: string;
		let isEmailError: boolean = false;
		let passwordErrorMessage: string;
		let isPasswordError: boolean = false;

		if (this.state.Email.length == '')
		{
			console.log('email required');
			emailErrorMessage = 'Required';
			isEmailError = true;
		} 
		else if (!this.EmailRegex.test(this.state.Email))
		{
			console.log('Invalid email');
			emailErrorMessage = 'Invalid Email';
			isEmailError = true;
		} 
		else if (!this.state.Email.includes('@student.douglascollege.ca')) 
		{
			console.log('Not douglas email');
			emailErrorMessage = 'Invalid Douglas College email';
			isEmailError = true;
		}

		if (this.state.Password.length == '') {
			console.log('password required');
			passwordErrorMessage = 'Required';
			isPasswordError = true;
		}
		// Todo: get password regex to work
		// else if(!this.PasswordRegex.test('helloworld123!'))
		// {
		// 	console.log(this.PasswordRegex.test(this.state.Password.trim()));
		// 	console.log(this.PasswordRegex.source);
		// 	console.log(this.PasswordRegex.exec(this.state.Password));
		// 	console.log('Password invalid');
		// 	console.log(this.state.Password);
		// 	passwordErrorMessage = 'Invalid';
		// 	isPasswordError = true;
		// }
		else if(this.state.Password != this.state.ConfirmPassword)
		{
			console.log('password not match');
			passwordErrorMessage = 'Password not match';
			isPasswordError = true;
		}

		if(!isEmailError && !isPasswordError) {
			let signUpResult = await UserControllerInstance.SignUpUser(this.state.Email, this.state.Password);
			
			switch(signUpResult){
				case SignUpEnum.Success:
					this.props.navigation.navigate('ConfirmSignUpView');
					break;
				case SignUpEnum.UsernameExistsException:
					emailErrorMessage = "Email exist";
					isEmailError = true;
					break;
				default:
					Toast.show({
						text: "Encounter Problem!",
						duration: 2000
					})
					break;
			}

			console.log(signUpResult);
		}

		this.setState({
			IsEmailError: isEmailError,
			EmailErrorMessage: emailErrorMessage,
			IsPasswordError: isPasswordError,
			PasswordErrorMessage: passwordErrorMessage
		});
	}

	GetEmailErrorMessage() {
		if(this.state.IsEmailError) {
			return (
				<Text style={styles.ErrorText}>{this.state.EmailErrorMessage}</Text>
			);
		} else {
			return null;
		}
	}

	GetPasswordErrorMessage() {
		if (this.state.IsPasswordError) {
			if(this.state.PasswordErrorMessage == 'Invalid')
			{
				return (
					<View style={styles.passwordErrorText}>
						<Text style={styles.ErrorText}>At least 8 characters</Text>
						<Text style={styles.ErrorText}>At least 1 number</Text>
						<Text style={styles.ErrorText}>At least 1 letter</Text>
						<Text style={styles.ErrorText}>At least 1 special characters</Text>
					</View>
				);
			}
			else
			{
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
						<Item
							ref={(obj) => this.EmailItem = obj}
							style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='User Name'
								onChangeText={(text) => this.setState({ Email: text })} />
						</Item>
						{this.GetEmailErrorMessage()}
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='Password'
								secureTextEntry
								onChangeText={(text) => this.setState({ Password: text })} />
						</Item>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='Confirm Password'
								secureTextEntry
								onChangeText={(text) => this.setState({ ConfirmPassword: text })} />
						</Item>
						{this.GetPasswordErrorMessage()}
						<Button
							ref={(obj) => this.SignUpButton = obj}
							full bordered
							style={styles.signInButton as ViewStyle}
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