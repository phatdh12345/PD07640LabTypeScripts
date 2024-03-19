import React, { FC, memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UserType } from './Main/Main';

type HeaderProps = {
  user: UserType;
};

const Header: FC<HeaderProps> = memo(({ user }) => {
  console.log('re-render header');

  return (
    <View style={styles.container}>
      <Image
        resizeMode="center"
        style={styles.avatar}
        source={{ uri: user.avatar }}
      />
      <View>
        <Text>Chào ngày mới</Text>
        <Text style={styles.name}>{user.name ?? "Chưa có tên"}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 100,
    width:'100%',
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default Header;
