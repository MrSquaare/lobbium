import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { queryClient } from "../lib/query";

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar style={"auto"} />
        <Text>Hello, &quot;_layout&quot;!</Text>
        <Slot />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create((_, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left,
    paddingRight: rt.insets.right,
  },
}));
