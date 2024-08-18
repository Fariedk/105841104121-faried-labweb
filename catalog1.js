import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
    { id: '1', name: 'Pullover', brand: 'Mango', price: '$51', rating: 3, image: require('./assets/pullOver.png'), isFavorite: false },
    { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: '$34', rating: 0, image: require('./assets/blouse.png'), isFavorite: false },
    { id: '3', name: 'T-shirt', brand: 'LOST Ink', price: '$12', rating: 1, image: require('./assets/tshirt.png'), isFavorite: true },
    { id: '4', name: 'Shirt', brand: 'Topshop', price: '$51', rating: 3, image: require('./assets/shirt.png'), isFavorite: false }
];

const categories = ['T-shirts', 'Crop tops', 'Sleeveless', 'Shirts'];

const catalog1 = ({ navigation }) => {
    const [data, setData] = useState(products);

    const toggleFavorite = (id) => {
        const newData = data.map(item => {
            if (item.id === id) {
                return { ...item, isFavorite: !item.isFavorite };
            }
            return item;
        });
        setData(newData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Women's tops</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.sortFilterContainer}>
                <TouchableOpacity style={styles.sortFilterButton}>
                    <Ionicons name="filter-outline" size={20} color="black" />
                    <Text style={styles.sortFilterText}>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortFilterButton}>
                    <Ionicons name="swap-vertical" size={20} color="black" />
                    <Text style={styles.sortFilterText}>Price: lowest to high</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridButton}>
                    <Ionicons name="grid-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.product}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.brand}>{item.brand}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.rating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
                        </View>
                        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                            <Ionicons 
                                name={item.isFavorite ? "heart" : "heart-outline"} 
                                size={24} 
                                color={item.isFavorite ? "red" : "black"} 
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        marginTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
    },
    categoryContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    categoryButton: {
        backgroundColor: '#000',
        height: 30,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
    },
    sortFilterContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    sortFilterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortFilterText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#000',
    },
    gridButton: {
        padding: 5,
    },
    product: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 15,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    brand: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 14,
        color: '#000',
    },
    rating: {
        fontSize: 12,
        color: '#f5a623',
    }
});

export default catalog1;
