import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CounterButton = ({ productQuanty, setProductQuanty }) => {
  return (
    <View style={styles.counterButtonWrapper}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.counterButtonUpIcon}
        onPress={() => { setProductQuanty(productQuanty + 1) }}
      >
        <Ionicons name='add' size={20} color='#fff' />
      </TouchableOpacity>
      <Text style={styles.cartCounterText}>
        {productQuanty}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.counterButtonDownIcon}
        onPress={() => {
          if (productQuanty > 1) { setProductQuanty(productQuanty - 1) }
        }}
      >
        <Ionicons name='remove' size={20} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

export default CounterButton

const styles = StyleSheet.create({
  counterButtonWrapper: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end'
  },
  cartCounterText: {
    fontSize: 14,
    backgroundColor: '#C36839',
    paddingHorizontal: 14,
    color: '#fff'
  },
  counterButtonDownIcon: {
    backgroundColor: '#C36839',
    padding: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  counterButtonUpIcon: {
    backgroundColor: '#C36839',
    padding: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})
