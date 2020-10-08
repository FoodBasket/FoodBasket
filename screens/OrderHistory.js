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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {  Text } from "../components";





export default class ItemList extends Component {
  state = {
    
  };

  static navigationOptions=({navigation}) => ({
    title: 'Order History',
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
      
          <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food1.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold  style={{fontSize:14,paddingTop:15,color:'green'}}>
                  Status: Completed
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,color:'red'}}>
                  Status: Failed
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,color:'green'}}>
                  Status: Completed
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,color:'red'}}>
                  Status: Failed
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food5.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,color:'red'}}>
                  Status: Failed
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food6.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,}}>
                  Status: Pending
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food7.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,}}>
                  Status: Pending
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food8.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,}}>
                  Status: Pending
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food9.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,}}>
                  Status: Pending
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>
      
        <TouchableOpacity >
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/foodimage/food10.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <Text style={styles.cardDetails}>
              {"\n"}
              <Text bold primary style={{fontSize:12,paddingTop:15,color:'#7D3C3C',}}>
                 Total: Rs 400 (200 X 2){"\n"}
            </Text>
            <Text bold secondary style={{fontSize:14,paddingTop:15,}}>
                  Status: Pending
            </Text>

            </Text>
          </View>
        </View>
        </TouchableOpacity>
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
      paddingBottom:2,
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
      paddingBottom:2,
    },
  });