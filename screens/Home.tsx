import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import DashboardTable from "../components/DashboardTable";
import AddDetail from "../components/AddDetail";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <DashboardTable navigation={navigation} />
      <AddDetail />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
