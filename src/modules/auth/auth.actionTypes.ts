import makeGetActionType from 'modules/shared/utils/makeGetActionType.util';

const getActionType = makeGetActionType('auth');

export const SIGN_IN = getActionType('sign-in');
export const SIGN_OUT = getActionType('sign-out');
