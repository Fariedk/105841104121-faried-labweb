import {Text, View, TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native';

const ButtonCustom=({ text, color}) => {
    return (
        <TouchableOpacity>
            <View style ={{ width: 320, height: 50, backgroundColor: color, borderRadius: 50, marginBottom:40, justifyContent: 'center', alignItems:'center' }}>
                <Text style ={{ textAlign:'center', color: 'white', fontSize: 18, fontWeight:'bold' }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const TextInputCustom = ({ placeholder, color, typeKeyboard })=> {
    return(
        <TextInput
            keyboardType={typeKeyboard}
            placeholder={placeholder}
            style={{ width: 250, height: 40, borderColor: color, borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingLeft: 10, fontFamily: 'MetroMedium' }}
        />
    );
}

const SignUp = () => {
    const [dapatFont]=useFonts({
        'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
        'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
      });
      if (!dapatFont){
        return <Text>Font tidak di temukan...</Text>
      }
      const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center', backgroundColor: '#fff', padding: 16 }}>
        <TouchableOpacity>
            <Image source={require('./assets/Chevron.png')} style={{ width: 20, height: 20, marginBottom: 20, marginLeft: -300 }}/>
        </TouchableOpacity>
        <View style={{ width: '100%', alignItems: 'flex-start', marginBottom: -10}}>
            <Text style={{ fontSize: 50, fontFamily: 'MetroBold', marginBottom: 16, marginTop: 50 }}>
              Sign Up</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInputCustom placeholder="Name" color="black" typeKeyboard="default"/>
            <TextInputCustom placeholder="Email" color="black" typeKeyboard="email-address"/>
            <TextInputCustom placeholder="Password" color="black" typeKeyboard="default" />
            <ButtonCustom text="SIGN UP" color="red" />

            <TouchableOpacity
            onPress={() => navigation.navigate('LoginPage')}
            >
                <Text style={{fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'center', width: '100%' }}>
                Already have an account?</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '50%' }}>
                <TouchableOpacity style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8 }}>
                    <Image source={require('./assets/google.png')} 
                    style={{ width: 40, height: 40 }}/>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8 }}>
                    <Image source={require('./assets/facebook.png')} 
                    style={{ width: 40, height: 40 }}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default SignUp