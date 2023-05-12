import * as React from 'react';
import { View, Text } from 'react-native';


function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'yellow'}}>
      <Text style={{color: 'red', fontSize: 35, fontWeight: 'bold', alignItems: 'center'}} 
      >Article Screen</Text>
    </View>
  );
}

export default Article