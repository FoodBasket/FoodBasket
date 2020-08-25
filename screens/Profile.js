import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  
  View,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Text } from "../components";
import { theme } from "../constants";




export default class Profile extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Profile Details',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView style={{ marginVertical: theme.sizes.padding }}  showsVerticalScrollIndicator={true}>
          
          <View style={styles.Container}>
            <Image
              source={require("../assets/elements/profile-pic.jpg")} 
              style={styles.circleImageLayout}
            />
            <Text style={styles.text}>Robert Downey Jr.</Text>
          </View>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.portfolio}>Class name:  Class 8 Sec A </Text>
              <Text  caption  style={styles.portfolio}>Father name: Michael Downy Jr.  </Text>
              <Text  caption  style={styles.portfolio}>Mother name:  Nebula Downy </Text>
              <Text  caption  style={styles.portfolio}>Guardian name:  N/A </Text>
              <Text  caption  style={styles.portfolio}>Blood Group:   B positive </Text>
              <Text  caption  style={styles.portfolio}>Current Address:  Sunsity, Kathmandu </Text>
              <Text  caption  style={styles.portfolio}>Date of Birth:  1996/04/25 </Text>

          </Card>
                   
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

  circleImageLayout: {
    width: 110,
    height: 110,
    borderRadius: 200 / 2
  },

  text: {
    fontSize: width/20,
    textAlign: 'center',
    margin: 5
  },
  portfolio: {
    fontSize: width/22,
    margin:8,
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
    borderRadius:15,

},
});
