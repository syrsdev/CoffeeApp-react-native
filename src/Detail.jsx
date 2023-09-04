import React from 'react';
import {Image, Text, View} from 'react-native';

const Detail = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#D1E1E0',
        alignItems: 'center',
      }}>
      <Image
        source={require('./assets/machiato.png')}
        style={{marginTop: 84}}
      />
    </View>
  );
};

export default Detail;
