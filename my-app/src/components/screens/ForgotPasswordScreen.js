import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onConfirm = () => {
        alert("Link sent.");
    };

    const onHandle = () => {
        navigation.navigate("SignIn");
    };

  return (
    <View style={styles.main}>
        <Text><h1 style={styles.title}>Reset Password</h1></Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomButton text="Send Reset Password Link" onPress={onConfirm} bgColor="#f5c542" />
        <CustomButton text="Back to Sign In" onPress={onHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    title: {
        contSize: 50,
        fontWeight: "bold",
    },
});