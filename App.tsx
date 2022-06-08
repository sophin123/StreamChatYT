import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { useEffect, useState, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StreamChat, Channel as ChannelType } from "stream-chat";

import {
  Chat,
  OverlayProvider,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
  MessageType,
  Thread,
} from "stream-chat-expo";

import AuthContext from "./context/Authentication";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

const API_KEY = "udtj83g2nh2a";

const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [channel, setChannel] = useState<ChannelType>();

  // const [isReady, setIsReady] = useState(false);
  const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   return () => client.disconnectUser();
  // }, [false]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContext.Provider value={{ userId, setUserId }}>
          <OverlayProvider>
            <Chat client={client}>
              <Navigation colorScheme="light" />
            </Chat>
            {/* <TouchableOpacity
            onPress={() => {
              onBackPress();
            }}
          >
            <View style={{ padding: 10, marginTop: 30 }}>
              <Text>Go Back</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Chat client={client}>
              {channel ? (
                <Channel
                  channel={channel}
                  keyboardVerticalOffset={60}
                  thread={thread}
                  threadList={!!thread}
                >
                  {thread ? (
                    <Thread />
                  ) : (
                    <>
                      <MessageList onThreadSelect={setThread} />
                      <MessageInput />
                    </>
                  )}
                </Channel>
              ) : (
                
              )}
            </Chat>
          </View> */}
          </OverlayProvider>
        </AuthContext.Provider>
      </SafeAreaProvider>
    );
  }
}
