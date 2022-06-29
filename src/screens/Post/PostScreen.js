import {View, Text, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import PostDetail from './PostDetail';


export default function PostScreen({navigation}) {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetchPostList();
  }, []);

  const fetchPostList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setpost(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <View>
      <FlatList
        data={post}
        renderItem={({item}) => {
          return (
            <Button
              title={item.id + ', ' + item.title }
              onPress={() => navigation.navigate('PostDetail', {id: item.id})}
            />
          );
        }}
      />
    </View>
  );
}
