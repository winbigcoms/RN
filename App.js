import React, { useEffect, useRef, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './component/TodoItem'
import TodoInputs from './component/TodoInput'
export default function App() {
  const [todos,setTodos]=useState([]);
  const [isInputVisible,setInputVisible]=useState(false);

  const addGoalHandler = initTodo =>{
    setTodos(todo=>[...todo,{value: initTodo, key: Math.random().toString()}]);
    setInputVisible(state=>!state);
  }

  const deleteItemHandler = id=>{
    setTodos(todos=>todos.filter(todo=>todo.key !== id))
  }

  const inputVisibleHandler = ()=>{
    setInputVisible(state=>!state);
  }
  const cancelAddTodo = ()=>{
    setInputVisible(state=>!state);
  }
  return (
    <View style={styles.screen}>
      <Button title="new Todo" onPress={inputVisibleHandler}/>
      <TodoInputs addGoalHandler={addGoalHandler} visible={isInputVisible} cancel={cancelAddTodo}/>
      <FlatList 
        keyExtractor={(item,idx)=>item.key}
        stlye={styles.inputContainer} 
        data={todos} 
        renderItem={itemData => (
          <TodoItem todo={itemData.item} id={itemData.item.key} deleteItem={deleteItemHandler}/>
        )}>
      </FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    padding:30
  }
})