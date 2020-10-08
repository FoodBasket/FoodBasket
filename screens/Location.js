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
import StarRating from '../components/StarRating';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';






import { Card, Button, Text } from "../components";
import { theme } from "../constants";




export default class OverView extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Item Detail',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
  });



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={true}>
     
          <View style={styles.Container}>
          <Image
        style={{ width: width/4, height: width/4 }}
        source={require("../assets/images/location.png")} 
        
         />
          </View>
          <Text  center style={{paddingTop:30,paddingBottom:4,fontSize:14}}>Please Select your location</Text>
         <Text>{"\n"}</Text>
        
         <TouchableOpacity onPress={() => alert("Your location is changed to Sallaghari-16, Bhaktapur")}>
          <Card shadow style={styles.category}>
        <Text center>
        
          Sallaghari-16, Bhaktapur{"          "}
          <MaterialIcons right name="location-on" size={17} color="#FF6347" />
          </Text>      
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Your location is changed to Kadaghari-17, Kathmandu ")}>
          <Card shadow style={styles.category}>
          <Text center>Kadaghari-17, Kathmandu</Text>      
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Your location is changed to New Baneshwor-15, Kathmandu ")}>
          <Card shadow style={styles.category}>
          <Text center>New Baneshwor-15, Kathmandu</Text>      
          </Card>
          </TouchableOpacity>
   
   <View style={{paddingTop:30}}>
        <Button  style={styles.loginbutton} gradient >
           <Text style={{color:'white'}} center>Choose Location</Text> 
        </Button>
   </View>


 
 
        

     
        <View>
          



          
        </View>
          
        
         

      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10,
    
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
categories: {
  flexWrap: "wrap",
  paddingHorizontal: theme.sizes.base * 2,
  marginBottom: theme.sizes.base * 3.5
  
},
loginbutton: {
    padding:20,
    paddingLeft:width/6,
    paddingRight:width/6,
    borderRadius: width/20,
    margin:1,
    
  },
category: {

  
},
});
