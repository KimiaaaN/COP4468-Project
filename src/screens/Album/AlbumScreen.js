import {View, Text, FlatList, Button,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import AlbumPhoto from './AlbumPhoto';


export default function AlbumScreen({navigation}) {
  const [Albums, setAlbums] = useState([]);


  useEffect(() => {
    fetchAlbumList();
  }, []);

  const fetchAlbumList = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };
  

  return (
    <View>
      <ScrollView>
      <FlatList
        data={Albums}
        renderItem={({item}) => {
          return (
            <Button
              title={item.title}
              onPress={() => navigation.navigate('AlbumPhoto', {id: item.id})}
            />
          );
        }}
      />
      </ScrollView>
    </View>
  );
}
