import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View>
            <Image style={styles.container} resizeMode='contain' source={require('../assets/PersonalGoalsImg.png')} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container: {
          width: 390,
          height: 600
      }
  });