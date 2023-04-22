import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ShoppingList from "../components/ShoppingList";
import ProfilePage from "../components/screens/ProfilePage";
import SignInScreen from "../components/screens/SignInScreen";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#0693e3",
      }}
    >
      <Tab.Screen
        name="Shopping List"
        component={ShoppingList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile Page"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-circle"
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