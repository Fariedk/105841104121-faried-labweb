import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function visualTP() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'  }}>
      <Image
        style={{width: 378, height: 618, resizeMode: 'cover', marginBottom: 30}}
        source={require('./assets/p1.jpg')}
      />
      
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          style={{width: 35, height: 35, resizeMode: 'contain', marginRight: 25}} 
          source={require('./assets/flashlight.png')}/>
        <Image 
          style={{borderRadius: 30, backgroundColor: '#DB3022',width: 45, height: 45, resizeMode: 'contain'}} 
          source={require('./assets/capture1.png')}/>
        <Image 
          style={{width: 35, height: 35, resizeMode: 'contain', marginLeft: 25}} 
          source={require('./assets/switch.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  
});