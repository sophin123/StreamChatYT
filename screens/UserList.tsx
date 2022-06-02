import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { useChatContext } from "stream-chat-expo";
import AuthContext from "../context/Authentication";
import { useNavigation } from "@react-navigation/core";

export default function UserList({ user }) {
  const { client } = useChatContext();
  const { userId } = useContext(AuthContext);
  const navigation = useNavigation();

  const createChannel = async () => {
    const channel = client.channel("messaging", { members: [user.id, userId] });
    channel.watch();

    navigation.navigate("Channel", { channel });
  };
  return (
    <Pressable onPress={createChannel} style={styles.root}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.text}>{user.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
    margin: 10,
  },
  text: {
    alignItems: "center",
    margin: 10,
  },
});
