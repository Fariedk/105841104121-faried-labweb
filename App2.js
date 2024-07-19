import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPasswordPage';
import SignUp from './signUp';
//import SignUp from './SignUp';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go to Login' onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;