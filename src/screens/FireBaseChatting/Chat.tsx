import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import localAvatar from '../../assets/Images/1.jpg';
import localAvatar2 from '../../assets/Images/5.jpg';

export default function Chat() {
  const route = useRoute();
  const navigation = useNavigation();

  const { recipientId, recipientName, senderId } = route.params;

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    console.log(recipientId);
    const chatDocId = [senderId, recipientId].sort().join('');

    const subscriber = firestore()
      .collection('Chats')
      .doc(chatDocId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const allMessages = querySnapshot.docs.map(doc => {
          const messageData = doc.data();
          return {
            _id: doc.id,
            text: messageData.text || '',
            createdAt: messageData.createdAt?.toDate?.() || new Date(),
            user: {
              _id: messageData.user?._id,
              name: messageData.user?.name,
              avatar: messageData.user?._id === senderId ? localAvatar : localAvatar2, 
            },
          };
        });
        setMessages(allMessages);
      });

    return () => subscriber();
  }, [senderId, recipientId]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: recipientName || 'Chat',
    });
  }, [navigation, recipientName]);

  const onSend = useCallback(
    (messages: IMessage[] = []) => {
      const msg = messages[0];

      const myMsg = {
        ...msg,
        createdAt: firestore.FieldValue.serverTimestamp(),
        sendby: senderId || 'defaultSenderId',
        sendto: recipientId || 'defaultRecipientId',
      };

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          { ...myMsg, createdAt: new Date() },
        ]),
      );

      const chatDocId = [senderId, recipientId].sort().join('');

      firestore()
        .collection('Chats')
        .doc(chatDocId)
        .collection('messages')
        .add(myMsg)
        .then(() => console.log('Message sent successfully'))
        .catch(error => console.error('Error sending message:', error));
    },
    [senderId, recipientId],
  );

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: senderId || 'defaultUserId',
          name: 'KHAN',
          avatar: localAvatar,
        }}
        textInputStyle={styles.textInput}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        placeholder="Type a message..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: '100%',
  },
});
