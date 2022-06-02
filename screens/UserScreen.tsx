import { StyleSheet } from "react-native";

import React, { useEffect, useState } from "react";

import { Text, View, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { useChatContext } from "stream-chat-expo";
import UserList from "./UserList";

export default function TabTwoScreen() {
  const [user, setUser] = useState<any[]>([]);

  const { client } = useChatContext();

  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const response = await client.queryUsers({});
    setUser(response.users);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        refreshing={isLoading}
        onRefresh={fetchUser}
        renderItem={({ item }) => <UserList user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
