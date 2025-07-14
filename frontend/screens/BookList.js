import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://django-backend-n2b5.onrender.com/books/')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Books</Text>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Order', { book: item })}
            style={styles.card}
          >
            <Text style={styles.book}>{item.title} - {item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#f2f2f2', padding: 15, marginBottom: 10, borderRadius: 8 },
  book: { fontSize: 18 },
});
