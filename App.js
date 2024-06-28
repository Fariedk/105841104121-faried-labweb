import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
//import logo from './assets/Sabo1.png'

const App = () => {
  const [fontloaded] = useFonts({
    MetropolisBlack: require('./assets/fonts/Metropolis-Black.otf'),
    MetropolisBold: require('./assets/fonts/Metropolis-Bold.otf'),
    MetropolisLight: require('./assets/fonts/Metropolis-Light.otf'),
    MetropolisSemiBold: require('./assets/fonts/Metropolis-SemiBold.otf'),
  })
  if (!fontloaded) {
    return <Text>font tidak ditemukan</Text>
  }
  return (
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <Text style = {{fontFamily: 'MetropolisBlack', fontSize : 20}}>Metropolisblak</Text>
      <Text style = {{fontFamily: 'Metropolisbold', fontSize : 20}}>MetropolisBold</Text>
      <Text style = {{fontFamily: 'Metropolislight', fontSize : 20}}>MetropolisLight</Text>
      <Text style = {{fontFamily: 'MetropolisSemiBold', fontSize : 20}}>MetropolisSemiBold</Text>
    </View>
  )
}
export default App
