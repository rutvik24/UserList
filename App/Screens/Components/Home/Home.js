import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {getUserContacts} from '../../../Actions/UserActions';
import User from '../../SubComponents/UserList';

const Home = props => {
  const {appTheme} = useContext(AppContext);
  const {contacts} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserContacts());
  }, [dispatch]);

  console.log(contacts?.length);

  const goNext = () => {
    navigation.navigate('Favorite');
  };

  const renderList = ({item}) => {
    return (
      <User
        picture={item.picture.medium}
        fullName={item.name.first + item.name.last}
        email={item.email}
        phone={item.cell}
        location={`${item.location.city} ${item.location.state} ${item.location.country}`}
      />
    );
  };

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text}}>
        Welcome...
      </CustomText>
      <Button title={'Favorite'} onPress={goNext} />
      <FlatList
        style={{flex: 1, backgroundColor: 'red'}}
        contentContainerStyle={{flex: 1}}
        data={contacts}
        renderItem={renderList}
        keyExtractor={item => item.login.uuid}
      />
    </SafeAreaView>
  );
};

export default Home;
