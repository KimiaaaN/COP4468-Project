import {View, Text, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import PostDetail from './PostDetail';

export default function PostScreen({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return (
            <Button
              title={item.id + ', ' + item.title + item.body}
              onPress={() => navigation.navigate('PostDetail', {id: item.id})}
            />
          );
        }}
      />
    </View>
  );
}
