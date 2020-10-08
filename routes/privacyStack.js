import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Privacy from '../screens/Privacy';


const screens = {
  Privacy: {
    screen: Privacy,

  },


  
};

// home stack navigator screens
const PrivacyStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60, },
    
  }
});

export default PrivacyStack;


