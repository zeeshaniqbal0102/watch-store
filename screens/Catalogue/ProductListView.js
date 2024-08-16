import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ProductListView = ({ products, navigation, likes }) => {
  const renderProducts = () => {
    return products.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate('Details', {
              id: item.id,
              img: item.img,
              img2: item.secondimg,
              name: item.name,
              price: item.price,
              offer: item.offer,
              desc: item.description
            })
          }}
        >
          <View
            style={styles.productWrapper}
          >
            <TouchableOpacity
              style={styles.favIconWrapper}
              onPress={() => {}}
            >
              <Ionicons
                name='heart'
                size={20}
                color={likes.some(e => e.id === item.id) ? '#FF2442' : '#ddd'}
              />
            </TouchableOpacity>
            <Image
              source={item.img}
              resizeMode='contain'
              style={styles.productImage}
            />
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              style={styles.productTitle}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={styles.priceBar}
          >
            <View
              style={styles.priceContainer}
            >
              <Text
                style={styles.offeredPrice}
              >
                {item.offer}
              </Text>
              <Text
                style={styles.price}
              >
                {item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View
      style={styles.productsList}
    >
      {renderProducts()}
    </View>
  )
}

export default ProductListView

const styles = StyleSheet.create({
  productsList: {
    paddingLeft: 8,
    paddingRight: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  productContainer: {
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    height: 200,
    width: '48.5%',
    marginBottom: 5
  },
  productWrapper: {
    flex: 1,
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  favIconWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 3,
    position: 'absolute',
    zIndex: 99,
    top: 0,
    right: 5
  },
  productImage: {
    width: '100%',
    height: '100%'
  },
  productTitle: {
    fontSize: 15,
    color: '#626262',
    fontWeight: 'bold'
  },
  priceBar: {
    flexDirection: 'row',
    marginTop: 5
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  offeredPrice: {
    fontSize: 14,
    color: '#C36839',
    marginRight: 7,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 14,
    color: '#333',
    textDecorationLine: 'line-through'
  }
})
