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
    title: 'Due Details',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
 

        <Card style={styles.cardstyle} left middle shadow>
              <Text caption bold style={styles.header}>Robert Downy Jr.</Text>
              <Text bold caption  style={styles.style1}>Previous Due: Rs. 4000 </Text>
              <Text bold caption  style={styles.style1}>Remaining Total: Rs. 4000 </Text>
              <Text  caption right  style={styles.duedate}>Due Date: 2020/07/12  </Text>
          </Card>   
             <Text  caption right >{"\n"}</Text>


          <Text center caption bold style={styles.pageheader}>Transaction History</Text>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/07/28. 
              </Text>
              <Text bold secondary caption  style={styles.style2}>Paid Amount: Rs. 2200</Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/06/4. 
              </Text>
              <Text bold secondary caption  style={styles.style2}>Paid Amount: Rs. 3000</Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/06/12. 
              </Text>
              <Text bold secondary caption  style={styles.style2}>Paid Amount: Rs. 4000</Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/05/12. 
              </Text>
              <Text  bold secondary caption  style={styles.style2}>Paid Amount: Rs. 2000</Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/04/22. 
              </Text>
              <Text bold secondary caption  style={styles.style2}>Paid Amount: Rs. 6000</Text>
          </Card>   

          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.style1}>
                Due Payment has been made on 2020/04/12. 
              </Text>
              <Text bold secondary style={styles.style2}>Paid Amount: Rs. 45000</Text>
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



  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  style1: {
    fontSize: width/23,
    margin:1,
    
  },
  style2: {
    fontSize: width/27,
    margin:5,
    
  },
  
  header: {
    fontSize: width/20,
    margin:1,
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
      margin:2,
      backgroundColor: "#eff7f4",
      
  },
  pageheader:{
    fontSize: width/23,
  },
  duedate:{
    color:'#DC143C',
    fontSize: width/27,
    margin:5,
  }



});
