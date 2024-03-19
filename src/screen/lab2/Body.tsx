import React from 'react';
import { View, Button, TextInput,Text } from 'react-native';
import { UserType } from './Main/Main';

type BodyProps = {
  onUpdateInfor: (user: UserType) => void;
  onClickChangeBgFooter: () => void;
};

const Body: React.FC<BodyProps> = ({ onUpdateInfor, onClickChangeBgFooter }) => {
  const [newName, setNewName] = React.useState('');
  const [newAvatar, setNewAvatar] = React.useState('');

  const handleUpdateInfo = () => {
    onUpdateInfor({ name: newName || "Chưa có tên", avatar: newAvatar });
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập tên mới"
        value={newName}
        onChangeText={setNewName}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Nhập địa chỉ avatar mới"
        value={newAvatar}
        onChangeText={setNewAvatar}
        style={{ marginBottom: 10}}
      />
      <Button title="Cập nhật thông tin" onPress={handleUpdateInfo} />
      <Button title="Đổi màu footer" onPress={onClickChangeBgFooter} />
    </View>
  );
};

export default Body;
