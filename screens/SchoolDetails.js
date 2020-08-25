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




export default class SchoolDetails extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'School Details',
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
      <Text center caption bold style={styles.portfolio}>Sewa Sadan English Boarding School </Text>
     
          <View style={styles.Container}>
          <Image
        style={{ width: width, height: width/1.9 }}
        source={require("../assets/school.jpg")} 
        resizeMode="contain"
         />
          </View>
          <Card style={styles.cardstyle} left middle shadow>
              <Text caption bold style={styles.header}>Basic Info</Text>
              <Text  caption  style={styles.portfolio}>Address: Battisputali, Kathmandu </Text>
              <Text  caption  style={styles.portfolio}>Phone: 01-4498285/01-4408255 </Text>
              <Text  caption  style={styles.portfolio}>Email: schoolemail@gmail.com </Text>
              <Text  caption  style={styles.portfolio}>Website: www.schoolwebsite.com </Text>
              <Text  caption  style={styles.portfolio}>Established: 1997/01/17 </Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption bold style={styles.header}>About Us</Text>
              <Text  caption  style={styles.aboutus}>
                This part includes the description of the school. It is better to have the short summary of the school in this part.
                This part gives the basic description of the school and its aim, faculty, mission and others.
                This should give the brief idea about the school.
              </Text>
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
    fontSize: 25,
    textAlign: 'center',
    margin: 30
  },
  portfolio: {
    fontSize: width/24,
    margin:3,
  },
  header: {
    fontSize: width/21,
    margin:5,
    textDecorationLine: 'underline',
  },
  aboutus: {
    fontSize: width/25,
    margin:2,
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
    borderRadius:15,


},
});
