import { View, Text } from 'react-native';
import React from 'react';

export default function Contacts({ navigation }) {
  return (
    <View>
      <Text>Guto</Text>
      <Text onPress={() => navigation.navigate('Information')}>
        Information...
      </Text>
    </View>
  );
}
