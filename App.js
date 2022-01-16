import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {editable: false, text: "This is the theme"};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Theme</Text>
        {this.state.editable ?
          <TextInput
            value={this.state.text}
            onChangeText={(value) => this.setState({text: value})}
            autoFocus
            onBlur={() => this.setState({editable: false})}
          /> :
          <Text
            onPress={() => this.setState({editable: true})}
          >
            {this.state.text}
          </Text>
        }
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
