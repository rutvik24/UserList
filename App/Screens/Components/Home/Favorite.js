import React, {useContext} from 'react';
import {
  SafeAreaView,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {useSelector} from 'react-redux';
import User from '../../SubComponents/UserList';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
});

const Favorite = props => {
  const {appTheme} = useContext(AppContext);
  const navigation = useNavigation();
  const {favorite} = useSelector(state => state.user);
  const {flatList} = styles;

  const userDetails = item => {
    navigation.navigate('UserDetails', {item});
  };

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          userDetails(item);
        }}>
        <User item={item} />
      </TouchableOpacity>
    );
  };

  console.log(favorite);

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text}}>
        Favorite Screen
      </CustomText>
      <FlatList
        style={flatList}
        data={favorite}
        renderItem={renderList}
        keyExtractor={item => item.login.uuid}
      />

      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export {Favorite};
