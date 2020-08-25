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
import { DataTable } from 'react-native-paper';


import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

export default class ExamDetails extends Component {
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
    title: 'Exam Details',
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
        <Image source={require('../assets/elements/exam.png')} />
        <Text style={styles.pageheader} h2 center light>
            Exam Routine of Class name
            {"\n"}
          </Text>
        </View>
   <Card gradient style={styles.cardstyle} left middle shadow>
        <DataTable>
        <DataTable.Header >
          <DataTable.Title ><Text style={styles.tableHeaderStyle}>Subject</Text></DataTable.Title>
          <DataTable.Title numeric><Text style={styles.tableHeaderStyle}>Date</Text></DataTable.Title>
          <DataTable.Title numeric><Text style={styles.tableHeaderStyle}>Time</Text></DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Math</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>English</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Nepali</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Science</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>EPH</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Social</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>OPT Math</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell><Text style={styles.subject}>Accountancy</Text></DataTable.Cell>
          <DataTable.Cell numeric>2020/05/04</DataTable.Cell>
          <DataTable.Cell numeric><Text style={styles.time}>9:30-12:30</Text></DataTable.Cell>
        </DataTable.Row>
    

       </DataTable>
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
  tableHeaderStyle:{
   fontSize:17,
  },
  subject:{
      color:'green',
  },
  time:{
    color:'#DC143C',
},
pageheader:{
  fontSize: width/23,
},


  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
 
  cardstyle: {
      margin:10,
      backgroundColor: "#eff7f4",
      borderRadius:15,


  },
  



});
