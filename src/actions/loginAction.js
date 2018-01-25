import {GET_USER_DATA,GET_USER_PROFILE}  from '../constants/actionTypes';
import {API_URL}  from '../constants/system';
import axios  from 'axios';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function authenticate() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    axios.get(API_URL+'onepassword/user?op=login&username=patta@gmail.com&password=test123')
      .then(function (response) {
       // console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      })
      .catch(function (error) {
        console.log(error);
      });

  };
}

export function getProfile() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    let user = JSON.parse(localStorage.getItem('user'))
    axios.get(API_URL+'onepassword/user?op=profile&auth_token='+user.auth_token)
      .then(function (response) {
        console.log('getProfile',response);
        dispatch({
          type : GET_USER_PROFILE,
          payload : response.data.data
        })
      })
      .catch(function (error) {
        console.log('getProfile',error);
      });

  };
}

