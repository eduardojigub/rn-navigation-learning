import { View, Text } from 'react-native';
import React from 'react';

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: Antônio Augusto</Text>
        <Text>Telefone: (92) 3238-3839</Text>
        <Text
          onPress={() =>
            navigation.navigate('Information', {
              nome: 'Antônio Augusto',
              telefone: '(92) 3238-3839',
              endereco: 'Rua das Neves, numero 10',
              profissao: 'Programador',
              email: 'guto@dev.com',
            })
          }
        >
          Information...
        </Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text>Nome: Roberta Morato</Text>
        <Text>Telefone: (92) 8802-0002</Text>
        <Text onPress={() => navigation.navigate('Information')}>
          Information...
        </Text>
      </View>
    </View>
  );
}
