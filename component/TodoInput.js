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
        <View stlye={styles.buttonContainer}>
          <View stlye={styles.button}>
            <Button 
              title="cancle" 
              color="red" 
              onPress={cancel}
            />
          </View>
          <View stlye={styles.button}>
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
    flex:1,
    flexDirection:"row",
  },
  button:{
    marginTop:10,
    width:"40%",
  },
})
export default TodoInputs;