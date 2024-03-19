  import React, { useState } from 'react';
  import { View, StyleSheet,Text } from 'react-native';
  import Header from '../Header';
  import Body from '../Body';
  import Footer from '../Footer';

  const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];
  export type UserType = {
      name: string;
      avatar: string;
    };  

  export default function Main() {
    const [user, setUser] = useState<UserType>({
      name: "Chưa có tên",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2848px-User-avatar.svg.png",
    });
    const [lastTimeUpdate, setLastTimeUpdate] = useState("Bạn chưa cập nhật thông tin");
    const [footerColor, setFooterColor] = useState(colors[0]);

    const handleUpdateInfor = (newUser: UserType) => {
      setUser(newUser);
      const currentdate = new Date();
      const datetime =
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear() +
        '/' +
        currentdate.getHours() +
        '/' +
        currentdate.getMinutes() +
        '/' +
        currentdate.getSeconds();
      setLastTimeUpdate(datetime);
    };

    const handleRandomColor = () => {
      const numberRan = Math.floor(Math.random() * colors.length);
      setFooterColor(colors[numberRan]);
    };

    return (
      <View style={styles.container}>
        <Header user={user} />
        <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor} />
        <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between', // Chia không gian dọc đều nhau
    },
  });
