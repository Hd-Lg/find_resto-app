import * as React from "react";
import { Home } from "./screens/";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <Home />
        </SafeAreaProvider>
    );
}
