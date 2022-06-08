import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ChannelList } from "stream-chat-expo";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Channel as ChannelType } from "stream-chat";
import AuthContext from "../context/Authentication";

export default function ChannelListScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  // const [channel, setChannel] = useState<ChannelType>();

  const { userId } = useContext(AuthContext);

  const onChannelPressed = (channel) => {
    navigation.navigate("Channel", { channel });
  };

  const filter = {
    members: {
      $in: [userId],
    },
  };

  return <ChannelList onSelect={onChannelPressed} filters={filter} />;
}
