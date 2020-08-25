

import React, { Component } from "react";
import ImageView from 'react-native-image-view';
import {
  StyleSheet,
  ScrollView,
  View,
} from "react-native";



import {  Text } from "../components";
const images = [
    {
        source: {
            uri: 'https://honolulufamily.com/downloads/15199/download/Report-Card-Getty.jpg?cb=dd18eac4a8a31f6725e620119a0bd850&w=1024&h=',
        },
        title: 'Result',
        width: 806,
        height: 720,
    },
];




export default class ResultDetails extends Component {
  state = {

  };
  static navigationOptions = () => ({
    title: '',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });

  render() {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            
        <ImageView
        images={images}
        imageIndex={0}
        isVisible={this.state.isImageViewVisible}
        onRequestClose={() => goBack('Results')}
        renderFooter={(currentImage) => (<View><Text>Result</Text></View>)}
       />
    
       </ScrollView>

    );
  }
}



const styles = StyleSheet.create({


});
