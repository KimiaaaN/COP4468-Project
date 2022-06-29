import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';


export default function PostDetail({ route}) {
  const postId = route.params.id;
  const [post, setpost] = useState({});
  

 

  useEffect(() => {
    fetchPostList();
   
  }, []);

  const fetchPostList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
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
      <Text style={{fontSize: 30}}>{postId}</Text>
      <Text style={{fontSize: 30}}>{post.title}</Text>
      <Text style={{fontSize: 30}}>{post.body}</Text>
    </View>
  );
  
  // return (

  //   <View>
  //     <FlatList>

  //       showsVerticalScrollIndicator={false}
  //           contentContainerStyle={{
  //             paddingBottom: 180,
  //             marginBottom: 100,
  //           }}
  //           {/* data={post}
  //           keyExtractor={(item) => item.id.toString()}
  //           renderItem={({ item }) => ( */}
  //             <View
  //               style={{
  //                 borderWidth: 1,
  //                 borderColor: "#000",
  //                 padding: 10,
  //                 marginBottom: 10,
  //                 borderRadius: 10,
  //               }}
  //             >
  //               <Text style={{fontSize:30}}>{post.Id}</Text>
  //               <Text style={{fontSize:30}}>{post.title}</Text> 
  //               {/* <Text >{Comment.body}</Text> */}
  //             </View>
            
  
  //     </FlatList>
        
    
       
  //   </View>
  // );
}
