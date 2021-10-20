import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setFavoriteUserContacts} from '../../Actions/UserActions';

const User = props => {
  const dispatch = useDispatch();
  const {item} = props;
  const {picture, name, location} = item;

  return (
    <View style={styles.contactContainer}>
      <Image style={styles.image} source={{uri: picture.medium}} />
      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{`${name.first} ${name.last}`}</Text>
          <TouchableOpacity
            onPress={() => dispatch(setFavoriteUserContacts(props.item))}>
            <Icon
              style={styles.icon}
              name="heart-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text style={{margin: 1}}>{item.email}</Text>
        <Text style={{margin: 1}}>{item.phone}</Text>
        <Text
          style={{
            margin: 1,
          }}>{`${location.city} ${location.state} ${location.country}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 5,
    width: 340,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    color: 'black',
  },

  nameContainer: {
    flexDirection: 'row',
    margin: 1,
    width: 210,
    justifyContent: 'space-between',
  },

  icon: {
    elevation: 1,
  },

  detailContainer: {
    flexDirection: 'column',
  },
});

export default User;
