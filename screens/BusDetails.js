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

export default class DueDetails extends Component {
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
    title: 'Bus Details',
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

        <Image source={require('../assets/elements/bus.png')} />
        <Text h2 center light>
            Bus Assigned 
          </Text>

        </View>

         <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
        <Card style={styles.cardstyle} left middle shadow>
              <Text caption bold style={styles.header}>Robert Downy Jr.</Text>
              <Text bold caption  style={styles.style1}>Bus Assigned: 1A bus </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

           <Text  caption right  style={styles.style2}>{"\n"}</Text>


          <Text center caption bold style={styles.pageheader}>Active Bus</Text>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 1A bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 1B bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 1C bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 2A bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 2B bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
          </Card>   
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("BusRoute")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text bold caption  style={styles.style1}>Bus Name: 1A bus </Text>
              <Text secondary caption  style={styles.route}>NewBaneshwor-MaitiDevi-Koteshwor-Sinamangal-..... </Text>
              <Text  caption right  style={styles.style2}>Click to see route >>  </Text>
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
  style1: {
    fontSize: width/21,
    margin:5,
  },
  style1: {
    fontSize: width/24,
    margin:2,
  },
  style2: {
    fontSize: width/28,
    margin:5,
  },
  
  header: {
    fontSize: width/24,
    margin:2,
  },
  header2: {
    fontSize: 19,
    margin:5,
  },
  
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
      margin:7,
      backgroundColor: "#eff7f4",
      borderRadius:15,
  },
  route: {
    fontSize: width/24,
    margin:5,

   },
   pageheader:{
    fontSize: width/23,
  },



});
