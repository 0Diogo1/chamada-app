import { Stack } from "expo-router";
import { AuthProvider } from "@/src/authContext";
import { StatusBar } from "expo-status-bar";
import { DataProvider } from "@/src/DataProvider";
import { PaperProvider } from "react-native-paper";
import { greenTheme } from "@/components/Theme/theme";

export default function Layout() {
  return (
    <AuthProvider>
      <DataProvider>
        <PaperProvider theme={greenTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
          <StatusBar style="auto" />
        </PaperProvider>
      </DataProvider>
    </AuthProvider>
  );
}
