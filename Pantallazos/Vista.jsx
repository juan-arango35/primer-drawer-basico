import * as React from 'react';
import { View, Text } from 'react-native';


function Vista() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', alignItems: 'center'}} >Estamos en el componente vista</Text>
    </View>
  );
}
export default Vista; 