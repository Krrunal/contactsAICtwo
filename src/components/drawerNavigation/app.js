import "react-native-gesture-handler";
import * as React from "react";
import { Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import { Provider, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";

import { themeReducer } from "../../reducer/themeReducer";
import {SideBar} from './DrawerContent';
import COLORS from '../../containers/theme/Colors';

import Splash from "../../containers/SplashScreen/index";
import Login from "../../containers/Login/index";
import Signup from "../../containers/Signup/index";
import AddContact from "../../containers/AddContact/index";
import Share from "../../containers/Share/index";
import MyContactInfromation from "../../containers/MyContactInformation/index";
import Display from "../../containers/Display/index";
import About from "../../containers/About/index";
import ContactUs from "../../containers/ContactUs/index";
import Help from "../../containers/Help/index";
import AddContactAICUser from "../../containers/AddContactAICUser/index";
import ImportContacts from "../../containers/ImportContacts/index";
import Invite from "../../containers/InviteContacts/index";
import Label from "../../containers/Labels/index";
import ManageLable from "../../containers/ManageLable/index";
import Profile from "../../containers/Profile/index";
import QRDetail from "../../containers/AddContactAICUser/QRDetails";
import QRScanner from "../../containers/AddContactAICUser/QRScanner";
import SerachEditContact from "../../containers/SearchEditContact/index";
import ViewLabel from "../../containers/ViewLabel/index";
import ViewLabelByName from '../../containers/ViewLabelByName/index'
import AddmanuallyContact from "../../containers/ManuallyContact/index";
import AfterAddContact from "../../containers/AddContactAICUser/afterAddContact";
import AfterSentInvite from "../../containers/InviteContacts/afterSentInvite";
import ChooseContactFromLabel from "../../containers/AddContactAICUser/chooseContactFromLabel";
import EditContact from "../../containers/editContact/index";
import ForAdd2 from "../../containers/AddContactAICUser/forAdd2";
import ForAddContact from "../../containers/AddContactAICUser/forAddContact";
import ImportContact from "../../containers/ImportContacts/index";
import ManuallyAddContact from "../../containers/AddContactAICUser/manuallyAddContact";
import PendingRequest from "../../containers/PndingRequests/index";
import SearchContact from "../../containers/SearchContact/index";

const RootNavigator = createStackNavigator({
    Splash: {
      screen: Splash,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode: 'unlocked',
    }},
    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode: 'unlocked',
    }},
    Signup: {
      screen: Signup,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode: 'unlocked',
    }},
    AddContact: {
      screen: AddContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Share: {
      screen: Share,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    MyContactInfromation: {
      screen: MyContactInfromation,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Display: {
      screen: Display,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    About: {
      screen: About,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Help: {
      screen: Help,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    AddContactAICUser: {
      screen: AddContactAICUser,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ImportContacts: {
      screen: ImportContacts,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Invite: {
      screen: Invite,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Label: {
      screen: Label,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ManageLable: {
      screen: ManageLable,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    Profile: {
      screen: Profile,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    QRDetail: {
      screen: QRDetail,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    QRScanner: {
      screen: QRScanner,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    SerachEditContact: {
      screen: SerachEditContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ViewLabel: {
      screen: ViewLabel,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ViewLabelByName: {
      screen: ViewLabelByName,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    AddmanuallyContact: {
      screen: AddmanuallyContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    AfterAddContact: {
      screen: AfterAddContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    AfterSentInvite: {
      screen: AfterSentInvite,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ChooseContactFromLabel: {
      screen: ChooseContactFromLabel,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    EditContact: {
      screen: EditContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ForAdd2: {
      screen: ForAdd2,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ForAddContact: {
      screen: ForAddContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ImportContact: {
      screen: ImportContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    ManuallyAddContact: {
      screen: ManuallyAddContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    PendingRequest: {
      screen: PendingRequest,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    SearchContact: {
      screen: SearchContact,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
  },
    {
      initialRouteName: 'Splash',
      mode: 'slide',
      navigationOptions: {
        gesturesEnabled: false
      }
    }
);

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen: RootNavigator,
    navigationOptions: {
      header: null,
    }
  },
},
  {
    initialRouteName: 'Main',
    drawerPosition: 'left',
    contentComponent: SideBar,
    drawerWidth: Dimensions.get('window').width - Dimensions.get('window').width * 25 / 100,
    drawerType: "front"
    // overlayColor: COLORS.transparent,
  }
);

export default createAppContainer(DrawerNavigator);
