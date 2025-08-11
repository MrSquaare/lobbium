import { Redirect, Slot } from "expo-router";
import { Text } from "react-native";

import { authClient } from "../../lib/auth";

export default function Layout() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={"/auth/sign-in"} />;
  }

  return <Slot />;
}
