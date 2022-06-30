import {View, Text, FlatList,Image,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../Style/style';


export default function AlbumPhoto({navigation}) {
 
  const [Photo, setPhoto] = useState({});


  useEffect(() => {
    fetchAlbumPhotoList();
  }, []);

  const fetchAlbumPhotoList = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        setPhoto(data);
      })
      .catch((error) => {
        console.log(error)
      });
  };

 
  return (
   
    
    <View>
      <ScrollView>
      <FlatList
      data={Photo}
      renderItem={({item}) => {
      
        return (
          
          <Image
            source={{uri:item.thumbnailUrl }}
            style={styles.img}
            />
          
        );
      }
    }
    />
    </ScrollView>
    </View>
  );
}
