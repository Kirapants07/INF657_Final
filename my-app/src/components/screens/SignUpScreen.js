import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    //import from AuthContext.js
    const { createUser} = UserAuth();

    const onRegister = async (e) => {
        e.preventDefault();
        const data = { username, email, password, confirmPassword};
        console.log(data);
        try{
            await createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.navigate("MovieList");
            })
        }
        catch (error) {
            alert("Account creation failed: " + error.message);
        }
        //reset input fields/states
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const onLogIn = () => {
        navigation.navigate("SignIn");
    }


  return (
    <View style={styles.main}>
        <Text><h1 style={styles.title}>Create an Account</h1></Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true} />
        <CustomButton text="Sign Up" onPress={onRegister} />
        <CustomButton text="Already have an account? Log In" onPress={onLogIn} bgColor="#f5c542" />
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    title: {
        contSize: 50,
        fontWeight: "bold",
    },
});