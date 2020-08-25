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

export default class Library extends Component {
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
    title: 'Library',
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
            {"\n"}
            Borrowed and Returned Books
          </Text>
        </View>


          <Card style={styles.borrowcardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  The Alchemist</Text>
          </Card>
          <Card style={styles.borrowcardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  3 mistake of my life</Text>
          </Card>
          <Card style={styles.borrowcardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  One night of Call center</Text>
          </Card>
          <Card style={styles.returncardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text style={styles.portfolio} bold>Returned:</Text> The book named Palpasa cafe has been returned as of date :2020/05/15.</Text>
          </Card>
          <Card style={styles.borrowcardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  Palpasa Cafe</Text>
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
  portfolio: {
    fontSize: width/24,
    margin: 2,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },
  borrowcardstyle: {
    margin:3,
    backgroundColor: "#eff7f4",
    borderRadius:15,
  },
  returncardstyle: {
    margin:3,
    borderRadius:15,
},
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },
  cardstyle: {
    margin:3,
    backgroundColor: "#eff7f4",
    borderRadius:15,


},
time:{
  color:'green',
  fontSize: width/30,
},

text2: {
  fontSize: width/25,
},
pageheader:{
  fontSize: width/23,
},
  


});
