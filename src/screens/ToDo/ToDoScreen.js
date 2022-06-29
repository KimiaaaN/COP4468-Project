import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';


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

  // return (
  //   <View>
  //     <FlatList
  //       data={ToDo}
  //       renderItem={({item}) => {
  //         return (
  //           <Button>
  //             title={'item.title'}
  //           </Button>
            
  //         );
  //       }}
  //     />
  //   </View>
  // );
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
            <View
              style={{
                borderWidth: 1,
                borderColor: "#000",
                padding: 10,
                marginBottom: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{fontSize:30}}>{item.title}</Text>
              {/* <Text style={{fontSize:30}}>{item.email}</Text>  */}
              {/* <Text >{item.body}</Text> */}
            </View>
          )}

       />
      
 
  

  );
}
