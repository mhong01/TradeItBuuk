import React, { Component } from 'react';
import { any } from 'prop-types';
import {Grid, Col, Row, Container} from 'native-base';
import { StyleSheet, ViewStyle, Image, ScrollView, ListView } from 'react-native';

export default class BookGrid extends Component<any, any>{
    // renderGridItem( item ){
    //     return (<TouchableOpacity style={styles.gridItem}>
    //         <View style={[styles.gridItemImage, justifyContent:'center', alignItems:'center'}]}>
    //             <Text style={{fontSize:25, color:'white'}}>
    //                 {item.fields.name.charAt(0).toUpperCase()}
    //             </Text>
    //         </View>
    //         <Text style={styles.gridItemText}>{item.fields.name}</Text> 
    //     </TouchableOpacity>
    //     );
    // }

    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
        return (
            <Container style={styles.container as ViewStyle}>
                <ScrollView style={{backgroundColor: '#E8E8E8', flex: 1}} >
                    <Image source={pic} style={{width: 100, height: 110}}/>
                    <Image source={pic} style={{width: 100, height: 110}}/>
                    <Image source={pic} style={{width: 100, height: 110}}/>
                    <Image source={pic} style={{width: 100, height: 110}}/>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        // flexWrap: 'wrap',
        flex: 2,
		justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
});