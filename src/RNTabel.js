import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  
  </View>
);

const UpNdown = (direction) => {
  // var rows = item.id,
    parent = rows[index].parentNode;
  if (direction === "up") {
    if (index > 1) {
      parent.insertBefore(rows[index], rows[index - 1]);
      // when the row go up the index will be equal to index - 1
      index--;
    }
  }

  if (direction === "down") {
    if (index < rows.length - 1) {
      parent.insertBefore(rows[index + 1], rows[index]);
      // when the row go down the index will be equal to index + 1
      index++;
    }
  }
};
const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button onclick={UpNdown}>Up</Button>
      <Button>Down</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
