import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import EventDescription from "../pages/EventDescription";
import Payment from "../pages/Payment";
import Login from "../pages/Login";
import EventList from "../pages/EventList";

import colors from "../styles/colors";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <stackRoutes.Screen name="Home" component={Home}></stackRoutes.Screen>

    <stackRoutes.Screen
      name="EventList"
      component={EventList}
    ></stackRoutes.Screen>

    <stackRoutes.Screen name="Login" component={Login}></stackRoutes.Screen>

    <stackRoutes.Screen
      name="EventDescription"
      component={EventDescription}
    ></stackRoutes.Screen>

    <stackRoutes.Screen name="Payment" component={Payment}></stackRoutes.Screen>
  </stackRoutes.Navigator>
);

export default AppRoutes;
