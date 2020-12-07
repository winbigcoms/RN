import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [viewText,setText] = useState("");
  let i=0;
  const text = "안녕하세요 프론트 엔드 개발자 입니다.";
  const gogo = ()=>{
    if(i===text.length){
      clearInterval(gogo)
    }else{
      setText(vT=>vT+text[i]);
      i++
    }
  }
  useEffect(() => {
    setInterval(gogo,500);    
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <Button title="gogo" onPress={()=>{
          setText(text=>text+"하")
        }}/>
        <Text style={textStyle.text}>
          {viewText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer:{
    flex:1,
    backgroundColor:"pink",
  }
});

const textStyle = StyleSheet.create({
  text:{
    color:"red",
    fontSize:15
  }
})