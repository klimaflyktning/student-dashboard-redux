import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import DashboardTable from '../components/DashboardTable'
import AddDetail from '../components/AddDetail'
import React from 'react'

// npm run lint to check for errors

const Home: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <DashboardTable navigation={navigation} />
      <AddDetail />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
