import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text} </Text>
          <MaterialIcons 
           name='remove-circle'
           size={30}
           color="#f54254" 
           onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  listItem: {
      padding: 30,
      backgroundColor: 'black',
      borderBottomWidth: 1,
      borderColor: '#eee'
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:'black',
  },
  listItemText: {
      fontSize: 18,
      color: 'white'
  }
  
})

export default ListItem;