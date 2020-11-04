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
import NumericInput from 'react-native-numeric-input'
import { SliderPicker } from 'react-native-slider-picker';


import { Card, Block, Text } from "../components";
import { theme } from "../constants";

const url = 'https://foodapp.elscript.com/';




export default class OverView extends Component {
  state = {
    
  };
  constructor(props) {
    super(props);
 
    this.state = { value: 500 };
  }

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
    const ItemDetails = this.props.navigation.getParam('ItemDetails');
    

    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={true}>
     <Block>
       
          <View style={styles.Container}>
          <Image
        style={{ width: width, height: width/2 }}
        source={{
          uri: url+ItemDetails.image_name,
        }}
        
         />
          </View>
          <Block flex={false} row space="between" style={{padding:20,paddingBottom:15,}}>
          <Text style={{fontSize:width/25}}  bold >Overview</Text>
          <StarRating ratings={4}  />
          </Block>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            borderBottomWidth: 1,
          }}
        />
        <Text bold gray style={{padding:20,paddingBottom:4,paddingTop:5,fontSize:14}}>{ItemDetails.item_name}</Text>
        <Text  style={{paddingLeft:20,paddingBottom:10,fontSize:14}}>{ItemDetails.item_element}</Text>
        <Block row space="between">
        <Block style={{paddingLeft:20}}>
        <NumericInput
        initValue={1}
        minValue={1} maxvalue={20} totalWidth={60} totalHeight={40}  type='up-down' iconSize={30} onChange={value => console.log(value)} />
        </Block>
        <Text bold right primary style={{paddingRight:30,paddingTop:15,fontSize:14}}>Price: Rs {ItemDetails.price}</Text>
        </Block>

        <View >
 
        <SliderPicker 
          maxValue={1000}
          callback={position => {
            this.setState({ value: position });
          }}
          defaultValue={this.state.value}
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
        
        <Text style={{paddingLeft:width/10}}>Distance: {this.state.value} (Find seller within {this.state.value} m)</Text>
      </View>
        <Block
          style={{
            borderBottomColor: '#E7E3E3',
            paddingTop:15,
            borderBottomWidth: 1,
          }}
        />
        <Text style={{fontSize:14,padding:20,textAlign: 'justify',letterSpacing: 1,paddingBottom:width/10}}>
          {ItemDetails.description}
        </Text>
        

     
        <View>
          


        <Block flex={false}  row space="between" style={styles.categories}>
                           
        <TouchableOpacity onPress={() => alert("Item Added to Cart! Please Check Cart for more details")}>

                <Card row center middle shadow style={styles.category}>
               
                <MaterialIcons name="shopping-cart" size={17} color="#FF6347" />
                    
                  <Text bold  height={20}>
                   {"  "} Add to Cart
                  </Text>
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>

                <Card gradient row center middle shadow style={styles.category}>
               
                <MaterialIcons name="restaurant" size={17} color="#FF6347" />
                    
                  <Text bold  height={20}>
                   {"  "} Order Now
                  </Text>
                </Card>
              </TouchableOpacity>
            </Block>
          
        </View>
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
