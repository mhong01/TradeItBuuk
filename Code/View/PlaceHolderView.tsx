import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View, Toast } from 'native-base';

export default class PlaceHolderView extends Component<any, any> {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<Container style={styles.container}>
				<Text>This is a placeholder view</Text>
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
});