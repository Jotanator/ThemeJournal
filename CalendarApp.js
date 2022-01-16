import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';

const [selectedStartDate, setSelectedStartDate] = useState(null);

export default class CalendarApp extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CalendarPicker onDateChange={setSelectedStartDate} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcd9a4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: StatusBar.currentHeight || 0,
  }
});
