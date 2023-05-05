import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/components/screens/SignInScreen';
import SignUpScreen from './src/components/screens/SignUpScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import ShoppingList from './src/components/ShoppingList';
import MyTabs from './BottomNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name ="MyTabs" component={MyTabs} />
            <Stack.Screen name ="SignIn" component={SignInScreen} />
            <Stack.Screen name ="SignUp" component={SignUpScreen} />
            <Stack.Screen name ="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name ="ShoppingList" component={ShoppingList} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();
 