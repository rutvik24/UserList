import React, {useContext} from 'react';
import {SafeAreaView, Image, View, StyleSheet, Text} from 'react-native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const UserDetails = ({props, route}) => {
  const {appTheme} = useContext(AppContext);
  const {item} = route.params;
  const {
    topTitle,
    title,
    info,
    singleInfo,
    value,
    image,
    border,
    flexBox,
    topFlexBox,
  } = styles;

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        {backgroundColor: appTheme.background},
      ]}>
      <View style={flexBox}>
        <View style={topFlexBox}>
          <Text style={topTitle}>User Details</Text>
          <Image style={image} source={{uri: item.picture.large}} />
        </View>
        <View style={info}>
          <View style={singleInfo}>
            <Text style={title}>Name : </Text>
            <Text style={value}>{`${item.name.first} ${item.name.last}`}</Text>
          </View>
          <View style={border} />
          <View style={singleInfo}>
            <Text style={title}>Email : </Text>
            <Text style={value}>{item.email}</Text>
          </View>
          <View style={border} />
          <View style={singleInfo}>
            <Text style={title}>Phone Number : </Text>
            <Text style={value}>{item.cell}</Text>
          </View>
          <View style={border} />
          <View style={singleInfo}>
            <Text style={title}>City : </Text>
            <Text style={value}>
              {`${item.location.city} ${item.location.state} ${item.location.country}`}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    margin: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 100,
  },

  info: {
    margin: 10,
    flex: 3,
    marginTop: 100,
    flexDirection: 'column',
    alignContent: 'space-between',
  },

  singleInfo: {
    flexDirection: 'row',
    margin: 10,
    marginVertical: 15,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  topTitle: {
    margin: 30,
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginLeft: 15,
  },

  border: {
    borderBottomWidth: 1,
    borderColor: '#808080',
  },
  flexBox: {
    flex: 5,
  },

  topFlexBox: {
    width: 340,
    flex: 2,
  },
});

export {UserDetails};
