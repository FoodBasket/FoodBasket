import { createDrawerNavigator } from 'react-navigation-drawer';
import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { StyleSheet, View, Dimensions,  Image,Text, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base'
const { width } = Dimensions.get("window");
import { Card,Block } from "../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





// stacks
import HomeStack from './homeStack';
import LoginStack from './loginStack';
import TandCStack from './tandcStack';
import PrivacyStack from './privacyStack';
import FeedbackStack from './feedbackStack';
import ContactStack from './contactStack';

const CustomDrawerContentComponent = (props) => (

  <Container>
    
    <View center style={styles.drawerHeader}>
      
        <Image
          style={styles.drawerImage}
          source={require("../assets/logo.jpg")} 
          />
     </View>
          <View style={styles.drawerMenu}>
           
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="home" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Home</Text>
            </Block>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="settings" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Profile Settings</Text>
            </Block>
          </TouchableOpacity>
          
         
          <TouchableOpacity onPress={() => props.navigation.navigate('OrderHistory')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="assignment" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Order History</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="shopping-cart" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Cart Details</Text>
            </Block>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="feedback" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Feedback</Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="phone" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Contact Us </Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('TandC')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="assignment" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Terms and Condition</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Privacy')}>
            <Block style={styles.menulist} flex={false} row  >

            <MaterialIcons   name="info" size={25} color="#FC4A1A" />
            <Text primary style={styles.menutext}>  Privacy Policy</Text>
            </Block>
          </TouchableOpacity>

        </View>
     

  </Container>
 
        
   

);
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  
  Home: {
    screen: HomeStack,
  },
  Login: {
    screen: LoginStack,
    navigationOptions: ({navigation}) => ({
      drawerLockMode: 'locked-closed'
    })
  },


},

  {
    initialRouteName: 'Login',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });

export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({

  drawerHeader: {
    backgroundColor: 'white',
    paddingTop:20,
    alignItems: 'center'
  },

  drawerImage: {
    height: width/3,
    width: width/3,
  },
  menulist: {
    padding:19,
    paddingBottom:8,
  },
  menutext: {
    fontSize:width/25,
    color:'black',
  },
});