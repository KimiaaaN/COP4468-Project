import {View, Text, FlatList,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../../Style/style';


export default function ToDoScreen({navigation}) {
  const [ToDo, setToDo] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.data;
        setToDo(data);
        setToDoState(data);

        } catch(error)  {
          console.log(error)
        }
      })();
    }, []);

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

    
           
              
             
          
          

    
      
 
  

  
