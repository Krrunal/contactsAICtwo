import 'react-native-gesture-handler';

import * as React from 'react';

import About from '../../containers/About/index'
import AddContact from '../../containers/AddContact/index';
import AddContactAICUser from '../../containers/AddContactAICUser/index';
import ContactUs from '../../containers/ContactUs/index';
import {DrawerContent} from './DrawerContent';
import ImportContacts from '../../containers/ImportContacts/index';
import Invite from '../../containers/InviteContacts/index'
import Label from '../../containers/Labels/index';
import Login from '../../containers/Login/index';
import ManageLable from '../../containers/ManageLable/index';
import MyContactInfromation from '../../containers/MyContactInformation/index';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../../containers/Profile/index';
import SerachEditContact from '../../containers/SearchEditContact/index';
import Share from '../../containers/Share /index';
import Signup from '../../containers/Signup/index';
import Splash from '../../containers/SplashScreen/index';
import ViewLabel from '../../containers/ViewLabel/index';
import addmanuallyContact from '../../containers/ManuallyContact/index'
import afterAddContact from '../../containers/AddContactAICUser/afterAddContact'
import afterSentInvite from '../../containers/InviteContacts/afterSentInvite'
import chooseContactFromLabel from '../../containers/AddContactAICUser/chooseContactFromLabel'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import display from '../../containers/Display/index';
import forAdd2 from '../../containers/AddContactAICUser/forAdd2'
import forAddContact from '../../containers/AddContactAICUser/forAddContact';
import help from '../../containers/Help/index'
import importContact from '../../containers/ImportContacts/index';
import manuallyAddContact from '../../containers/AddContactAICUser/manuallyAddContact';
import pendingRequest from '../../containers/PndingRequests/index';
import searchContact from '../../containers/SearchContact/index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function drawerRoutes() {
  return (
    // <NavigationContainer>
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
        <Drawer.Screen
            name="manuallyAddContact"
            component={manuallyAddContact}
            //options={{ title: 'Welcome' }}
          />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="searchContact" component={searchContact} />
        <Drawer.Screen name="Invite" component={Invite} />
        <Drawer.Screen name="Label" component={Label} />
        
        <Drawer.Screen name="afterAddContact" component={afterAddContact} />
        <Drawer.Screen name="forAddContact" component={forAddContact} />
        
       
        <Drawer.Screen name="afterSentInvite" component={afterSentInvite} />
        <Drawer.Screen name="help" component={help} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen
            name="AddContactAICUser"
            component={AddContactAICUser}
            //options={{ title: 'Welcome' }}
          />
  <Drawer.Screen
            name="chooseContactFromLabel"
            component={chooseContactFromLabel}
            //options={{ title: 'Welcome' }}
          />
                    <Drawer.Screen name="addmanuallyContact" component={addmanuallyContact} />

      </Drawer.Navigator>
    // </NavigationContainer>
  );
}


function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            // options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            // options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="AddContact"
            component={drawerRoutes}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="ImportContacts"
            component={ImportContacts}
            //options={{ title: 'Welcome' }}
          />
           <Stack.Screen
            name="AddContactAICUser"
            component={AddContactAICUser}
            //options={{ title: 'Welcome' }}
          />
           <Stack.Screen
            name="manuallyAddContact"
            component={manuallyAddContact}
            //options={{ title: 'Welcome' }}
          />
           <Stack.Screen
            name="afterSentInvite"
            component={afterSentInvite}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="forAddContact"
            component={forAddContact}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="afterAddContact"
            component={afterAddContact}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Invite"
            component={Invite}
            //options={{ title: 'Welcome' }}
          />
           <Stack.Screen
            name="chooseContactFromLabel"
            component={chooseContactFromLabel}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="SerachEditContact" component={SerachEditContact} />
          <Stack.Screen name="addmanuallyContact" component={addmanuallyContact} />
          <Stack.Screen name="forAdd2" component={forAdd2} />

        </Stack.Navigator>
      </NavigationContainer>
    );
    
}
export default App;

