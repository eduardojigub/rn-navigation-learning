import { View, Text } from 'react-native';
import React from 'react';

export default function Information({ route }) {
  return (
    <View style={{ marginTop: 60 }}>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Telefone: {route.params?.telefone}</Text>
      <Text>Endereço: {route.params?.endereco}</Text>
      <Text>Profissão: {route.params?.profissao}</Text>
      <Text>Email: {route.params?.email}</Text>
    </View>
  );
}
