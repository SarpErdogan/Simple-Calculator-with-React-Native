import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
const App = () => {
  const [text, setText] = useState("")
  return (
    <View style = {styles.main}>
      <Islemler text={text} setText={setText}/>
      <Clear text={text} setText={setText}/>
      <FirstLayer text={text} setText={setText}/>
      <SecondLayer text={text} setText={setText}/>
      <ThirdLayer text={text} setText={setText}/>
      <ForthLayer text={text} setText={setText}/>
    </View>
  );
};
const Clear = (props) => 
{
  return(
  <View style = {styles.clear} >
  <Buton name = "C" text={props.text} setText={props.setText}/>
  </View>
  )
}
const Buton = (props) => 
{
  const butFonk = () => 
    {
    if (props.name === "=") 
      {
      try {
        const result = eval(props.text);
        props.setText(result.toString());
      } catch {
        props.setText("HATA");
      }
    }else if (props.name === "C") 
    {
      props.setText("")
    }else 
    {
      props.setText(props.text + props.name);
    }
  
  };
  return (
    <View style={styles.buttonWrapper}>
      <Button title={props.name} onPress={butFonk} />
    </View>
  );
};

const Islemler = (props) => 
{
  return <TextInput 
          style={styles.input}
          value={props.text}
          />
}

const FirstLayer = (props) => 
{
  return (
  <View style={styles.container}>
    <Buton name = "7" text={props.text} setText={props.setText}/>
    <Buton name = "8" text={props.text} setText={props.setText}/>
    <Buton name = "9" text={props.text} setText={props.setText}/>
    <Buton name = "+" text={props.text} setText={props.setText}/>
  </View>
  );
}

const SecondLayer = (props) => 
{
  return (
  <View style={styles.container}>
    <Buton name = "4" text={props.text} setText={props.setText}/>
    <Buton name = "5" text={props.text} setText={props.setText} />
    <Buton name = "6" text={props.text} setText={props.setText}/>
    <Buton name = "-" text={props.text} setText={props.setText}/>
  </View>
  );
}

const ThirdLayer = (props) => 
{
  return (
  <View style={styles.container}>
    <Buton name = "1" text={props.text} setText={props.setText}/>
    <Buton name = "2" text={props.text} setText={props.setText}/>
    <Buton name = "3" text={props.text} setText={props.setText}/>
    <Buton name = "*" text={props.text} setText={props.setText}/>
  </View>
  );
}

const ForthLayer = (props) => 
{
  return (
  <View style={styles.container}>
    <Buton name = "." text={props.text} setText={props.setText}/>
    <Buton name = "0" text={props.text} setText={props.setText}/>
    <Buton name = "=" text={props.text} setText={props.setText}/>
    <Buton name = "/" text={props.text} setText={props.setText}/>
  </View>
  );
}

export default App;

const styles = StyleSheet.create(
{
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    fontSize: 24,
    marginBottom: 20,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    flex: 1,
    margin: 6,
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
  },
  clear: {
    flex: 1,
    margin: 6,
    height: 70,
    width:"100%",
    borderRadius: 10,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    fontSize: 28,
    marginBottom: 20,
    padding: 10,
    textAlign: 'right',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
});
