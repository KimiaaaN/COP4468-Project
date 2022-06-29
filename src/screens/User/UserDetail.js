import {View, Text, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function UserDetail({route}) {
  const userId = route.params.id;
  const [user, setUser] = useState({});

 

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    // style>{{flex:1}}
    
    <View>
      <Text style={{fontSize:30}}>{userId}</Text>
      <Text style={{fontSize:30}}>{user.username}</Text>
      <Text style={{fontSize: 30}}>{user.phone}</Text>
      <Text style={{fontSize: 30}}>{user.email}</Text>
      <Text style={{fontSize: 30}}>{user.website}</Text>
    </View>
  );
}

