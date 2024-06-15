import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from './assets/Sabo1.png'

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 50 }}>Welcome!</Text>
      <Image
        source={logo}
        style={{ width: 200, height: 150, marginBottom: 100 }}
        />
        
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
        <View style={{ width: '45%', height: 50, backgroundColor: 'red',borderRadius:15, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white'}}>Sign Up</Text>
        </View>
        <View style={{ width: '45%', height: 50, backgroundColor: 'green', borderRadius:15, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white'}}>Login</Text>
        </View>
      </View>
    </View>
  )
}

export default App
