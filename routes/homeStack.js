import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Notification from '../screens/Notification';
import NotificationDetails from '../screens/NotificationDetails';
import ItemList from '../screens/ItemList';
import Cart from '../screens/Cart';
import Overview from '../screens/OverView';
import OrderDetail from '../screens/OrderDetail';
import Location from '../screens/Location';
import Feedback from '../screens/Feedback';
import OrderHistory from '../screens/OrderHistory';
import Contact from '../screens/Contact';
import Privacy from '../screens/Privacy';
import TandC from '../screens/TandC';
import Profile from '../screens/Profile';

const screens = {
  Home: {
    screen: Home,

  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      title: 'Notification',
      
    }
  },
  NotificationDetails: {
    screen: NotificationDetails,
    navigationOptions: {
      title: 'Notification Details',
    }
  },
  ItemList: {
    screen: ItemList,
    navigationOptions: {
      
    
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Cart Details',
    }
  },

  OrderDetail: {
    screen: OrderDetail,
    navigationOptions: {
      title: 'OrderDetail',
    }
  },
  Overview: {
    screen: Overview,
    navigationOptions: {
      title: 'Item Detail',
    }
  },
  Location: {
    screen: Location,
    navigationOptions: {
      title: 'Location',
    }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      title: 'Feedback',
    }
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      title: 'Order History',
    }
  },

  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact',
    }
  },
  TandC: {
    screen: TandC,
    navigationOptions: {
      title: 'Terms and Condition',
    }
  },
  Privacy: {
    screen: Privacy,
    navigationOptions: {
      title: 'Privacy',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'User Profile',
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



