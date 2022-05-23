import {View, Text} from 'react-native';
import React from 'react';

export default function UserDetail({route}) {
  const userId = route.params.id;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  };

  return (
    <View>
      <Text style={{fontSize: 20}}>{userId}</Text>
    </View>
  );
}
