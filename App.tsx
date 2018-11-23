/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Root } from 'native-base';

// View
import FeedView from './Code/View/FeedView';
import SplashScreen from './Code/View/SplashScreen';
import PlaceHolderView from './Code/View/PlaceHolderView';

// Authentication views
import SignInView from './Code/View/Authentication/SignInView';
import SignUpView from './Code/View/Authentication/SignUpView';
import ConfirmSignUpView from './Code/View/Authentication/ConfirmSignUpView';

// Sell views
import CameraView from './Code/View/Sell/CameraView'

import { createStackNavigator, createAppContainer } from "react-navigation";

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const SellNavigation = createStackNavigator
	({
		CameraView: { screen: CameraView }
	},
	{
		headerMode: 'none'
	});

const AuthenticationNavigation = createStackNavigator
	({
		SignInView: { screen: SignInView },
		SignUpView: { screen: SignUpView },
		ConfirmSignUpView: { screen: ConfirmSignUpView }
	},
	{
		headerMode: 'none'
	});

const AppNavigator = createStackNavigator
	({
		FeedView: { screen: FeedView },
		Sell: {screen: SellNavigation },
		Authentication: { screen: AuthenticationNavigation },
		SplashScreen: { screen: SplashScreen },
		PlaceHolderView: { screen: PlaceHolderView }
	},
	{
		headerMode: 'none'
	});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<any, object> {
	render() {
		return (
			<Root>
				<AppContainer />
			</Root>
		)
	}
}
