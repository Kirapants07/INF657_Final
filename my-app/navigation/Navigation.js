import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../components/screens/SignInScreen';
import SignUpScreen from '../components/screens/SignUpScreen';
import ForgotPasswordScreen from '../components/screens/ForgotPasswordScreen';
import AddItem from '../components/AddItem';
import ShoppingList from '../components/ShoppingList';
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
  )
}