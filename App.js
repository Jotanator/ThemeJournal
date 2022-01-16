import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText} adjustsFontSizeToFit={true}>
        YEAR OF...</Text>
      <Text style={styles.themeText} adjustsFontSizeToFit={true}>
        Self-care!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  themeText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  }
});
