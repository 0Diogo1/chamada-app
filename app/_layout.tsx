import { Stack } from "expo-router";
import { AuthProvider } from "@/src/authContext";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
