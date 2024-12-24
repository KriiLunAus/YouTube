import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const shorts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>shorts</Text>
    </View>
  )
}

export default shorts

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