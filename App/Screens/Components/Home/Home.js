import React, {useContext, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {useDispatch, useSelector} from 'react-redux';
import {PrivateValueStore, useNavigation} from '@react-navigation/core';
import {getUserContacts} from '../../../Actions/UserActions';
import User from '../../SubComponents/UserList';

const Home = ({props}) => {
  const {appTheme} = useContext(AppContext);
  const {contacts} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    dispatch(getUserContacts());
  }, [dispatch]);

  console.log(contacts?.length);

  const goNext = () => {
    navigation.navigate('Favorite');
  };

  const userDetails = item => {
    navigation.navigate('UserDetails', {item});
    // console.log(item);
  };

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          userDetails(item);
        }}>
        <User
          // picture={item.picture.medium}
          // fullName={`${item.name.first} ${item.name.last}`}
          // email={item.email}
          // phone={item.cell}
          // location={`${item.location.city} ${item.location.state} ${item.location.country}`}
          item={item}
        />
      </TouchableOpacity>
    );
  };

  // handleAddFavorite = () => {
  //   if(favorite) {
  //     setFavorite([...favorite, {item: item, key: Date.now(), checked: true}])
  //   }
  // };

  // handleFavorite = (id) => {
  //   setFavorite(task.map((favorite) => {
  //     if (favorite.key === id) !favorite.checked = favorite.checked;
  //     return favorite;
  //   }))
  // };

  // favoriteList = (id) => {
  //   setFavorite(favorite.filter((favorite) => {
  //     if(favorite.checked === true) return true;
  //   }))
  // }

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text}}>
        Welcome...
      </CustomText>
      <Button title={'Favorite'} onPress={goNext} />
      <FlatList
        style={{flex: 1, margin: 10, borderRadius: 10}}
        data={contacts}
        renderItem={renderList}
        keyExtractor={item => item.login.uuid}
      />
    </SafeAreaView>
  );
};

export default Home;
