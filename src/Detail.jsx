import React, {useState, useEffect} from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ButtonSize from './components/ButtonSize';

const Detail = () => {
  const [size, setSize] = useState('S');
  const [productCount, setProductCount] = useState(0);
  const [already, setAlready] = useState(0);

  useEffect(() => {
    if (already == 1) {
      setProductCount(productCount + 1);
      setAlready(already + 1);
    }
  }, [already]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#D1E1E0',
        paddingHorizontal: 30,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('./assets/machiato.png')}
          style={{
            marginTop: 84,
            width: size == 'S' ? 170 : size == 'M' ? 180 : 200,
            objectFit: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 26,
          zIndex: 1,
          color: '#023E4A',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Caramel Macchiato
      </Text>

      <Text
        style={{
          fontSize: 14,
          zIndex: 1,
          color: '#687A79',
          fontWeight: '500',
          textAlign: 'center',
          width: '90%',
          marginTop: 10,
        }}>
        We cannot guarantee that any unpackaged products served in our stores
        are allergen-free
      </Text>

      <Text
        style={{
          marginTop: 30,
          marginBottom: 6,
          textAlign: 'left',
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
        }}>
        SIZE
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <ButtonSize
          title={'S'}
          onPress={() => setSize('S')}
          active={size === 'S'}
        />
        <ButtonSize
          title={'M'}
          onPress={() => setSize('M')}
          active={size === 'M'}
        />
        <ButtonSize
          title={'L'}
          onPress={() => setSize('L')}
          active={size === 'L'}
        />
      </View>

      <Text
        style={{
          marginTop: 30,
          marginBottom: 6,
          textAlign: 'left',
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
        }}>
        COMBO
      </Text>

      <View
        style={{
          width: '100%',
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 8,
          alignItemsContent: 'center',
          padding: 26,
        }}>
        <Image source={require('./assets/croissant.png')} style={{width: 48}} />
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          CROISSANT
        </Text>

        <TouchableOpacity onPress={() => setProductCount(productCount + 1)}>
          <Image
            source={require('./assets/Button.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 30,
          alignItemsContent: 'center',
          marginTop: 50,
        }}>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 55,
              height: 55,
              justifyContent: 'center',
              borderRadius: 6,
              borderColor: '#023E4A',
              borderWidth: 2,
              alignItems: 'center',
            }}>
            <Image source={require('./assets/bag.png')} />
          </View>

          {productCount > 0 && (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                zIndex: 5,
                position: 'absolute',
                borderWidth: 2,
                borderColor: '#023E4A',
                backgroundColor: '#D1E1E0',
                top: -15,
                right: -15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>
                {productCount}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          onPress={() => setAlready(already + 1)}
          style={{width: '75%'}}>
          <View
            style={{
              backgroundColor: '#023E4A',
              height: 55,
              justifyContent: 'center',
              borderRadius: 6,
              borderColor: '#023E4A',
              borderWidth: 2,
            }}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {already > 1 ? 'ALREADY ADDED' : 'ADD TO BAG | $5.99'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;
