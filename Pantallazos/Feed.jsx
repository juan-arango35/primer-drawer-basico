import * as React from 'react';
import { View, Text } from 'react-native';


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'green'}}>
      <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold', alignItems: 'center'}} 
      >Feed Screen</Text>
    </View>
  );
}
export default Feed; 