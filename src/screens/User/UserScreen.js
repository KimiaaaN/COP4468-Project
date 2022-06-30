import {View, Text, FlatList, Button, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import UserDetail from './UserDetail';
import styles from '../../Style/style';



export default function UserScreen({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };






  return (
    <View>
      
      
        <FlatList

          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 180,
            marginBottom: 100}}

          

        data={users}
        renderItem={({item}) => {

          return (
            <Button 
              title={item.name + ', ' + item.username + item.id}
              onPress={() => navigation.navigate('UserDetail', {id: item.id})}
            />
          
          );
        }}
        
        />
      
    </View>


  );

  
}
