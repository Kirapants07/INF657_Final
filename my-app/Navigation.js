import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UserAuth } from "./src/context/AuthContext";
import { MovieListProvider } from './src/context/MovieListContext';
import SignInScreen from './src/components/screens/SignInScreen';
import SignUpScreen from './src/components/screens/SignUpScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import ProfilePage from './src/components/screens/ProfilePage';
import FavoritesScreen from './src/components/screens/FavoritesScreen';
import ItemList from './src/components/ItemList';

const Stack = createStackNavigator(); //stack naviagator
const AuthStack = createStackNavigator(); //auth stack pages
const Tab = createBottomTabNavigator(); //Tab navigator
const Drawer = createDrawerNavigator(); ///Drawernaviagator

function HomeStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name ="Movie List" component={ItemList} />
      </Stack.Navigator>
  );
}
 
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#0693e3",
      }}
    >
      <Tab.Screen
        name="Movie List"
        component={ItemList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="heart"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Log In"
        component={SignInScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="login"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name ="SignIn" component={SignInScreen} />
    <Stack.Screen name ="SignUp" component={SignUpScreen} />
    <Stack.Screen name ="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

function DrawerNavigator() {
  return (
    <MovieListProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Movie List" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfilePage} />
      </Drawer.Navigator>
    </MovieListProvider>
  );
}

// wrap navigators
export default function Nav() {
  const { user } = UserAuth();
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}