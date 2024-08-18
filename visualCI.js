import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function VisualCI() {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Image
                    style={{width: '100%', height: '75%', resizeMode: 'cover'}}
                    source={require('./assets/p1.jpg')}
                />

                
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}} />

                    <View style={{
                        position: 'absolute',
                        width: 300, 
                        height: 150, 
                        top: '21%', 
                        left: '50%',
                        transform: [{ translateX: -150 }, { translateY: -75 }],
                        borderColor: '#ffffff',
                        borderWidth: 2,
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}>
                        
                        <Image
                            style={{ width: '100%', height: '450%', resizeMode: 'cover'}}
                            source={require('./assets/p1.jpg')}
                        />
                    </View>
                </View>
            </View>

            
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 30,
                left: '50%',
                transform: [{ translateX: -30 }],
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#ff3b30',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
            }}>
                <Image
                    style={{ width: 25, height: 25, tintColor: '#ffffff'}}
                    source={require('./assets/search.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
