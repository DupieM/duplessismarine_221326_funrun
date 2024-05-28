import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import { handleSignOut } from '../services/authService'

function ProfileScreen() {

// Logout
const handleSignout = () => {
  handleSignOut()
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Page</Text>
      <Button
        title="Sign Out"
        color="green"
        onPress={handleSignout} />
    </View>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9E79C"
  },
  title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: "#194D10"
  }
})