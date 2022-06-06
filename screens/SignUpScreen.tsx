import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import { useChatContext } from "stream-chat-expo";
import AuthContext from "../context/Authentication";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const { client } = useChatContext();
  const { setUserId } = useContext(AuthContext);

  const connectUser = async (username: string, fullName: string) => {
    try {
      await client.connectUser(
        {
          id: username,
          name: fullName,
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        client.devToken(username)
      );
      // const channel = client.channel("livestream", "ReactDev", {
      //   name: "ReactDev",
      // });
      // await channel.create();
      setUserId(username);
    } catch (e) {
      console.warn(e);
    }
  };

  const signUp = () => {
    connectUser(username, fullName);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Username"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          placeholder="Full Name"
        />
      </View>
      <Pressable onPress={signUp} style={styles.button}>
        <Text>SignUp</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  inputContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  input: {},
  button: {
    backgroundColor: "#256CFF",
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
});
