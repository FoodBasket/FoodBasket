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


import { Button, Block, Text } from "../components";
import { theme } from "../constants";




export default class OverView extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Order Detail',
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
        style={{ width: width, height: width/2 }}
        source={require("../assets/foodimage/food3.jpg")} 
        
         />
          </View>
          <Block flex={false} row space="between" style={{padding:20}}>
          <Text style={{fontSize:width/25}}  bold >Overview</Text>
          <StarRating ratings={4}  />
          </Block>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            borderBottomWidth: 1,
          }}
        />
        <Text bold gray style={{padding:20,paddingBottom:4,fontSize:14}}>Amazing Food Name</Text>
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>Spicy and Freshly Delivered</Text>
        <Text  style={{paddingLeft:20,fontSize:14,paddingBottom:4}}>Qty: 1</Text>
        <Text bold primary style={{paddingLeft:20,fontSize:14}}>Total: Rs 300</Text>
        
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            paddingTop:15,
            borderBottomWidth: 1,
          }}
        />
        <Text style={{fontSize:14,padding:20,textAlign: 'justify',letterSpacing: 1,paddingBottom:width/6}}>
          This section contains the description of the item. It should give the basic description of the item.
          This is the overview of the item that we are going to sell the client. Client ther call or they can choose from the item.
        </Text>

  
                  
              
        <Button  style={styles.loginbutton} gradient onPress={() => alert("Your order has been placed successfully")}>
           <Text style={{color:'white'}} center>Confirm Order</Text> 
        </Button>
            
          
      
        
         

      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:0,
    
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
  loginbutton: {
    padding:20,
    borderRadius: width/20,
    margin:1,
    
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
category: {
  // this should be dynamic based on screen width
  minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  maxHeight: (width - theme.sizes.padding * 12 - theme.sizes.base) / 2,
  backgroundColor: "white",
  borderRadius:15,
  
},
});
