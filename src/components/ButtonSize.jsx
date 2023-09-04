import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ButtonSize = ({title, active, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: active ? '#023E4A' : 'transparent',
          width: 85,
          height: 60,
          justifyContent: 'center',
          borderRadius: 6,
          borderColor: '#023E4A',
          borderWidth: 2,
        }}>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            color: active ? 'white' : '#023E4A',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSize;
