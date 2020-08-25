import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  
  View,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Text } from "../components";




export default class Attendance extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Attendance',
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
          <Text h2 center light>
            Absent History
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
             <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AbsentDetails")}>
          <Card style={styles.cardstyle} left middle shadow>
          <Text  caption   style={styles.portfolio}><Text style={{color:'#DF494E',}} bold>Date: 5 June, 2020</Text> {"\n"}Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>
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
    fontSize: width/28,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
      margin:width/95,
      backgroundColor: "#eff7f4",
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
