import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Login from '../screens/home';
import Register from '../screens/home/nextPage';

const Route = createMaterialTopTabNavigator(
  {
    ['Login']: {
      screen: Login,
    },
    ['Register']: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({navigation}) => ({
      swipeEnabled: true,
      tabBarOptions: {
        indicatorStyle: {
          backgroundColor: 'white',
        },
        scrollEnabled: true,
        upperCaseLabel: false,
      },
      style: {
        backgroundColor: 'black',
        // position: 'absolute',
        right: 0,
      },
      headerTitleContainerStyle: {
        right: 0,
      },
    }),
  },
);

export default createAppContainer(Route);
