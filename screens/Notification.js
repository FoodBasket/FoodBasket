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




export default class Notification extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Notification',
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: theme.sizes.base * 2 }}>
     
      <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Holiday on Bijaya Dashami</Text>
              <Text  caption  style={styles.aboutus}>
               In the occassion of Vijaya Dashami, we have decided to provide 10 days holiday. 
               Hope you enjoy the festival with your family.
               
              </Text>
          </Card>   
     </TouchableOpacity>


         

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
    fontSize: width/30,
    margin:3,
    color:'#DF494E',
  },
  aboutus: {
    fontSize: width/28,
    margin:5,
    textAlign: 'justify',
    lineHeight:25,
  },
  notificationtitle: {
    fontSize: width/25,
    margin:3,
    textAlign: 'justify',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
    margin:6,
    backgroundColor: "#eff7f4",
    borderRadius:20,


},
});
