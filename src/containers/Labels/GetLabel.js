import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";

var { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataManage: [],
    };
  }

  componentDidMount() {
    fetch("http://test.takedoodles.com/contact-app/apis/Api/get_label")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        var labelData = responseJson.data.relation.split(/[ ,]+/);
        this.setState({ dataManage: labelData });
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    var dataManage = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.state.dataManage}</Text>

        {this.state.dataManage.map((item, key) => (
          <TouchableOpacity key={key}>
            <Text> Name = {item} </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 30,
  },
  text: {
    flex: 1,
    fontSize: 40,
    textAlign: "center",
  },
  separator: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
});















{/* <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}

            <TouchableOpacity
              style={styles.manageView}
              onPress={this.manageLabelnavigate}
            >
              <Text style={styles.manageText}>Manage</Text>
            </TouchableOpacity>
            
            <NormalText>{this.state.dataManage[0]}</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>{this.state.dataManage[1]}</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>{this.state.dataManage[2]}</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>{this.state.dataManage[3]}</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>{this.state.dataManage[4]}</NormalText>
          </View>
          <View style={styles.tripleView}>
            {this.props.theme.mode === "light" ? (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.black} />
            ) : (
              <Icon name={"arrows-alt-v"} size={15} color={COLORS.white} />
            )}
            <View style={styles.manageView}>
              <Text style={styles.manageText}>Manage</Text>
            </View>
            <NormalText>{this.state.dataManage[5]}</NormalText>
          </View> */}