import {GET_USER_DATA}  from '../constants/actionTypes';
import axios  from 'axios';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function authenticate() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    axios.get('http://52.38.226.152/onepassword/user?op=login&username=patta@gmail.com&password=test123')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // return dispatch({
    //   type: types.GET_USER_DATA,
    //   dateModified: getFormattedDateTime(),
    //   settings
    // });
  };
}

