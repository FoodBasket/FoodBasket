import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Text } from "../components";
import { theme } from "../constants";




export default class AbsentDetails extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Absent Details',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+977 9860070721}';
    } else {
      phoneNumber = 'telprompt:${+977 9860070721}';
    }

    Linking.openURL(phoneNumber);
  };



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: theme.sizes.base * 2 }}>
     
          
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption bold style={styles.header}>17 July, 2020- Absent</Text>
              <Text  caption  style={styles.aboutus}>
               Student named Paras Dahal has been recorded as absent as of 17 July, 2020. 
               Please contact the school administration or sent absent detail of the student.
               
              </Text>
          </Card>   
    <Text>{"\n"}{"\n"}{"\n"}</Text>

          <Block flex={false} padding row space="between" style={styles.categories}>
                           
              <TouchableOpacity  onPress={this.makeCall} >

                <Card row center middle shadow style={styles.category}>
               
                    <Image source={require('../assets/elements/call.png')} /> 
                    
                  <Text bold  height={20}>
                   {"        "} Call Now
                  </Text>
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate("Leave")}>

                <Card row center middle shadow style={styles.category}>
               
                    <Image source={require('../assets/elements/leaveicon.png')} /> 
                    
                  <Text bold  height={20}>
                   {"        "}Leave Note
                  </Text>
                </Card>
              </TouchableOpacity>
            </Block>

         

      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 12 - theme.sizes.base) / 2,
    backgroundColor: "#eff7f4",
    borderRadius:15,
    
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
    
  },

  circleImageLayout: {
    width: 110,
    height: 110,
    borderRadius: 200 / 2
  },

  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 30
  },
  portfolio: {
    fontSize: 19,
    margin:5,
  },
  header: {
    fontSize: 16,
    margin:5,
    color:'#DF494E',
  },
  aboutus: {
    fontSize: 19,
    margin:5,
    textAlign: 'justify',
    lineHeight:30,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
    margin:15,
    backgroundColor: "#eff7f4",
    borderRadius:20,


},
});
