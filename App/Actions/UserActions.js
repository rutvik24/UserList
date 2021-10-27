import {
  GET_USER,
  LOG_OUT,
  GET_CONTACTS,
  SET_FAVORITE,
  SET_FAVORITE_USER,
} from './Keys';

export const getUserDetail = () => ({
  type: GET_USER,
});

export const userLogout = () => ({
  type: LOG_OUT,
});

export const getUserContacts = page => ({
  type: GET_CONTACTS,
  page,
});

export const setFavoriteUserContacts = item => ({
  type: SET_FAVORITE_USER,
  item,
});
