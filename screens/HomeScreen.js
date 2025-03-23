import React, { useState } from "react";
import { View, FlatList, Modal, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import TodoForm from "../components/ToDoForm";
import TodoItem from "../components/ToDoItem";

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  // Add a new todo
  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), text }]);
    setModalVisible(false);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Open modal for editing
  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setModalVisible(true);
  };

  // Update a todo
  const updateTodo = (text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, text } : todo
      )
    );
    setEditingTodo(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Add Todo Button */}
      <Button title="Add Todo" onPress={() => setModalVisible(true)} />

      {/* List of Todos */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item.text}
            onEdit={() => openEditModal(item)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No todos yet!</Text>}
      />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {editingTodo ? "Edit Todo" : "Add Todo"}
          </Text>

          <TodoForm
            onSubmit={editingTodo ? updateTodo : addTodo}
            initialText={editingTodo?.text || ""}
          />

          <Button
            title="Cancel"
            onPress={() => {
              setModalVisible(false);
              setEditingTodo(null);
            }}
            color="#FF6347"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#aaa",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
