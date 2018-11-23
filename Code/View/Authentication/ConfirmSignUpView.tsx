import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';

// Todo: to be moved to AppGlobal
import AppGlobal, { ConfirmSignUpEnum } from '../../AppGlobal';

export default class ConfirmSignUpView extends Component<any, any> {

	constructor(props: any) {
		super(props);
	}

	componentWillMount() {
		this.setState(() => ({
			code: '',
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
			let confirmSignUpReview = await AppGlobal.UserControllerInstance.ConfirmSignUpUser(this.state.Code);

			switch (confirmSignUpReview) {
				case ConfirmSignUpEnum.Success:
					this.props.navigation.navigate('PlaceHolderView');
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
			CodeErrorMessage: codelErrorMessage
		});
	}

	CodeErrorMessage() {
		if (this.state.IsCodeError) {
			return (
				<Text style={styles.ErrorText}>{this.state.CodeErrorMessage}</Text>
			);
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
								onChangeText={(text) => this.setState({ Code: text })} />
						</Item>
						{this.CodeErrorMessage()}
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