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

export default class Result extends Component {
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
    title: 'Result',
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
            {"\n"}
          </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>3rd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>3rd Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>1st Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>1st Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
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
    fontSize: 22,
    textAlign: 'center',
    margin: 10
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

  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
