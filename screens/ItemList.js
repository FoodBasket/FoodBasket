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



import { Card } from "../components";
import { Button, Block, Text } from "../components";
import StarRating from '../components/StarRating';
import { theme } from "../constants";

const url = 'https://foodapp.elscript.com/';


export default class ItemList extends Component {

  
  state = {
    
  };

  static navigationOptions = ({navigation}) => ({
    title:navigation.getParam('category_name'),
    headerTintColor: 'black',
    
    headerStyle: {
      backgroundColor: 'white'
    },
  });



  render() {
    
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    const category_name = this.props.navigation.getParam('category_name');
    const ItemData = this.props.navigation.getParam('ItemData');
    
    

    return (
        <ScrollView style={styles.container}>
        <View style={styles.cardsWrapper}>
      
       {ItemData.map((item, index) => (
         
         (item.category==category_name ? 
          

        <TouchableOpacity onPress={() => navigation.navigate("Overview",{ItemDetails: item})}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri: url+item.image_name,
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
         <Text style={styles.cardTitle}>{item.item_name}</Text>
            <StarRating ratings={(item.rating<4.5 ? 4 : 5 )}  />
            <Text style={styles.cardDetails}>
            {item.description.substring(0, 60)+"...."}{"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,}}>
                  {item.price}
            </Text>
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        : null
        )
          ))}

      </View>
                   
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      paddingLeft: 5,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
  });