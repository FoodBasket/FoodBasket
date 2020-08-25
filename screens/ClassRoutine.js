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
import { DataTable } from 'react-native-paper';

export default class Attendance extends Component {
  state = {
  
  };

  static navigationOptions = () => ({
    title: 'Class Routine',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };



  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
          <View style={styles.Container}>
          <Text style={styles.pageheader} h2 center light>
            Sunday Class Routine
          </Text>
          </View>

          <Card gradient style={styles.cardstyle} left middle shadow>
        <DataTable>
        <DataTable.Header >
          <DataTable.Title ><Text style={styles.tableHeaderStyle}>Subject</Text></DataTable.Title>
          <DataTable.Title numeric><Text style={styles.tableHeaderStyle}>Teacher</Text></DataTable.Title>
          <DataTable.Title numeric><Text style={styles.tableHeaderStyle}>Time</Text></DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Math</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>English</Text></DataTable.Cell>
          <DataTable.Cell numeric>Abhinash Khanal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Nepali</Text></DataTable.Cell>
          <DataTable.Cell numeric>Ajay Shrestha</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Science</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>EPH</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Social</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>OPT Math</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Accountancy</Text></DataTable.Cell>
          <DataTable.Cell numeric>Paras Dahal</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>
    

       </DataTable>
    </Card>
    <View style={styles.Container}>
          <Text style={styles.pageheader} h2 center light>
            Routine by Days
          </Text>
          </View>


          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>Sunday  </Text>
             
              <Text style={styles.time}>8 period</Text>

           
          </Card>
          </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Monday </Text>
              <Text style={styles.time}>8 period</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Tuesday </Text>
              <Text style={styles.time}>8 period</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Wednesday </Text>
              <Text style={styles.time}>8 period</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Thursday </Text>
              <Text style={styles.time}>8 period</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Friday </Text>
              <Text style={styles.time}>8 period</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Saturday </Text>
              <Text style={styles.time}>8 period</Text>
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
    margin: 6
  },
  time:{
    color:'green',
    fontSize: width/30,
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  text2: {
    fontSize: width/22,
  },
  text3: {
    fontSize: 18,
  },

  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
      margin:1,
      backgroundColor: "#eff7f4",
      

      

  },
  pageheader:{
    fontSize: width/23,
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
