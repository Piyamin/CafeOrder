/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens

import HomeScreen from './drawerScreens/HomeScreen';
import CartScreen from './drawerScreens/CartScreen';

import SettingsScreen from './drawerScreens/SettingsScreen';
import CategoryScreen from './drawerScreens/CategoryScreen';
import PromotionScreen from './drawerScreens/PromotionScreen';
import DetailScreen from './drawerScreens/DetailScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import MenuScreen from './drawerScreens/MenuScreen';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Setting Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});

const CategoryActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CategoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Category Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});
const PromotionActivity_StackNavigator = createStackNavigator({
  First: {
    screen: PromotionScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Promotion Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});
const DetailActivity_StackNavigator = createStackNavigator({
  First: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Detail Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});
const CartActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CartScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Cart Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});
const MenuActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Menu Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#350D04',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    CategoryScreen: {
      screen: CategoryActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Category Screen',
      },
    },
    PromotionScreen: {
      screen: PromotionActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Promotion Screen',
      },
    },
    DetailScreen: {
      screen: DetailActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Detail Screen',
      },
    },
    CartScreen: {
      screen: CartActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Cart Screen',
      },
    },
    MenuScreen: {
      screen: MenuActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Menu Screen',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
