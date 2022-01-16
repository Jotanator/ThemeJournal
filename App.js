import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeEditable: false, themeText: "Self-Care",
      descEditable: false, descText: "Being able to help others begins with being able to help yourself",
      goal1Editable: false, goal1Text: "Long term goal for this year #1",
      goal2Editable: false, goal2Text: "Long term goal for this year #2",
      goal3Editable: false, goal3Text: "Long term goal for this year #3",
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText} adjustsFontSizeToFit={true}>
          YEAR OF...</Text>

        {this.state.themeEditable ?
          <TextInput
            style={styles.themeText}
            value={this.state.themeText}
            multiline={true}
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
            style={styles.baseText}
            value={this.state.descText}
            multiline={true}
            onChangeText={(value) => this.setState({ descText: value })}
            autoFocus
            onBlur={() => this.setState({ descEditable: false })}
          /> :
          <Text style={styles.baseText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ descEditable: true })}
          >
            {this.state.descText}
          </Text>
        }

        {this.state.goal1Editable ?
          <TextInput
            style={styles.idealListText}
            value={this.state.goal1Text}
            multiline={true}
            onChangeText={(value) => this.setState({ goal1Text: value })}
            autoFocus
            onBlur={() => this.setState({ goal1Editable: false })}
          /> :
          <Text style={styles.idealListText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ goal1Editable: true })}
          >
            {this.state.goal1Text}
          </Text>
        }
        {this.state.goal2Editable ?
          <TextInput
            style={styles.idealListText}
            value={this.state.goal2Text}
            multiline={true}
            onChangeText={(value) => this.setState({ goal2Text: value })}
            autoFocus
            onBlur={() => this.setState({ goal2Editable: false })}
          /> :
          <Text style={styles.idealListText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ goal2Editable: true })}
          >
            {this.state.goal2Text}
          </Text>
        }
        {this.state.goal3Editable ?
          <TextInput
            style={styles.idealListText}
            value={this.state.goal3Text}
            multiline={true}
            onChangeText={(value) => this.setState({ goal3Text: value })}
            autoFocus
            onBlur={() => this.setState({ goal3Editable: false })}
          /> :
          <Text style={styles.idealListText} adjustsFontSizeToFit={true}
            onPress={() => this.setState({ goal3Editable: true })}
          >
            {this.state.goal3Text}
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
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: StatusBar.currentHeight || 0,
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
  },
  idealListText: {
    paddingTop: 40,
    fontWeight: "bold",
    textAlign: "center"
  }
});
