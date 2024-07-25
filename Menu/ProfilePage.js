import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'


const Profile = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingLeft: 20, paddingTop: 50 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Profile</Text>
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/Sabo.jpg')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Super Sabo</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>Sabo11@gmail.com</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, paddingTop: 50, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My orders</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>Already have 12 orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Shipping addresses</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>3 addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Payment methods</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>Visa **34</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Promocodes</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>You have special promocodes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My reviews</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>Reviews for 4 items</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>Notifications, password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;