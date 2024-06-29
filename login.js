import { Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const ButtonCustom = ({ text, color }) => {
    return (
        <TouchableOpacity>
            <View style={{ width: 320, height: 50, backgroundColor: color, borderRadius: 50, marginBottom: 40, justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const TextInputCustom = ({ placeholder, color, typeKeyboard, secureTextEntry = false }) => {
    return (
        <TextInput
            keyboardType={typeKeyboard}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={{ width: 250, height: 40, borderColor: color, borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingLeft: 10, fontFamily: 'MetroMedium' }}
        />
    );
}

const login = () => {
    const [dapatFont]=useFonts({
        'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
        'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
      });
      if (!dapatFont){
        return <Text>Font tidak di temukan...</Text>
      }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 16 }}>

        <View style ={{ width: '100%', alignItems: 'flex-start', marginBottom: -10 }}>
            <Text style={{ fontSize: 50, fontFamily: 'MetroBold', marginBottom: 16, marginTop: 50 }}>
                Login</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
            <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />

            <TouchableOpacity>
                <Text style={{ color: 'red', marginBottom: 20,}}>
                    Forgot Password?</Text>
            </TouchableOpacity>
            <ButtonCustom text="LOGIN" color="red" />

            <Text style={{ fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'center', width: '100%',}}> 
                Or login with social account</Text>

            <View style ={{ flexDirection: 'row', justifyContent: 'space-around', width: '50%',}}>

                <TouchableOpacity 
                style={{
                    width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8,}}>
                    <Image source={require('./assets/google.png')} 
                    style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8,}}>
                    <Image source={require('./assets/facebook.png')} 
                    style={{ width: 40, height: 40 }} />
                </TouchableOpacity> 
            </View>
        </View>
    </View>
  )
}

export default login