import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";



import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

export default class Homework extends Component {
  state = {
   
  };


  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  static navigationOptions = () => ({
    title: 'Homework',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
          
            
        <View style={styles.Container}>
        
        <Text style={styles.pageheader} h2 center light>
            Daily Homework
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
              </Text>
          </Card>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HomeworkDetails")}>
        <Card style={styles.cardstyle} left middle shadow>
          <Text  caption bold style={styles.header}>Date: 17 July, 2020</Text>
              <Text  caption bold style={styles.notificationtitle}>Subject: Science</Text>
              <Text  caption  style={styles.aboutus}>
              Students should write the question answer of Chapter 1 and also complete the numerical of...
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



  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  portfolio: {
    fontSize: 16,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
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
  cardstyle: {
    margin:0,
    backgroundColor: "#eff7f4",


},
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,

    
  },
  notificationtitle: {
    fontSize: width/28,
    margin:2,
    textAlign: 'justify',
    lineHeight:25,
  },
  pageheader:{
    fontSize: width/23,
  },


});
