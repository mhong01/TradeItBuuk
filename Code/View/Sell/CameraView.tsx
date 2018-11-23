import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';
import { Camera, Permissions } from 'expo';
import ViewHelperInstance from '../ViewHelper';

// Todo: to be moved to AppGlobal
import AppGlobal, { ConfirmSignUpEnum } from '../../AppGlobal';

export default class CameraView extends Component<any, any> {

	Camera: Camera;

	constructor(props: any) {
		super(props);
	}

	componentWillMount() {
		this.setState(() => ({
			code: '',
			IsCodeError: false
		}));
	}

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
		let result = await this.Camera.getSupportedRatiosAsync();
		console.log(result);
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<View style={styles.camera}>
						<Camera
							ratio={'4:3'} style={{ flex: 1 }} type={this.state.type}
							ref={ref => { this.Camera = ref; }}>
							<View
								style={{
									flex: 1,
									backgroundColor: 'transparent',
									flexDirection: 'row',
								}}>
								<TouchableOpacity
									style={{
										flex: 0.1,
										alignSelf: 'flex-end',
										alignItems: 'center',
									}}
									onPress={() => {
										this.setState({
											type: this.state.type === Camera.Constants.Type.back
												? Camera.Constants.Type.front
												: Camera.Constants.Type.back,
										});
									}}>
									<Text
										style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
										{' '}Flip{' '}
									</Text>
								</TouchableOpacity>
							</View>
						</Camera>
					</View>
				</View>
			);
		}
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
	camera: {
		height: ViewHelperInstance.ScreenSize.width * 4 / 3,
	}
});