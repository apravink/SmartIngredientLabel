import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";

import Scanner from "../scanner/scanner";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.scanner = React.createRef();
  }

  onPress() {
    this.scanner.current.clicked();
  }

  render() {
    // const { clicked } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top_panel} />
        <View style={styles.main_Panel}>
          <Scanner ref={this.scanner} />
        </View>
        <View style={styles.bottom}>
          <TouchableHighlight
            style={styles.camera_button}
            underlayColor="white"
            onPress={this.onPress}
          >
            <Icon
              name="camera"
              size={65}
              type="material-community"
              color="#FFC43D"
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top_panel: {
    backgroundColor: "#42f4df",
    width: "100%",
    flex: 1.9,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderColor: "white"
  },
  main_Panel: {
    backgroundColor: "#ddd",
    width: "100%",
    flex: 10
  },
  bottom: {
    backgroundColor: "#42f4df",
    width: "100%",
    flex: 2,
    borderStyle: "solid",
    borderTopWidth: 3,
    borderColor: "white",
    alignItems: "center"
  },
  camera_button: {
    backgroundColor: "#464F51",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 50,
    height: 80,
    width: 80,
    top: 3,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible"
  }
});
