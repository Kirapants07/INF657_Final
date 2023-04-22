import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { auth } from "../../firebase";
  import defaultUser from "../../images/defaultUser.jpg";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import { UserAuth } from "../../context/AuthContext";

export default function ProfilePage() {
    const [email, setEmail] = useState(auth.currentUser.email);
    const [username, setUsername] = useState("");
  
    const { height } = useWindowDimensions();
    const { updateUser } = UserAuth();
  
    const onEdit = async (e) => {
      e.preventDefault();
      const data = { username, email };
      console.log(data);
      try {
        await updateUser(username, email);
      } catch (err) {
        console.log(err);
      }
    };

    const {logOut } = UserAuth();

    const onLogOut = async () => {
      try{
          await logOut();
          navigation.navigate("SignIn");
      }
      catch(error) {
          console.log(error);
      }
  };
  
    return (
      <View style={styles.main}>
        <Image
          source={defaultUser}
          style={(styles.defaultUser, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <Text style={styles.title}>Profile Page</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Edit Profile" onPress={onEdit} />
        <CustomButton text="Log Out" onPress={onLogOut} bgColor="#f5c542" />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      padding: 40,
    },
    defaultUser: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
    title: { fontSize: 30, fontWeight: "bold" },
  });