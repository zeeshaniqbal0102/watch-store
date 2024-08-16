import React, { useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import productsList from '../../constants/products'
import images from '../../constants/images'

const renderslideshow = (item, index) => {
  return (
    <TouchableOpacity
      style={styles.slideWrapper}
      onPress={() => {}}
    >
      <View style={styles.slide}>
        <View style={styles.detailsContainer}>
          <Text style={styles.offer}>
            40% OFF
          </Text>
          <Text style={styles.poductTitle}>
            {item.name}
          </Text>

          <Button
            titleStyle={styles.buyButtonTitle}
            buttonStyle={styles.buyButton}
            title='Get Now'
            onPress={() => {}}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={images.offer}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const FeaturedSlider = () => {
  const [slideDetails] = useState(productsList.filter(product => product.isFeatured))

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slideDetails}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => renderslideshow(item, index)}
    />
  )
}

export default FeaturedSlider

const styles = StyleSheet.create({
  slideWrapper: {
    justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
    marginRight: 5,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#f3ede6',
    backgroundColor: '#f3ede6',
    borderRadius: 10,
    height: 150,
    padding: 10
  },
  slide: {
    flex: 1,
    flexDirection: 'row'
  },
  detailsContainer: {
    flex: 2
  },
  offer: {
    color: '#C36839',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8
  },
  poductTitle: {
    color: '#626262',
    fontSize: 17,
    marginVertical: 10
  },
  image: {
    borderRadius: 10,
    width: '99%',
    height: '100%'
  },
  buyButtonTitle: {
    color: 'white',
    fontSize: 12
  },
  buyButton: {
    backgroundColor: '#C36839',
    borderRadius: 30,
    width: 100
  }
})
