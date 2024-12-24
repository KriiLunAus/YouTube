import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
const you = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>you</Text>
    </View>
  )
}

export default you


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text:{
    fontSize: 30,
    color: "#fafafa",
    textAlign: 'center'
  }
}
)