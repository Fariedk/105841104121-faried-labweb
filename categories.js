import React from 'react';
import { Text,View, Image, TouchableOpacity, ScrollView} from 'react-native';


const categories = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity style={{ paddingRight: 8 }}>
            <Image source={require('./assets/Chevron.png')} style={{ width: 20, height: 20, marginTop: 20, tintColor: '#333333' }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333333', flex: 1, textAlign: 'center', marginTop: 20 }}>
            Categories
          </Text>
          <TouchableOpacity style={{ paddingLeft: 8 }}>
            <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, tintColor: '#333333', marginTop: 20 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          <TouchableOpacity style={{ alignItems: 'center', flex: 1, borderBottomWidth: 2, borderBottomColor: 'red' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'red' }}>Women</Text>
            <View style={{ marginTop: 4, height: 2, backgroundColor: 'red', width: '100%' }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#888888' }}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#888888' }}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity style={{ backgroundColor: '#DB3022', padding: 20, marginHorizontal: 16, marginTop: 16, borderRadius: 8, alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }}>SUMMER SALES</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 8 }}>Up to 50% off</Text>
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <TouchableOpacity style={{ marginBottom: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', padding: 10, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333333', flex: 1 }}>New</Text>
            <Image source={require('./assets/c1.png')} style={{ width: 80, height: 80, borderRadius: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', padding: 10, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333333', flex: 1 }}>Clothes</Text>
            <Image source={require('./assets/c2.png')} style={{ width: 80, height: 80, borderRadius: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', padding: 10, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333333', flex: 1 }}>Shoes</Text>
            <Image source={require('./assets/c3.png')} style={{ width: 80, height: 80, borderRadius: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', padding: 10, borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#333333', flex: 1 }}>Accessories</Text>
            <Image source={require('./assets/c4.png')} style={{ width: 80, height: 80, borderRadius: 8 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default categories;