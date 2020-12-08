import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todos = ({todo, deleteItem, id}) =>{
  return (
    <TouchableOpacity onPress={deleteItem.bind(this,id)}>
      <View stlye={styles.listItem} style={styles.listItem}>
        <Text>{todo.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem:{
    padding: 10,
    marginVertical:10,
    backgroundColor: '#ccc',
    borderColor : "black",
    borderWidth:1
  }
})

export default  Todos