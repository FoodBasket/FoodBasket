import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import TandC from '../screens/TandC';


const screens = {
    TandC: {
    screen: TandC,

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


