import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import logo from './assets/Sabo1.png'

const ButtonCustom = ({text, color}) => {
  return (
    <View style={{ backgroundColor: color, width: 250, height: 100, borderRadius: 15, justifyContent: 'center', marginBottom: 10 }}>
      <Text style={{ textAlign: 'center', color: 'black', fontSize: 25, fontWeight: 'bold' }}>
          {text}
        </Text>
    </View>
  )
}

const TextInputCustom = ({placeholder, color, typeKeyboard}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={typeKeyboard}
      style={{ width: 250, height: 50, borderColor: color, borderWidth: 3, borderRadius: 15, marginBottom: 10, paddingLeft: 10 }}
    />
  )
}
const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <TextInputCustom placeholder='Enter your name' color='red' />
        <TextInputCustom placeholder='Enter your age' color='blue' typeKeyboard='numeric' />
      </View>
      
    </View>
  )
}


export default App
