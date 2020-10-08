import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import OrderHistory from '../screens/OrderHistory.js';

const screens = {
  OrderHistory: {
    screen: OrderHistory,

  },
}

const OrderHistoryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default OrderHistoryStack;