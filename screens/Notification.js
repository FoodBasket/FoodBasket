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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const url = 'https://foodapp.elscript.com/';
let motivationresponse=  fetch(url+'api/motivation', {
            method: 'GET',
        })

            .then((motivationresponse) => motivationresponse.json())
            .then((responseData) => {
              MotivationData=responseData.MotivationData;
                

      })
      .catch((error) =>{
        console.error(error);
      }) 
      

export default class Notification extends Component {
  state = {
    
  };

  static navigationOptions=({navigation}) => ({
    title: 'Notifications',
    headerTitleStyle: { alignSelf: 'center' },
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
        <ScrollView style={styles.container}>
          
       <View style={styles.cardsWrapper}>
       {MotivationData.map((motivation, index) => (
       <TouchableOpacity onPress={() => navigation.navigate("NotificationDetails",{motivation: motivation})}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={{
                uri: url+motivation.image_name,
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
       <Text style={styles.cardTitle}>{motivation.title.substring(0, 30)}</Text>
            <Text style={styles.cardDetails}>
              
              {motivation.description.substring(0, 100)}
              
            </Text>
          </View>
        </View>
        </TouchableOpacity>
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