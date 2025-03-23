import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Button from "./Button";

const ToDoForm = ({ onSubmit, initialText = "" }) => {
  const [text, setText] = useState(initialText);

  const handlePress = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
