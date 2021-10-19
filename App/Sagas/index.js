import {takeLatest} from 'redux-saga/effects';
import {GET_CONTACTS, GET_USER} from '../Actions/Keys';
import {getUserContactSaga, getUserSaga} from './UserSaga';

export default function* rootSaga() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(GET_CONTACTS, getUserContactSaga);
}
