import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';
import { ThemeColor, FontSize } from './Styles/Theme';

// Todo: to be moved to AppGlobal
import AppGlobal, { ConfirmSignUpEnum } from '../AppGlobal';

export default class FeedView extends Component<any, any> {

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


	render() {
		return (
			<Container>
				<Button>
					<Text>Post your buuk</Text>
				</Button>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow'
	},
	postButton: {
		position: 'absolute',
		top: 0
	}
});