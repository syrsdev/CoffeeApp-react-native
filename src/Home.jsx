import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Button from './components/Button';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#D1E1E0', flex: 1}}>
      <Image
        source={require('./assets/coffee.png')}
        style={{
          zIndex: 0,
          height: 400,
          width: '100%',
          objectFit: 'contain',
          marginTop: 50,
        }}
      />

      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 26,
            zIndex: 1,
            color: '#023E4A',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '40%',
          }}>
          Sweet & Naise Coffee
        </Text>
        <Text
          style={{
            fontSize: 14,
            zIndex: 1,
            color: '#687A79',
            fontWeight: '500',
            textAlign: 'center',
            width: '50%',
            marginTop: 10,
          }}>
          Naise Coffee can change The atmosphere in the morning
        </Text>
        <TouchableOpacity
          style={{marginTop: 28, width: '80%'}}
          onPress={() => navigation.navigate('Detail')}>
          <Button title="ORDER NOW" color={'#023E4A'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
