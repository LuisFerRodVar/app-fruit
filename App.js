import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/Login";
import Register from "./src/Register";
import Add from "./src/Add";


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="add" component={Add} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;


