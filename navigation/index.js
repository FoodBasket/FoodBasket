import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import Browse from "../screens/Browse";
import Profile from "../screens/Profile";
import Attendance from "../screens/Attendance";
import ClassRoutine from "../screens/ClassRoutine";
import DayRoutine from "../screens/DayRoutine";
import Homework from "../screens/Homework";
import HomeworkDetails from "../screens/HomeworkDetails";
import ExamRoutine from "../screens/ExamRoutine";
import ExamDetails from "../screens/ExamDetails";
import Results from "../screens/Results";
import ResultDetails from "../screens/ResultDetails";
import ProjectWork from "../screens/ProjectWork";
import ProjectDetails from "../screens/ProjectDetails";
import Library from "../screens/Library";
import Suggestion from "../screens/Suggestion";
import AboutForgot from "../screens/AboutForgot";
import SchoolDetails from "../screens/SchoolDetails";
import DueDetails from "../screens/DueDetails";
import BusDetails from "../screens/BusDetails";
import BusRoute from "../screens/BusRoute";
import AbsentDetails from "../screens/AbsentDetails";
import Leave from "../screens/Leave";
import Notification from "../screens/Notification";
import NotificationDetails from "../screens/NotificationDetails";
import AboutApp from "../screens/AboutApp";
import Register from "../screens/Register";
import ItemList from "../screens/ItemList";
import OverView from "../screens/OverView";
import Cart from "../screens/Cart";
import OrderDetail from "../screens/OrderDetail";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Forgot,
    Browse,
    Profile,
    Attendance,
    ClassRoutine,
    DayRoutine,
    Homework,
    HomeworkDetails,
    ExamRoutine,
    ExamDetails,
    Results,
    ResultDetails,
    ProjectWork,
    ProjectDetails,
    Library,
    Suggestion,
    AboutForgot,
    SchoolDetails,
    DueDetails,
    BusDetails,
    BusRoute,
    AbsentDetails,
    Leave,
    Notification,
    NotificationDetails,
    AboutApp,
    Register,
    ItemList,
    OverView,
    Cart,
    OrderDetail,
  },
  {
    headerLayoutPreset: 'center',
    
  },
  {
    defaultNavigationOptions: {
       
      
    }
  }
);

export default createAppContainer(screens);
