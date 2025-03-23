import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

const todoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo}</Text>
      <View style={styles.actions}>
        <Button title="Edit" color="#FFD700" onPress={onEdit} />
        <Button title="Delete" color="#FF6347" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});

export default todoItem;
