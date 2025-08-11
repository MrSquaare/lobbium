import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { apiClient } from "../lib/api";

const fetchHelloWorld = async () => {
  return apiClient.hello.world.$get().then((res) => res.json());
};

export default function Index() {
  const helloWorld = useQuery({
    queryKey: ["hello-world"],
    queryFn: () => fetchHelloWorld(),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      {helloWorld.isPending ? (
        <Text>Loading...</Text>
      ) : helloWorld.isError ? (
        <Text>Error: {helloWorld.error.message}</Text>
      ) : (
        <Text>Data: {helloWorld.data.message}</Text>
      )}
      <Link asChild href={"/auth/sign-in"}>
        <Button title={"Go to Sign In"} />
      </Link>
      <Link asChild href={"/app"}>
        <Button title={"Go to App"} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
