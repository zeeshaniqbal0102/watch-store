import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Catalogue, Details, Cart, Search, Profile } from '../screens'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const setActiveTabIcon = (route, { focused, color, size }) => {
  let iconName
  if (route.name === 'Catalogue') {
    iconName = focused ? 'home' : 'home-outline'
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline'
  } else if (route.name === 'Cart') {
    iconName = focused ? 'cart' : 'cart-outline'
  } else if (route.name === 'Search') {
    iconName = focused ? 'search' : 'search-outline'
  }

  return <Ionicons name={iconName} size={size} color={color} />
}

const setActiveTabLabel = (route, focused) => {
  switch (route.name) {
    case 'Catalogue':
      return focused && <ActiveTabLabel> Shop </ActiveTabLabel>
    case 'Profile':
      return focused && <ActiveTabLabel> Profile </ActiveTabLabel>
    case 'Cart':
      return focused && <ActiveTabLabel> Cart </ActiveTabLabel>
    case 'Search':
      return focused && <ActiveTabLabel> Search </ActiveTabLabel>
    default:
      return null
  }
}

const ActiveTabLabel = (props) => {
  return (
    <Text style={styles.activeTabLabel}>
      {props.children}
    </Text>
  )
}

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return setActiveTabIcon(route, { focused, color, size })
        },
        tabBarLabel: ({ focused }) => {
          return setActiveTabLabel(route, focused)
        },
        ...tabNavigatorConfig

      })}
    >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name='Catalogue'
        component={Catalogue}
      />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Catalogue'
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleStyle: { alignSelf: 'center' }
        }}
      >
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTabLabel: {
    marginLeft: 15,
    color: '#C36839'
  }
})

const tabNavigatorConfig = {
  tabBarActiveBackgroundColor: '#f3ede6',
  tabBarActiveTintColor: '#C36839',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelPosition: 'beside-icon',
  tabBarStyle: {
    borderTopColor: '#fff',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    height: 53
  },
  tabBarItemStyle: {
    borderRadius: 5
  }
}
