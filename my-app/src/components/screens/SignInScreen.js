import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn } = UserAuth();

    const navigation = useNavigation();

    const onSignIn = async (e) => {
        e.preventDefault();
        try{
            await signIn(email, password);
            console.log("Logged in");
            navigation.navigate("MovieList");
        }
        catch(error) {
            alert("Login failed: " + error.message);
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
        <Text>
            <h1>Log In</h1>
        </Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text="Sign In With Email" onPress={onSignIn}/>
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
});