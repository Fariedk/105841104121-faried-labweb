import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';


class Shop extends Component {
    render() {
        const mainImage = require('./assets/banner.png');
        const newImages = [
            { source: require('./assets/edress.png'), title: 'Evening Dress', subtitle: '12$' },
            { source: require('./assets/sdress.png'), title: 'Sport Dress', subtitle: '39$' },
            { source: require('./assets/blouse.png'), title: 'Sundress', subtitle: '21$' },
            { source: require('./assets/c1.png'), title: 'T-Shirt', subtitle: '19$' },

            
        ];
        const twoimage = [
            { source: require('./assets/shirt.png'), title: 'Shirt', subtitle: '29$' },
            { source: require('./assets/tshirt.png'), title: 'T-Shirt', subtitle: '19$' },
            { source: require('./assets/c4.png'), title: 'Necklace', subtitle: '115$' },
            { source: require('./assets/c2.png'), title: 'Jeans', subtitle: '125$' },
        ];

        return (
            <SafeAreaView style={{
                flex: 1,backgroundColor: '#ffffff',
            }}>
                <ScrollView>
                    <View style={{position: 'relative',}}>
                        <Image source={mainImage} style={{width: '100%',height: 200,resizeMode: 'cover',}} />
                        <View style={{
                            position: 'absolute',
                            buttom: 40,
                            left: 20,
                            right: 20,
                            alignItems: 'flex-start',
                            marginTop: 120,
                    
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 40,
                                fontWeight: 'bold',
                            }}>Street Clothes</Text>
            
                        </View>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>Sale</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {newImages.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>New</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {twoimage.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Shop;