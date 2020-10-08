import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Notification from '../screens/Notification.js';

const screens = {
    Notification: {
    screen: Notification,

  },
}

const NotificationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default NotificationStack;