import {View, Text, FlatList,Image} from 'react-native';
import React, {useState, useEffect} from 'react';

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
    // style>{{flex:1}}
    
    <View>
      <FlatList
      data={Photo}
      renderItem={({item}) => {
      
        return (
          
          <Image
            source={{uri:item.thumbnailUrl }}
            style={{
              width: 160,
              height: 160,
             }}
            />
          
        );
      }
    }
    />
    </View>
  );
}
{/* // <Text style={{fontSize:30}}>{albumId}</Text> */}