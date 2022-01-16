import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeEditable: false, themeText: "dream big",
      pers1Editable: false, pers1Text: "Something I am grateful for in my personal life #1",
      pers2Editable: false, pers2Text: "Something I am grateful for in my personal life #2",
      pers3Editable: false, pers3Text: "Something I am grateful for in my personal life #3",
      prof1Editable: false, prof1Text: "Something I am grateful for in my professional life #1",
      prof2Editable: false, prof2Text: "Something I am grateful for in my professional life #2",
      prof3Editable: false, prof3Text: "Something I am grateful for in my professional life #3",
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.baseText} adjustsFontSizeToFit={true}>
            Give yourself a goal for today: something that you must achieve even if it is the only thing that you achieve today. We recommend filling out this field in the morning.
          </Text>

          <Text style={styles.titleText} adjustsFontSizeToFit={true}>
            Today, I will
          </Text>

          {this.state.themeEditable ?
            <TextInput
              style={styles.themeText}
              value={this.state.themeText}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
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

          <Text style={styles.baseText} adjustsFontSizeToFit={true}>
            Reflect on what you are grateful for. We recommend filling out these fields in the evening.
          </Text>

          <Text style={styles.titleText} adjustsFontSizeToFit={true}>
            I am grateful for
          </Text>

          {this.state.pers1Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.pers1Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ goal1Text: value })}
              autoFocus
              onBlur={() => this.setState({ pers1Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ pers1Editable: true })}
            >
              {this.state.pers1Text}
            </Text>
          }
          {this.state.pers2Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.pers2Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ pers2Text: value })}
              autoFocus
              onBlur={() => this.setState({ pers2Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ pers2Editable: true })}
            >
              {this.state.pers2Text}
            </Text>
          }
          {this.state.pers3Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.pers3Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ pers3Text: value })}
              autoFocus
              onBlur={() => this.setState({ pers3Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ pers3Editable: true })}
            >
              {this.state.pers3Text}
            </Text>
          }

          {this.state.prof1Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.prof1Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ goal1Text: value })}
              autoFocus
              onBlur={() => this.setState({ prof1Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ prof1Editable: true })}
            >
              {this.state.prof1Text}
            </Text>
          }
          {this.state.prof2Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.prof2Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ prof2Text: value })}
              autoFocus
              onBlur={() => this.setState({ prof2Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ prof2Editable: true })}
            >
              {this.state.prof2Text}
            </Text>
          }
          {this.state.prof3Editable ?
            <TextInput
              style={styles.baseText}
              value={this.state.prof3Text}
              multiline={true}
              returnKeyType="done"
              blurOnSubmit={true}
              onChangeText={(value) => this.setState({ prof3Text: value })}
              autoFocus
              onBlur={() => this.setState({ prof3Editable: false })}
            /> :
            <Text style={styles.baseText} adjustsFontSizeToFit={true}
              onPress={() => this.setState({ prof3Editable: true })}
            >
              {this.state.prof3Text}
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
    paddingBottom: 10,
    textAlign: "center"
  },
  titleText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  themeText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
});
