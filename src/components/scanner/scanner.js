import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { Camera, Permissions } from "expo";

export default class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };
  // async componentWillReceiveProps(nextProps) {
  //   console.log("here");
  // }
  clicked() {
    console.log("clicked");
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  //
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={styles.camera}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            {/* <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
            </View> */}
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  camera: { flex: 1 }
});

// export default class Scanner extends Component {
//   render() {
//     return (
//       <View>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           permissionDialogTitle={"Permission to use camera"}
//           permissionDialogMessage={
//             "We need your permission to use your camera phone"
//           }
//         />
//       </View>
//     );
//   }
// }
