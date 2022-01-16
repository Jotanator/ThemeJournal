import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeEditable: false, themeText: "Self-Care",
      descEditable: false, descText: "Being able to help others begins with being able to help yourself",
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText} adjustsFontSizeToFit={true}>
          YEAR OF...</Text>

        {this.state.themeEditable ?
          <TextInput
            value={this.state.themeText}
            onChangeText={(value) => this.setState({ themeText: value })}
            autoFocus
            onBlur={() => this.setState({ themeEditable: false })}
          /> :
          <Text style={styles.themeText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ themeEditable: true })}
          >
            {this.state.themeText}
          </Text>
        }

        {this.state.descEditable ?
          <TextInput
            value={this.state.descText}
            onChangeText={(value) => this.setState({ descText: value })}
            autoFocus
            onBlur={() => this.setState({ descEditable: false })}
          /> :
          <Text style={styles.descText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ descEditable: true })}
          >
            {this.state.descText}
          </Text>
        }
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
  },
  baseText: {
    textAlign: "center"
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
