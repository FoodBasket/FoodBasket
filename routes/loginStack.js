import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';

const screens = {
  Welcome: {
    screen: Welcome,
    

  },
  Login: {
    screen: Login,
    

  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      
    }
  },
  Forgot: {
    screen: Forgot,
    navigationOptions: {
      title: 'Forgot',
      
    }
  },

  
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60, },
    
  }
});

export default HomeStack;


