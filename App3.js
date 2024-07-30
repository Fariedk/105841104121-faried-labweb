import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import ShopPage from './Menu/ShopPage';
import BagPage from './Menu/BagPage';
import FavoritePage from './Menu/FavoritePage';
import ProfilePage from './Menu/ProfilePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/home-activated.png';
import HomeInaktif from './assets/icon/home-inactive.png';
import Shop from './assets/icon/shop-activated.png'
import ShopInaktif from './assets/icon/shop-inactive.png'
import Bag from './assets/icon/bag-activated.png'
import BagInaktif from './assets/icon/bag-inactive.png'
import Favorite from './assets/icon/favorites-activated.png'
import FavoriteInaktif from './assets/icon/favorites-inactive.png'
import Profile from './assets/icon/profil-activated.png'
import ProfileInaktif from './assets/icon/profil-inactive.png'



const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Bag : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Favorite : FavoriteInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Profile : ProfileInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Shop" component={ShopPage} />
        <Stack.Screen name="Bag" component={BagPage} />
        <Stack.Screen name="Favorite" component={FavoritePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;