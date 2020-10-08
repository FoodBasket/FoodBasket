import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Feedback from '../screens/Feedback';

const screens = {
    Feedback: {
    screen: Feedback,

  },
}

const FeedbackStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default FeedbackStack;