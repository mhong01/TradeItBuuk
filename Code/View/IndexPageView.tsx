import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import { ThemeColor } from './Styles/Theme';
import { Container, Icon } from 'native-base';

export default class IndexPageView extends Component<any, any>{

    constructor(props: any) {
		super(props);
	}

    async OnPosting() {
        console.log('enter onPosting method');
        this.props.navigation.navigate('FeedView');
    }
    
    async OnBuying(){
        console.log('Enter buying function');
        this.props.navigation.navigate('BookGrid');
    }

    render(){
        return (

            <Container  style={styles.container as ViewStyle}>
                <Button 
                    buttonStyle = {styles.postButton} 
                    large title='POST A BUUK' icon={{name: 'camera'}}
                    onPress={() => this.OnPosting()}/>
                
                <Button 
                    buttonStyle = {styles.postButton}
                    large title='BUY A BUUK' icon={{name: 'camera'}}
                    onPress={() => this.OnBuying()}/>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
	},
    postButton: { 
        width: 250,
        alignSelf:'stretch',
		bottom: 10,
        backgroundColor: ThemeColor.Blue1,
        marginTop: 15,
    },
    
    buyButton: { 
        alignSelf:'stretch',
		bottom: 10,
		backgroundColor: ThemeColor.Blue1
	},

});