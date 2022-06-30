import {View, Text, FlatList,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../Style/style';


export default function ToDoScreen({navigation}) {
  const [ToDo, setToDo] = useState([]);

  useEffect(() => {
    fetchToDoList();
  }, []);

  const fetchToDoList = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setToDo(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };
  
  return(

    
    <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 180,
          marginBottom: 100,
        }}
        data={ToDo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}
          >
          
            
            <Text style={styles.baseText}>{item.title}</Text>
            
          </View>
        )}

     />
    



);

    

}

    
           
              
             
          
          

    
      
 
  

  
