import React, {useContext} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Favorite = props => {
  const {appTheme} = useContext(AppContext);
  const navigation = useNavigation();

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
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export {Favorite};
