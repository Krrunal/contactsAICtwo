import { ActionSheet, Root } from "native-base";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import ImagePicker from "react-native-image-crop-picker";
import React from "react";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Take Photo", "Choose Photo From Gallery", "Cancel"];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: null,
    };
  }

  takePhtotFroCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      this.setState({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        },
        images: null,
      });
    });
  };

  fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };
  renderImage = (image) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        source={image}
      />
    );
  };
  render() {
    return (
      <Root>
        <View style={styles.container}>
          {this.renderImage(this.state.image)}
          <Button
            title="Choose File"
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select Photo",
                },
                (buttonIndex) => {
                  switch (buttonIndex) {
                    case 0:
                      this.takePhtotFroCamera();
                      break;

                    case 1:
                      this.fromGallery();
                      break;
                    default:
                      break;
                  }
                }
              )
            }
          />
        </View>
      </Root>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
