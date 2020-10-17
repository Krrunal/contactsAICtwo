import "react-native-gesture-handler";

import * as React from "react";

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";

import About from "../../containers/About/index";
import AddContact from "../../containers/AddContact/index";
import AddContactAICUser from "../../containers/AddContactAICUser/index";
import ContactUs from "../../containers/ContactUs/index";
import { DrawerContent } from "./DrawerContent";
import ImportContacts from "../../containers/ImportContacts/index";
import Invite from "../../containers/InviteContacts/index";
import Label from "../../containers/Labels/index";
import Login from "../../containers/Login/index";
import ManageLable from "../../containers/ManageLable/index";
import MyContactInfromation from "../../containers/MyContactInformation/index";
import { PersistGate } from "redux-persist/integration/react";
import Profile from "../../containers/Profile/index";
import SerachEditContact from "../../containers/SearchEditContact/index";
import Share from "../../containers/Share/index";
import Signup from "../../containers/Signup/index";
import Splash from "../../containers/SplashScreen/index";
import ViewLabel from "../../containers/ViewLabel/index";
import addmanuallyContact from "../../containers/ManuallyContact/index";
import afterAddContact from "../../containers/AddContactAICUser/afterAddContact";
import QRScanner from '../../containers/AddContactAICUser/QRScanner';
import QRDetail from '../../containers/AddContactAICUser/QRDetail';

import afterSentInvite from "../../containers/InviteContacts/afterSentInvite";
// import allReducers from "../../reducer/index";
import chooseContactFromLabel from "../../containers/AddContactAICUser/chooseContactFromLabel";
import { combineReducers } from "redux";
import { contactReducer } from "../../reducer/contactReducer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import display from "../../containers/Display/index";
import editContact from "../../containers/editContact/index";
import forAdd2 from "../../containers/AddContactAICUser/forAdd2";
import forAddContact from "../../containers/AddContactAICUser/forAddContact";
import help from "../../containers/Help/index";
import importContact from "../../containers/ImportContacts/index";
import { loginReducer } from "../../reducer/loginReducer";
import manuallyAddContact from "../../containers/AddContactAICUser/manuallyAddContact";
import pendingRequest from "../../containers/PndingRequests/index";
import searchContact from "../../containers/SearchContact/index";
import storeRedux from "../../reducer/index";
import { themeReducer } from "../../reducer/themeReducer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const customDarkTheme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     backColor: "#000",
//     headerColor: "#323232",
//     textColor: "white",
//     iconColor: "white",
//   },
// };

// const customDefaultTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     backColor: "#ffffff",
//     headerColor: "#1374A3",
//     textColor: "#000",
//     iconColor: "rgba(0,0,0,0.4)",
//   },
// };

function drawerRoutes() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="AddContact" component={AddContact} />

      <Drawer.Screen name="Share" component={Share} />
      <Drawer.Screen
        name="MyContactInfromation"
        component={MyContactInfromation}
      />
      <Drawer.Screen name="importContact" component={importContact} />
      <Drawer.Screen name="pendingRequest" component={pendingRequest} />
      <Drawer.Screen name="SerachEditContact" component={SerachEditContact} />
      <Drawer.Screen name="ImportContacts" component={ImportContacts} />

      <Drawer.Screen name="ManageLable" component={ManageLable} />

      <Drawer.Screen name="ViewLabel" component={ViewLabel} />
      <Drawer.Screen name="display" component={display} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="manuallyAddContact" component={manuallyAddContact} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="searchContact" component={searchContact} />
      <Drawer.Screen name="Invite" component={Invite} />
      <Drawer.Screen name="Label" component={Label} />

      <Drawer.Screen name="afterAddContact" component={afterAddContact} />
      <Drawer.Screen name="forAddContact" component={forAddContact} />
      <Drawer.Screen name="forAdd2" component={forAdd2} />
      <Drawer.Screen name="QRScanner" component={QRScanner} />
      <Drawer.Screen name="QRDetail" component={QRDetail} />

      <Drawer.Screen name="afterSentInvite" component={afterSentInvite} />
      <Drawer.Screen name="help" component={help} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="AddContactAICUser" component={AddContactAICUser} />
      <Drawer.Screen
        name="chooseContactFromLabel"
        component={chooseContactFromLabel}
      />
      <Drawer.Screen name="addmanuallyContact" component={addmanuallyContact} />
    </Drawer.Navigator>
  );
}
export default App = () => {
  const { store, persistor } = storeRedux();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export function Navigation() {
  // let currentTheme = useSelector((state) => {
  //   return state.myDarMode;
  // });

  return (
    <NavigationContainer
    // theme={currentTheme ? customDarkTheme : customDefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddContact" component={drawerRoutes} />
        <Stack.Screen name="ImportContacts" component={ImportContacts} />
        <Stack.Screen name="AddContactAICUser" component={AddContactAICUser} />
        <Stack.Screen
          name="manuallyAddContact"
          component={manuallyAddContact}
        />
        <Stack.Screen name="afterSentInvite" component={afterSentInvite} />
        <Stack.Screen name="forAddContact" component={forAddContact} />
        <Stack.Screen name="afterAddContact" component={afterAddContact} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="QRDetail" component={QRDetail} />

        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen
          name="chooseContactFromLabel"
          component={chooseContactFromLabel}
        />
        <Stack.Screen name="SerachEditContact" component={SerachEditContact} />
        <Stack.Screen
          name="addmanuallyContact"
          component={addmanuallyContact}
        />
        <Stack.Screen name="forAdd2" component={forAdd2} />

        <Stack.Screen name="editContact" component={editContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default App;
