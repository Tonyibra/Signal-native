import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);
  const registerHandler = async () => {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      authUser.user.updateProfile({
        displayName: name,
        photoURL:
          imageUrl ||
          "https://scontent.fbey4-1.fna.fbcdn.net/v/t1.6435-9/214612142_4119439614804100_1927723861686246274_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qVJtvL-EDbMAX-hPHK7&_nc_ht=scontent.fbey4-1.fna&oh=61a38e6edf32b08b564ea59e8a1ac3ef&oe=60FBB558",
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="auto" />
      <Text h3 style={{ marginBottom: 30 }}>
        Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Passowrd"
          type="passowrd"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={registerHandler}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={registerHandler}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
