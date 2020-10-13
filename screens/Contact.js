import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
  Linking
} from "react-native";
const { width } = Dimensions.get("window");
import StarRating from '../components/StarRating';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NumericInput from 'react-native-numeric-input'




import { Card, Block, Text } from "../components";
import { theme } from "../constants";




export default class Contact extends Component {
  state = {
    
  };

  static navigationOptions=({navigation}) => ({
    title: 'Contact Detail',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
  });

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel: 9860070721';
    } else {
      phoneNumber = 'telprompt:${+977 9860070721}';
    }

    Linking.openURL(phoneNumber);
  };



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={true}>
     
          <View style={styles.Container}>
          <Image
        style={{ width: width, height: width/2 }}
        source={require("../assets/restaurant.jpg")} 
        
         />
          </View>
          <Block flex={false} row space="between" style={{padding:20}}>
          <Text style={{fontSize:width/25}}  bold >Basic Info</Text>
          </Block>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            borderBottomWidth: 1,
          }}
        />
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>HOMESEEK FOODAPP</Text>
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>Phone: 9860070721</Text>
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>Email Id: restaurantemail@gmail.com</Text>
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>www.restaurantwebsite.com</Text>
        <Block style={{paddingLeft:20}}>
        </Block>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            paddingTop:15,
            borderBottomWidth: 1,
          }}
        />
        <Text style={{fontSize:14,padding:20,textAlign: 'justify',paddingBottom:width/10}}>
          This section contains the description of the item. It should give the basic description of the item.
          This is the overview of the item that we are going to sell the client. Client ther call or they can choose from the item.
        </Text>
       

        <Block flex={false}  row space="between" style={styles.categories}>
                           
        <TouchableOpacity onPress={this.makeCall}>

                <Card row center middle shadow style={styles.category}>
               
                <MaterialIcons name="phone" size={17} color="#FF6347" />
                    
                  <Text bold  height={20}>
                   {"  "} Call Us
                  </Text>
                </Card>
        </TouchableOpacity>
              
              <TouchableOpacity onPress={() => Linking.openURL('mailto:prsdahal@gmail.com') }
      title="prsdahal@gmail.com">

                <Card gradient row center middle shadow style={styles.category}>
               
                <MaterialIcons name="mail" size={17} color="#FF6347" />
                    
                  <Text bold  height={20}>
                   {"  "} Email Us
                  </Text>
                </Card>
              </TouchableOpacity>
            </Block>
        

     
    
          
        
         

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
