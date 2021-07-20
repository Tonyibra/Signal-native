import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db, auth } from "../firebase";
const CustumListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) =>
        setChatMessages(snap.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  });
  return (
    <ListItem
      key={id}
      onPress={() => enterChat(id, chatName)}
      key={id}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://image.flaticon.com/icons/png/512/147/147144.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustumListItem;

const styles = StyleSheet.create({});
