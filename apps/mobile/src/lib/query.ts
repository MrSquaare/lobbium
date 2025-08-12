import { onlineManager, QueryClient } from "@tanstack/react-query";
import { addNetworkStateListener } from "expo-network";

onlineManager.setEventListener((setOnline) => {
  const listener = addNetworkStateListener((state) => {
    setOnline(!!state.isConnected);
  });

  return () => listener.remove();
});

export const queryClient = new QueryClient();
