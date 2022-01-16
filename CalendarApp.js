import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : '';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalendarPicker onDateChange={setSelectedStartDate}
        todayBackgroundColor="#a1e872" selectedBackgroundColor="#c25e06" />
      {/* <Text style={styles.dateText}>Birthday: {startDate}</Text> */}

      <View style={{ flex: 0.15 }} />
      <View style={styles.innerContainer}>
        <TouchableOpacity
          //onPress={() => Alert.alert('Button pressed')}
          style={styles.button}
        >
          <Text>Daily Activities</Text>
        </TouchableOpacity>
        <View style={{ flex: 0.15 }} />
        <TouchableOpacity
          onPress={() => Alert.alert('Button pressed')}
          style={styles.button}
        >
          <Text>Journal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  },
  container: {
    flex: 1,
    backgroundColor: '#fcd9a4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: "center",
    backgroundColor: "#c25e06"
  }
})