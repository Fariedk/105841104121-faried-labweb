import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
    { id: '1', name: 'T-Shirt SPANISH', brand: 'Mango', price: '$9', rating: 3, image: require('./assets/shirt2.png'), discount: null, isFavorite: false },
    { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: '$14', rating: 5, image: require('./assets/shirt3.png'), discount: '20%', isFavorite: true },
    { id: '3', name: 'Shirt', brand: 'Mango', price: '$9', rating: 0, image: require('./assets/shirt2.png'), discount: null, isFavorite: false },
    { id: '4', name: 'Light blouse', brand: 'Dorothy Perkins', price: '$14', rating: 5, image: require('./assets/shirt3.png'), discount: '20%', isFavorite: true }
];

const categories = ['T-shirts', 'Crop tops', 'Blouses', 'Sleeveless'];

const HomeScreen = ({ navigation }) => {
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

    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
                {item.discount && <Text style={styles.discountLabel}>{item.discount}</Text>}
                <Image source={item.image} style={styles.productImage} />
                <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.heartIcon}>
                    <Ionicons 
                        name={item.isFavorite ? "heart" : "heart-outline"} 
                        size={24} 
                        color={item.isFavorite ? "red" : "black"} 
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productBrand}>{item.brand}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productRating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
        </View>
    );

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
                numColumns={2}
                renderItem={renderProduct}
                contentContainerStyle={styles.productsGrid}
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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    categoryContainer: {
        height: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    categoryButton: {
        backgroundColor: '#000',
        borderRadius: 20,
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
    productsGrid: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    productContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').width / 2 - 20,
        resizeMode: 'cover',
    },
    discountLabel: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        fontSize: 12,
        zIndex: 1,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        paddingHorizontal: 10,
    },
    productBrand: {
        fontSize: 12,
        color: '#666',
        paddingHorizontal: 10,
    },
    productPrice: {
        fontSize: 14,
        color: '#000',
        paddingHorizontal: 10,
    },
    productRating: {
        fontSize: 12,
        color: '#f5a623',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});

export default HomeScreen;
