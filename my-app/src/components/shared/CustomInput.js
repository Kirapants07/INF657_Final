import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

//a frame for all textinput fields
export default function CustomInput({placeholder, value, setValue, secureTextEntry}) {
  return (
<TextInput
    style={styles.input}
    placeholder={placeholder}
    onChangeText={setValue}
    value={value}
    secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderColor: "#f5f5f5",
        borderBottomColor: "black",
      },
})