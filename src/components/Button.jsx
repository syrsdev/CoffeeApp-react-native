import React from 'react';
import {Text, View} from 'react-native';

const Button = ({title, color}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 10,
        margin: 10,
        borderRadius: 30,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          paddingVertical: 10,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Button;
