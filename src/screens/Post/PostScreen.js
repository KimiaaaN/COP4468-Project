import {View, Text, FlatList, Button,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import PostDetail from './PostDetail';
import styles from '../../Style/style';



export default function PostScreen({navigation}) {
  const [post, setpost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.data;
        setpost(data);
        setpostState(data);

        } catch(error)  {
          console.log(error)
        }
      })();
    }, []);

  




  return (
    <View>
      <ScrollView>
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
      
      </ScrollView>
    </View>
    
  );

}
