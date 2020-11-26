import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";
const { width } = Dimensions.get("window");

import StarRating from '../components/StarRating';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderPicker } from 'react-native-slider-picker';
import Toast, {DURATION} from 'react-native-easy-toast';


import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const url = 'https://foodapp.elscript.com/';









export default class OrderDetail extends Component {

  state = {
    item_id: null,
    location_id: null,
    quantity: null,
    range: null,
    total: null,
    
  };
  



  
  handleOrder = async (order_item) => {
    const { navigation } = this.props;
    const { item_id,location_id,quantity, range,total } = this.state;

   


    let response= await fetch('https://foodapp.elscript.com/api/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify({
              item_id: order_item.item_id,
              location_id: 1000,
              quantity: order_item.quantity,
              range: 10000,
              total: order_item.quantity * order_item.price,
  })
        })

        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code==200)
            { 
              alert(responseData.message);

            }
            else{
              this.refs.toast.show(responseData.message,2000);
              return;
            }

  })
  .catch((error) =>{
    console.error(error);
  }) 



  }






  state = {
      distance: 500,
  
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
    const order_item = this.props.navigation.getParam('order_item');
    

    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={true}>
     
          <View style={styles.Container}>
           
        <View>
          <Image
        style={{ width: width, height: width/2 }}
        source={{
          uri: url+order_item.image_name,
        }}
        
         />
         </View>
          </View>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            borderBottomWidth: 1,
          }}
        />
        <Text bold gray style={{padding:20,paddingBottom:4,fontSize:14}}>{order_item.item_name}</Text>
        <Text  style={{paddingLeft:20,paddingBottom:4,fontSize:14}}>{order_item.item_element}</Text>
        <Text  style={{paddingLeft:20,fontSize:14,paddingBottom:4}}>Qty: {order_item.quantity}</Text>
        <Text bold  style={{paddingLeft:20,fontSize:14}}>Delivery Location: Only in Ktm Valley</Text>
        <Text bold primary style={{paddingLeft:20,fontSize:14}}>Total: Rs {order_item.quantity * order_item.price} ({order_item.quantity} X {order_item.price})</Text>
        <View >
 
 {/*<SliderPicker 
   maxValue={1000}
   callback={position => {
     this.setState({ distance: position });
   }}
   defaultValue={this.state.distance}
   labelFontColor={"#6c7682"}
   labelFontWeight={'600'}
   showFill={true}
   fillColor={'red'}
   labelFontWeight={'bold'}
   showNumberScale={true}
   showSeparatorScale={true}
   buttonBackgroundColor={'#fff'}
   buttonBorderColor={"#6c7682"}
   buttonBorderWidth={1}
   scaleNumberFontWeight={'100'}
   buttonDimensionsPercentage={4}
   heightPercentage={1}
   widthPercentage={80}
 />
 
 <Text style={{paddingLeft:width/10}}>Distance: {this.state.distance} (Find seller within {this.state.distance} m)</Text>
  */}
</View>


        
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            paddingTop:15,
            borderBottomWidth: 1,
          }}
        />
        <Text style={{fontSize:14,padding:20,textAlign: 'justify',letterSpacing: 1,paddingBottom:width/20}}>
          By confirming the order you will be notifying the seller about your order.
          You cannot cancel your order once placed.
        </Text>

  
                  
              
        <Button  style={styles.loginbutton} gradient onPress={() => this.handleOrder(order_item)}>
           <Text style={{color:'white'}} center>Confirm Order</Text> 
        </Button>
        <Toast
                    ref="toast"
                    style={{backgroundColor:'red',borderRadius: width/20}}
                    position='top'
                    positionValue={400}
                    fadeInDuration={200}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
            
          
      
        
         

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
    paddingTop:20,
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
