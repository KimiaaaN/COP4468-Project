import {View, Text, FlatList, Button,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../../Style/style';



export default function UserDetail({route}) {
  const userId = route.params.id;
  const [user, setUser] = useState([]);

 
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/users/' + userId
        );
        const data = await response.data;
        setUser(data);
        setUserState(data);

        } catch(error)  {
          console.log(error)
        }
      })();
    }, []);



  return (

    
    
    <View style={styles.container}>

    
      
      
    <Text style={styles.baseText}>UserId: </Text>
    <Text style={styles.innerText}>{userId}</Text>

    <Text style={styles.baseText}>@Username :</Text>
    <Text style={styles.innerText}>{user.username}</Text>

    <Text style={styles.baseText}>Phone:</Text>
    <Text style={styles.innerText}>{user.phone}</Text>

    <Text style={styles.baseText}>Email:</Text>
    <Text style={styles.innerText}>{user.email}</Text>

    <Text style={styles.baseText}>Website:</Text>
    <Text style={styles.innerText}>{user.website}</Text>


    
    


    </View>
  );

  



}

