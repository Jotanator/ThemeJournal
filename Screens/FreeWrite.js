import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textEditable: false, text: "Free write!",
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.state.textEditable ?
            <TextInput
              style={styles.baseText}
              value={this.state.text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ text: value })}
              autoFocus
              onBlur={() => this.setState({ textEditable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ textEditable: true })}
            >
              {this.state.text}
            </Text>
          }

          <StatusBar style="auto" />
        </ScrollView>
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
    paddingTop: 22,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  baseText: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "left"
  },
  titleText: {
    paddingTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  themeText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: "center"
  },
});
