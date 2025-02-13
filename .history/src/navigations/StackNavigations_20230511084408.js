import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screen/DashboardScreen";
import UserProfileScreen from "../screen/UserProfileScreen";
import EditProfileScreen from "../screen/EditProfileScreen";
import SignUpScreen from "../screen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen";
import LeaveApplicationScreen from "../screen/LeaveApplicationScreen";
import LeaveApplicationSentSceen from "../screen/LeaveApplicationSentSceen";
import LeavApplicationVPdfScreen from "../screen/LeavApplicationVPdfScreen";
import AttendenceScreen from "../screen/AttendenceScreen";
import RequisitionInputScreen from "../screen/RequisitionInputScreen";
import RequisitionApiConfigScreen from "../screen/RequisitionApiConfigScreen";
import RequisitionPdfScreen from "../screen/RequisitionPdfScreen";
import TaDaBillInputScreen from "../screen/TaDaBillInputScreen";
import TaDaBillConfigScreen from "../screen/TaDaBillConfigScreen";
import TaDaBillPdfViewScreen from "../screen/TaDaBillPdfViewScreen";
import WelcomeLearningPage from "../screen/WelcomeLearningPage";
import NotificationScreen from "../screen/NotificationScreen";
import firebase from "firebase/compat";
import DrawerNavigator from "./DrawerNavigator";

const StackNavigations = () => {
  const Stack = createNativeStackNavigator();

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function AuthStateChangeUser (user) {
  //   setUser(user);
  //   if(initializing) setInitializing(false);
  // }
  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="SignUpScreen"
  //         component={SignUpScreen}
  //         />
  //         <Stack.Screen
  //         name="LoginScreen"
  //         component={LoginScreen}
  //         />
  //     </Stack.Navigator>
  //   );
  // }

  return (
    <>
      <StatusBar
        style="auto"
        backgroundColor="#370054"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DashboardScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="DashboardScreen" component={DrawerNavigator} />

          <Stack.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
          />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="LeaveApplicationScreen"
            component={LeaveApplicationScreen}
          />
          <Stack.Screen
            name="LeaveApplicationSentSceen"
            component={LeaveApplicationSentSceen}
          />
          <Stack.Screen
            name="LeavApplicationVPdfScreen"
            component={LeavApplicationVPdfScreen}
          />
          <Stack.Screen name="AttendenceScreen" component={AttendenceScreen} />
          <Stack.Screen
            name="RequisitionInputScreen"
            component={RequisitionInputScreen}
          />
          <Stack.Screen
            name="RequisitionApiConfigScreen"
            component={RequisitionApiConfigScreen}
          />
          <Stack.Screen
            name="RequisitionPdfScreen"
            component={RequisitionPdfScreen}
          />
          <Stack.Screen
            name="TaDaBillInputScreen"
            component={TaDaBillInputScreen}
          />
          <Stack.Screen
            name="TaDaBillConfigScreen"
            component={TaDaBillConfigScreen}
          />
          <Stack.Screen
            name="TaDaBillPdfViewScreen"
            component={TaDaBillPdfViewScreen}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen
            name="WelcomeLearningPage"
            component={WelcomeLearningPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
