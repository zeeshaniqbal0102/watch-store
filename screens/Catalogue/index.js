import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import categoriesList from '../../constants/categories'
import productsList from '../../constants/products'
import FeaturedSlider from './FeaturedSlider'
import CategorySlider from './CategorySlider'
import ProductListView from './ProductListView'

const Catalogue = ({ navigation }) => {
  const [products] = useState(productsList)
  const [categories] = useState(categoriesList)
  const [likes] = useState([
    {
      id: 0
    },
    {
      id: 3
    },
    {
      id: 5
    }
  ])

  return (
    <View style={styles.container}>
      <View
        Style={{
          flex: 1
        }}
      >
        <Header
          containerStyle={styles.headerContainer}
          placement='left'
          leftComponent={
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => console.log('menu function here')}
            >
              <Ionicons name='filter' size={25} color='#333' />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Watches',
            style: styles.appTitle
          }}
          rightComponent={
            <View
              style={styles.headerRightComponent}
            >
              <TouchableOpacity
                style={styles.headerIconWrapper}
                onPress={() => console.log('search function here')}
              >
                <Ionicons name='search-outline' size={22} color='#333' />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerIconWrapper}
                onPress={() => console.log('cart function here')}
              >
                <Ionicons name='cart-outline' size={22} color='#333' />
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      <ScrollView
        style={styles.scroller}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={styles.jumbotron}
        >
          <FeaturedSlider />
          <Text
            style={styles.tagLine}
          >
            Discover our exclusive watches
          </Text>

        </View>

        <CategorySlider categories={categories} />
        <ProductListView
          navigation={navigation}
          products={products}
          likes={likes}
        />
      </ScrollView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#fff'
        translucent
      />
    </View>
  )
}
export default Catalogue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    height: 90,
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    elevation: 0
  },
  headerIconWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginRight: 10
  },
  tagLine: {
    color: '#626262',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },
  appTitle: {
    color: '#626262',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6
  },
  headerRightComponent: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    paddingVertical: 5
  },
  jumbotron: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  scroller: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
