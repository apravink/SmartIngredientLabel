import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";

export default class Home extends Component {
  onPress() {
    console.log("Pressed");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top_panel} />
        <View style={styles.main_Panel} />
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
  top_panel: { backgroundColor: "#42f4df", width: "100%", flex: 2 },
  main_Panel: { backgroundColor: "#ddd", width: "100%", flex: 8 },
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
