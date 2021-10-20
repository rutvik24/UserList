import {SET_CONTACTS, SET_USER, SET_FAVORITE_USER} from '../Actions/Keys';
import DefaultState from './Default';

const INIT_STATE = DefaultState.user;

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    case SET_CONTACTS:
      return {...state, contacts: action.payload};
    case SET_FAVORITE_USER:
      return {...state, favorite: action.payload};
    default:
      return state;
  }
};

export default UserReducer;
