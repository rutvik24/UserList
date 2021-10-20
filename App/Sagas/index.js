import {takeLatest} from 'redux-saga/effects';
import {GET_CONTACTS, GET_USER, SET_FAVORITE} from '../Actions/Keys';
import {
  getUserContactSaga,
  getUserSaga,
  setFavoriteUserContactsSaga,
} from './UserSaga';

export default function* rootSaga() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(GET_CONTACTS, getUserContactSaga);
  yield takeLatest(SET_FAVORITE, setFavoriteUserContactsSaga);
}
