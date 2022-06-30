import {View, Text, FlatList, Button,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import AlbumPhoto from './AlbumPhoto';


export default function AlbumScreen({navigation}) {
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/albums'
        );
        const data = await response.data;
        setAlbums(data);
        setAlbumsState(data);

        } catch(error)  {
          console.log(error)
        }
      })();
    }, []);


  
  

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
