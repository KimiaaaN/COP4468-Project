import {View, Text, FlatList,Image,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from '../../Style/style';


export default function AlbumPhoto({navigation}) {
 
  const [Photo, setPhoto] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.data;
        setPhoto(data);
        setPhotoState(data);

        } catch(error)  {
          console.log(error)
        }
      })();
    }, []);



  

 
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
