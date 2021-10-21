import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setFavoriteUserContacts} from '../../Actions/UserActions';

const User = props => {
  const dispatch = useDispatch();
  const {item} = props;
  const {picture, name, location} = item;
  const {
    contactContainer,
    image,
    nameContainer,
    fullName,
    icon,
    detailContainer,
    marginAll
  } = styles;

  return (
    <View style={contactContainer}>
      <Image style={image} source={{uri: picture.medium}} />
      <View style={detailContainer}>
        <View style={nameContainer}>
          <Text style={fullName}>{`${name.first} ${name.last}`}</Text>
          <Icon
            style={icon}
            name="heart-outline"
            size={30}
            color="black"
            onPress={() => dispatch(setFavoriteUserContacts(props.item))}
          />
        </View>
        <Text style={marginAll}>{item.email}</Text>
        <Text style={marginAll}>{item.phone}</Text>
        <Text
          style={{marginAll}>{`${location.city} ${location.state} ${location.country}`}</Text>
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

  fullName: {
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
  marginAll: {
    margin: 1,
  },
});

export default User;
