import {put} from '@redux-saga/core/effects';
import {SET_CONTACTS, SET_FAVORITE_USER} from '../Actions/Keys';
import {getContactList} from '../Services/UserService';

export function* getUserSaga(action) {
  try {
    // Here call Service from UserService
  } catch (error) {}
}

export function* getUserContactSaga(action) {
  try {
    // Here call Service from UserService
    const res = yield getContactList();
    // console.log(res);
    if (res?.results) {
      yield put({type: SET_CONTACTS, payload: res.results});
    }
  } catch (error) {
    console.log(error);
  }
}

export function* setFavoriteUserContactsSaga(action) {
  try {
    // Here call Service from UserService
    yield put({type: SET_FAVORITE_USER, payload: action.item});
  } catch (error) {}
}
