import createAction from 'modules/shared/utils/createAction.util';
import { SIGN_IN, SIGN_OUT } from './auth.actionTypes';
import { User } from './models/User.model';

export const signIn = (user: User) => createAction(SIGN_IN, user);
export const signOut = () => createAction(SIGN_OUT);
