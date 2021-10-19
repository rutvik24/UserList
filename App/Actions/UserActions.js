import {GET_USER, LOG_OUT, GET_CONTACTS} from './Keys';

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
