import { Alert, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User() {
  const [userData, setUserData] = useState<any[]>([]);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const initializeData = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        if (storedEmail) {
          const userSnapshot = await firestore()
            .collection('Users')
            .where('Email', '==', storedEmail)
            .get();

          if (!userSnapshot.empty) {
            const userDoc = userSnapshot.docs[0];
            setLoggedInUserId(userDoc.id);
          }
        }

        const snapshot = await firestore().collection('Users').get();
        if (snapshot.empty) {
          Alert.alert('No users found');
          return;
        }
        const users = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            name: doc.data().Name,
            email: doc.data().Email,
          }))
          .filter((user) => user.email !== storedEmail);

        setUserData(users);
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
      }
    };

    initializeData();
    
  }, []);

  const fetchLastMessages = async (users: any[]) => {
    try {
      const usersWithLastMessages = await Promise.all(
        users.map(async (user) => {
          const chatDocId = [loggedInUserId, user.id].sort().join('');
          const lastMessageSnapshot = await firestore()
            .collection('Chats')
            .doc(chatDocId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get();

          const lastMessage =
            !lastMessageSnapshot.empty && lastMessageSnapshot.docs[0].data().text
              ? lastMessageSnapshot.docs[0].data().text
              : 'No messages yet';

          return {
            ...user,
            lastMessage,
          };
        })
      );
      setUserData(usersWithLastMessages);
    } catch (error) {
      console.error('Error fetching last messages:', error);
    }
  };
  const renderUserItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Chat', { recipientId: item.id, recipientName: item.name, senderId: loggedInUserId })}>
      <View style={styles.userBox}>
        <Icon name="user" size={40} color="#0a465d" />
        <View style={{ flex: 1 }}>
          <Text style={styles.userText}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Firebase Chat App</Text>
      </View>

      {userData.length > 0 ? (
        <FlatList
          data={userData}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.userInfo}
        />
      ) : (
        <Text style={styles.loadingText}>Loading user data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a465d',
    textAlign: 'center',
  },
  userInfo: {
    paddingVertical: 20,
  },
  userBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    elevation: 2,
  },
  userText: {
    fontSize: 18,
    color: '#333',
    marginHorizontal: 10,
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
});
