import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'
import { Button, Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import CounterButton from '../../components/CounterButton'

const Details = ({ route, navigation }) => {
  const { id, name, img, img2, price, desc, offer } = route.params
  const Itemimages = [
    {
      id: id,
      img: img
    },
    {
      id: id + 1,
      img: img2
    }
  ]
  const [productQuanty, setProductQuanty] = useState(1)

  const renderItemImages = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.productShowCase}
        onPress={() => {
          console.log(item.img)
        }}
      >
        <Image
          source={item.img}
          resizeMode='contain'
          style={styles.productImageView}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        placement='center'
        leftComponent={
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='chevron-back' size={22} color='#333' />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={styles.favIconContainer}
            onPress={() => console.log('like function here')}
          >
            <Ionicons name='heart-outline' size={22} color='#333' />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Itemimages}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => renderItemImages(item, index)}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#f3ede6',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40
        }}
      >
        <View
          style={styles.flexRow}
        >
          <View>
            <Text style={styles.productTitle}>
              {name}
            </Text>
            <View style={styles.flexRow}>
              <Text style={styles.productPriceOffered}>
                {offer}
              </Text>
              <Text style={styles.productPrice}>
                {price}
              </Text>
            </View>
          </View>
          <CounterButton productQuanty={productQuanty} setProductQuanty={setProductQuanty} />
        </View>

        <View style={styles.productDescriptionContainer}>
          <Text style={styles.productDescription}>
            {desc}
          </Text>
          <Button
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
            icon={<Ionicons name='cart' size={18} color='#fff' />}
            title='Add to Cart'
            onPress={() => console.log('Add to cart')}
          />
        </View>
      </View>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#fff'
        translucent
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 90,
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    elevation: 0
  },
  backIconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginRight: 10
  },
  favIconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginRight: 10
  },
  productShowCase: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: '100%',
    paddingVertical: 10

  },
  productImageView: {
    width: '100%',
    height: '100%'
  },
  productTitle: {
    color: '#626262',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10
  },
  flexRow: {
    flexDirection: 'row'
  },
  productPrice: {
    fontSize: 17,
    color: '#7d7d7d',
    marginRight: 7,
    textDecorationLine: 'line-through'
  },
  productPriceOffered: {
    color: '#C36839',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10
  },
  productDescriptionContainer: {
    marginVertical: 20
  },
  productDescription: {
    color: '#626262'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#C36839',
    borderRadius: 15,
    marginTop: 40,
    alignSelf: 'center',
    width: '50%',
    height: 50
  }
})
export default Details
