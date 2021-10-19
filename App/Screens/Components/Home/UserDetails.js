import React, {useContext} from 'react';
import {
  SafeAreaView,
  Button,
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const UserDetails = ({props, route}) => {
  const {appTheme} = useContext(AppContext);
  const navigation = useNavigation();
  const {item} = route.params;

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <Image style={styles.image} source={{uri: item.picture.large}} />
      <View style={styles.info}>
        <View style={styles.singleInfo}>
          <Text style={styles.title}>Name : </Text>
          <Text
            style={styles.value}>{`${item.name.first} ${item.name.last}`}</Text>
        </View>
        <View style={styles.singleInfo}>
          <Text style={styles.title}>Email : </Text>
          <Text style={styles.value}>{item.email}</Text>
        </View>
        <View style={styles.singleInfo}>
          <Text style={styles.title}>Phone Number : </Text>
          <Text style={styles.value}>{item.cell}</Text>
        </View>
        <View style={styles.singleInfo}>
          <Text style={styles.title}>City : </Text>
          <Text style={styles.value}>
            {`${item.location.city} ${item.location.state} ${item.location.country}`}
          </Text>
        </View>
      </View>
      <Button
        style={{width: 30}}
        title={'Go Back'}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 340,
    margin: 10,
    borderRadius: 20,
  },

  info: {
    margin: 10,
    flexDirection: 'column',
  },

  singleInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  title: {
    fontsize: 25,
    fontWeight: 'bold',
  },

  value: {
    fontSize: 15,
  },
});

export {UserDetails};
