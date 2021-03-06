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

	async OnPosting() {
		this.props.navigation.navigate('CameraView');
	}


	render() {
		return (
			<Container style={styles.container as ViewStyle}>
				

				<Button style={[styles.postButton, styles.postBackButton] as ViewStyle[]}></Button>
				<Button 
					style={[styles.postButton, styles.postFrontButton] as ViewStyle[]}
					onPress={() => this.OnPosting()}>
					<Text>Post your buuk</Text>
					<Icon active type='SimpleLineIcons' name='camera' />
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
		alignItems: 'center'
	},
	postButton: {
		position: 'absolute',
		width: 160,
		bottom: -10,
		backgroundColor: ThemeColor.Blue1
	},
	postFrontButton: {
		borderRadius: 75,
		height: 50,
		paddingLeft: 10
	},
	postBackButton: {
		height: 25
	},
});