import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  FlatList,
  View,
  StyleSheet
} from 'react-native'

const CategorySlider = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const renderCategories = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.categoryWrapper,
          backgroundColor: selectedCategory === item.id ? '#C36839' : '#f1f1f1'
        }}
        onPress={() => {
          setSelectedCategory(item.id)
          console.log('categorie function here')
        }}
      >
        <Text
          style={{
            ...styles.categoryTitle,
            color: selectedCategory === item.id ? '#fff' : '#1c1c1c'
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.sliderWrapper}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => renderCategories(item, index)}
      />
    </View>
  )
}
export default CategorySlider

const styles = StyleSheet.create({
  sliderWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  categoryWrapper: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 7,
    marginLeft: 5
  },
  categoryTitle: {
    fontSize: 15,
    marginRight: 3
  }
})
