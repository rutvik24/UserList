import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const User = props => {
  return (
    <View style={styles.contactContainer}>
      <Image style={styles.image} source={{uri: props.picture}} />
      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.fullName}</Text>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="heart-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
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
