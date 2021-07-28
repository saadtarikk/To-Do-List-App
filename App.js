import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import {v4 as uuid} from 'uuid';

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk' },
    {id: uuid(), text: 'Juice' },
    {id: uuid(), text: 'Bread' },
    {id: uuid(), text: 'Eggs' },
    {id: uuid(), text: 'Crisps' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {

    if(!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else{
      setItems(prevItems => {
        return[{id: uuid.toString(), text: text}, ...prevItems]
      })
    }  
  }

  return (
    <View style={styles.container}> 
      <Header title="Shopping List"></Header>
      <FlatList 
        data={items} 
        renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} />}
      />
      <AddItem addItem={addItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'black',
  paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 30,
  }
});

export default App;
