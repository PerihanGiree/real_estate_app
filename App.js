import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./src/navigationn/AuthStack";

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
