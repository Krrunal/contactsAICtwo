import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window");
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color="white" />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    zIndex:99,
    backgroundColor:"rgba(0,0,0,0.8)",
    left:0,
    top:0,
  }
};

export { Spinner };
