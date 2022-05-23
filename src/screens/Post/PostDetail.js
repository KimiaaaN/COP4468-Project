import {View, Text, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function PostDetail({route}) {
  const userId = route.params.id;
  const [user, setUser] = useState({});

  //JSON syntax.
  // {} -> dictionary
  // [] -> array

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + userId)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  };

  return (
    // <View style={styles.container}>
    <View>
      <Text style={{fontSize: 30}}>{userId}</Text>
      <Text style={{fontSize: 30}}>{user.id}</Text>
      <Text style={{fontSize: 30}}>{user.title}</Text>
      <Text style={{fontSize: 30}}>{user.body}</Text>
    </View>
  );
}
