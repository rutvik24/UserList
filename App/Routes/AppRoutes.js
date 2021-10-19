import InitialScreen from '../Screens/Components/Initial';
import Login from '../Screens/Components/Login/Login';
import AppTab from './AppTab';
import {Favorite} from '../Screens/Components/Home/Favorite';
import {UserDetails} from '../Screens/Components/Home/UserDetails';

const Routes = [
  {
    name: 'InitialScreen',
    screen: InitialScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    screen: AppTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Favorite',
    screen: Favorite,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'UserDetails',
    screen: UserDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export default Routes;
