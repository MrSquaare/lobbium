import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { apiClient } from "../../lib/api";
import { authClient } from "../../lib/auth";

const fetchHelloUser = async () => {
  const cookie = authClient.getCookie();

  const response = await apiClient.hello.user.$get(
    {},
    {
      headers: { cookie },
    },
  );

  return response.json();
};

export default function Index() {
  const helloUser = useQuery({
    queryKey: ["hello-user"],
    queryFn: () => fetchHelloUser(),
  });
  const signOut = useMutation({
    mutationKey: ["session"],
    mutationFn: async () => {
      return authClient.signOut();
    },
  });

  const error = signOut.error?.message ?? signOut.data?.error?.message;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome App!</Text>
      {helloUser.isPending ? (
        <Text>Loading...</Text>
      ) : helloUser.isError ? (
        <Text>Error: {helloUser.error.message}</Text>
      ) : (
        <Text>Data: {JSON.stringify(helloUser.data)}</Text>
      )}
      {signOut.isPending ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : null}
      <Link asChild href={"/auth/sign-in"}>
        <Button title={"Go to Sign In"} />
      </Link>
      <Link asChild href={"/"}>
        <Button title={"Go to Home"} />
      </Link>
      <Button
        onPress={() => {
          signOut.mutate();
        }}
        title={"Sign Out"}
      />
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
