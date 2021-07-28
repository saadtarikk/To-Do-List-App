import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const AddItem = ({title, addItem}) => {

    const [text, setText] = useState('');

    const onChange = (textValue) => {
        setText(textValue)
    }
  return (
      <View>
          <TextInput placeholder="Add Item" placeholderTextColor='grey' 
                style={styles.input}
                onChangeText={onChange}
            
          />
          <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
              <Text style={styles.btnText}>
                  <MaterialIcons name='add-task' size={40}/>
              </Text>
          </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        backgroundColor: '#242222',
        color: 'white',
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#35BA7E',
        // padding: 3,
        margin: 20,
        borderRadius: 100,
        alignContent: 'center'
    },
    btnText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 5
    },
});

export default AddItem;