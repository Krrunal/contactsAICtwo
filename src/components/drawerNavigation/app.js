import 'react-native-gesture-handler'

import * as React from "react";

import { Provider, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";

import About from "../../containers/About/index";
import AddContact from "../../containers/AddContact/index";
import AddContactAICUser from "../../containers/AddContactAICUser/index";
import AddmanuallyContact from "../../containers/ManuallyContact/index";
import AfterAddContact from "../../containers/AddContactAICUser/afterAddContact";
import AfterSentInvite from "../../containers/InviteContacts/afterSentInvite";
import COLORS from '../../containers/theme/Colors';
import ChooseContactFromLabel from "../../containers/AddContactAICUser/chooseContactFromLabel";
import ContactUs from "../../containers/ContactUs/index";
import { Dimensions } from 'react-native';
import Display from "../../containers/Display/index";
import EditContact from "../../containers/editContact/index";
import ForAddContact from "../../containers/AddContactAICUser/forAddContact";
import Help from "../../containers/Help/index";
import ImportContact from "../../containers/ImportContacts/index";
import ImportContacts from "../../containers/ImportContacts/index";
import Invite from "../../containers/InviteContacts/index";
import Label from "../../containers/Labels/index";
import Login from "../../containers/Login/index";
import ManageLable from "../../containers/ManageLable/index";
import ManuallyAddContact from "../../containers/AddContactAICUser/manuallyAddContact";
import MyContactInfromation from "../../containers/MyContactInformation/index";
import PendingRequest from "../../containers/PndingRequests/index";
import Profile from "../../containers/Profile/index";
import QRDetail from "../../containers/AddContactAICUser/QRDetails";
import QRScanner from "../../containers/AddContactAICUser/QRScanner";
import SearchContact from "../../containers/SearchContact/index";
import SelectLable from '../../containers/Labels/SelectLabels';
import SerachEditContact from "../../containers/SearchEditContact/index";
// import SerachEditContact2 from "../../containers/SearchEditContact/index2";
import Share from "../../containers/Share/index";
import SideBar from './DrawerContent';
import Signup from "../../containers/Signup/index";
import Splash from "../../containers/SplashScreen/index";
import ViewLabel from "../../containers/ViewLabel/index";
import ViewLabelByName from '../../containers/ViewLabelByName/index'
import addContactMultiple from '../../containers/AddContactAICUser/addContactMultiple'
import afterLogout from '../../containers/Login/afterLogout'
import afterRequestSend from '../../containers/AddContactAICUser/afterRequestSend'
import aftreMultiplReqSend from '../../containers/AddContactAICUser/aftreMultiplReqSend'
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import forAdd2 from '../../containers/AddContactAICUser/forAdd2'
import forSelectContact from '../../containers/ManageLable/forSelectContact'
import { themeReducer } from "../../reducer/themeReducer";

const RootNavigator = createStackNavigator({
    Splash: {
      screen: Splash,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode : 'locked-closed',
    }},
    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode : 'locked-closed',
    }},
    Signup: {
      screen: Signup,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        drawerLockMode : 'locked-closed',
    }},
    AddContact: {
      screen: AddContact,
      navigationOptions: {
       // gesturesEnabled: true,
        header: null,
       // drawerLockMode: 'locked-open',
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
    // SerachEditContact2: {
    //   screen: SerachEditContact2,
    //   navigationOptions: {
    //     gesturesEnabled: false,
    //     header: null,
    //     // drawerLockMode: 'unlocked',
    // }},
    SelectLable : {
      screen: SelectLable,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    addContactMultiple: {
      screen: addContactMultiple,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
    }},
    forAdd2: {
      screen: forAdd2,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
    }},
    aftreMultiplReqSend: {
      screen: aftreMultiplReqSend,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
    }},
    afterRequestSend: {
      screen: afterRequestSend,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    afterRequestSend: {
      screen: afterRequestSend,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
        // drawerLockMode: 'unlocked',
    }},
    afterLogout: {
      screen: afterLogout,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
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
  //  contentComponent: SideBar,
    contentComponent: (props) => (
      <SideBar {...props} />
     ),
    drawerWidth: Dimensions.get('window').width - Dimensions.get('window').width * 30 / 100,
    drawerType: 'front'
   
  }
);


const mapStateToProps = state => ({
    
});

const AppNavigation = connect(mapStateToProps)(DrawerNavigator);

export default createAppContainer( DrawerNavigator, AppNavigation );

// export default createAppContainer(DrawerNavigator);

