import { AnyAction } from 'redux';

import { UserState } from 'modules/shared/types/reducers/UserState';

import {
  SIGN_IN,
  SIGN_OUT,
} from './auth.actionTypes';

const initialState: UserState = {
  user: null,
};

export default (state: UserState = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case SIGN_IN:
      return { user: action.payload };
    case SIGN_OUT:
      return { user: null };
    default:
      return state;
  }
};
