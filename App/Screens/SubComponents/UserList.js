import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const User = props => {
  console.log(props.picture);
  return (
    <View style={styles.contactContainer}>
      <Image style={styles.image} source={{uri: props.picture}} />
      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.fullName}</Text>
          {/* <Icon
            style={styles.icon}
            name={(props.checked && 'cards-heart') || 'cards-heart-outline'}
            size={30}
            color="black"
          /> */}
        </View>
        <Text style={{margin: 1}}>{props.email}</Text>
        <Text style={{margin: 1}}>{props.phone}</Text>
        <Text style={{margin: 1}}>{props.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    width: '100%',
    borderColor: 'black',
    borderBottomWidth: 1,
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
  },

  icon: {
    elevation: 1,
    alignContent: 'flex-end',
    marginHorizontal: 5,
  },

  detailContainer: {
    flexDirection: 'column',
  },
});

export default User;
