import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/core";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";

const ChannelScreen = () => {
  const route = useRoute();
  const channel = route.params?.channel;

  if (!channel) {
    return <Text>Channel Screen does not exist</Text>;
  }
  return (
    <Channel channel={channel} keyboardVerticalOffset={60}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;
