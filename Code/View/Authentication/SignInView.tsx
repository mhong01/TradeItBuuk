import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, Toast } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';

// Controller
import UserControllerInstance, { SignUpEnum, EmailStateEnum, PasswordStateEnum, SignInEnum } from '../../Controller/UserController';

export default class SignInView extends Component<any, any> {

	componentWillMount() {
		this.setState(() => ({
			Email: '',
			IsEmailError: false,
			Password: '',
			IsPasswordError: false
		}));
	}

	async OnSignIn() {
		let emailErrorMessage: string;
		let isEmailError: boolean = false;
		let passwordErrorMessage: string;
		let isPasswordError: boolean = false;

		switch(UserControllerInstance.CheckEmail(this.state.Email)){
			case EmailStateEnum.Empty:
				console.log('email required');
				emailErrorMessage = 'Required';
				isEmailError = true;
				break;
			case EmailStateEnum.Invalid:
				console.log('Invalid email');
				emailErrorMessage = 'Invalid Email';
				isEmailError = true;
				break;
			case EmailStateEnum.NotSchoolEmail:
				console.log('Not douglas email');
				emailErrorMessage = 'Invalid Douglas College email';
				isEmailError = true;
				break;
			case EmailStateEnum.Valid:
				break;
		}

		switch(UserControllerInstance.CheckPassword(this.state.Password)){
			case PasswordStateEnum.Empty:
				console.log('password required');
				passwordErrorMessage = 'Required';
				isPasswordError = true;
				break;
			// case PasswordStateEnum.Invalid:
			// 	console.log(this.PasswordRegex.test(this.state.Password.trim()));
			// 	console.log(this.PasswordRegex.source);
			// 	console.log(this.PasswordRegex.exec(this.state.Password));
			// 	console.log('Password invalid');
			// 	console.log(this.state.Password);
			// 	passwordErrorMessage = 'Invalid';
			// 	isPasswordError = true;
			case PasswordStateEnum.NotMatch:
				console.log('password not match');
				passwordErrorMessage = 'Password not match';
				isPasswordError = true;
				break;
		}

		if (!isEmailError && !isPasswordError) {
			let signInResult = await UserControllerInstance.SignInUser(this.state.Email, this.state.Password);

			switch (signInResult) {
				case SignInEnum.Success:
					this.props.navigation.navigate('PlaceHolderView');
					break;
				case SignInEnum.NotAuthorizedException:
					passwordErrorMessage = "Invalid email or password";
					isPasswordError = true;
					break;
				default:
					Toast.show({
						text: "Encounter Problem!",
						duration: 2000
					})
					break;
			}

			console.log(signInResult);
		}

		this.setState({
			IsEmailError: isEmailError,
			EmailErrorMessage: emailErrorMessage,
			IsPasswordError: isPasswordError,
			PasswordErrorMessage: passwordErrorMessage
		});
	}

	OnSignUp() {
		this.props.navigation.navigate('SignUpView');
	}

	GetEmailErrorMessage() {
		if (this.state.IsEmailError) {
			return (
				<Text style={styles.errorText}>{this.state.EmailErrorMessage}</Text>
			);
		} else {
			return null;
		}
	}

	GetPasswordErrorMessage() {
		return (
			<Text style={styles.errorText}>{this.state.PasswordErrorMessage}</Text>
		);
	}

	render() {
		return (
			<Container>
				<Grid>
					<Col style={styles.leftRightPad}></Col>
					<Col style={styles.formContainer}>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input placeholder='User Name' 
								onChangeText={(text) => this.setState({ Email: text })} />
							<Icon active type='SimpleLineIcons' name='user' />
						</Item>
						{this.GetEmailErrorMessage()}
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input placeholder='Password' secureTextEntry 
								onChangeText={(text) => this.setState({ Password: text })}/>
							<Icon active type='SimpleLineIcons' name='key' />
						</Item>
						{this.GetPasswordErrorMessage()}
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
	},
	errorText: {
		fontSize: FontSize.H9,
		color: ThemeColor.Error,
		alignSelf: 'flex-end'
	},
	passwordErrorText: {
		alignSelf: 'flex-end'
	}
});