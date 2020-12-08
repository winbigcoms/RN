import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const TodoInputs = ({addGoalHandler,visible,cancel})=>{
  const [initTodo,setInit]=useState("");
  const goalHandler = text=>{
    setInit(todo=>text);
  };

  const addGoal = ()=>{
    addGoalHandler(initTodo);
    setInit(state=>"");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="할일 써봐" 
          style={styles.input} 
          onChangeText={goalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="cancle" 
              onPress={cancel}
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="ADD" 
              onPress={addGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
  },
  input:{ 
    width:"80%",
    padding:10,
    borderColor:'black',
    borderWidth:1,
    marginBottom:10
  },
  buttonContainer:{
    width:"60%",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  button:{
    width:"40%"
  }
})
export default TodoInputs;