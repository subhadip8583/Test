import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function OrderScreen({ route }) {
  const { book } = route.params;
  const [name, setName] = useState('');

  const handleOrder = () => {
    axios.post('http://192.168.29.77:8000/order/', {
      book_id: book.id,
      customer_name: name
    })
    .then(res => {
      Alert.alert('Success', res.data.message);
      setName('');
    })
    .catch(err => {
      Alert.alert('Error', 'Failed to place order');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ordering: {book.title}</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Place Order" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 }
});
