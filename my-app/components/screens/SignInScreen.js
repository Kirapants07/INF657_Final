import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import defaultUser from "../../images/defaultUser.jpg";
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const {signIn, logOut } = UserAuth();

    const navigation = useNavigation();

    const onSignIn = async (e) => {
        e.preventDefault();
        try{
            await signIn(email, password);
            console.log("Logged in");
            navigation.navigate("ShoppingList");
        }
        catch(error) {
            console.log(error);
        }
    };

    const onLogOut = async () => {
        try{
            await logOut();
            navigation.navigate("SignIn");
        }
        catch(error) {
            console.log(error);
        }
    };

    const onForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    }

    const onSignUp = () => {
        navigation.navigate("SignUp");
    }

  return (
    <View style={styles.main}>
        <Image source={defaultUser} style={(styles.defaultUser, {height: height * 0.3})} resizeMode="contain" />   
        {/* <Image source={defaultUser} style={styles.defaultUser} />     */}
        <Text>
            <h1>Log In</h1>
        </Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text="Sign In With Email" onPress={onSignIn}/>
        <CustomButton text="Log Out" onPress={onLogOut}/>
        <CustomButton text="Forgot Password" onPress={onForgotPassword} bgColor="#4fa6d1" />
        <CustomButton text="Don't have an account? Sign Up" onPress={onSignUp} bgColor="#f5c542" />
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    defaultUser: {
        height: 100,
        padding:40,
        width: "70%",
        maxHeight: 100,
        maxWidth: 500,
    },
});