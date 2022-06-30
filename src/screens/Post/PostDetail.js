import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../Style/style";
import { ScrollView } from "react-native-gesture-handler";

export default function PostDetail({ route }) {
  const postId = route.params.id;
  const [post, setpost] = useState([]);
  const [comment, setcomment] = useState([]);

  useEffect(() => {
    fetchPostList();
    fetchPostComment();
  }, []);

  const fetchPostList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => res.json())
      .then((data) => {
        setpost(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchPostComment = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((res) => res.json())
      .then((data) => {
       
        setcomment(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>

          <Text style={styles.baseText}>PostId: </Text>
          <Text style={styles.innerText}>{postId}</Text>
          <Text style={styles.baseText}>Title :</Text>
          <Text style={styles.innerText}>{post.title}</Text>
          <Text style={styles.baseText}>Body:</Text>
          <Text style={styles.innerText}>{post.body}</Text>
          <Text style={styles.header}>Comments:</Text>
          <FlatList
          
            data={comment}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={styles.container}
              >
                <Text style={styles.baseText}>{item.name}</Text>
                <Text style={styles.baseText}>{item.email}</Text>
                <Text style={styles.baseText}>{item.body}</Text>
              </View>
              
            )}
          />
          </ScrollView>
     
    
  </View>
  );
}


