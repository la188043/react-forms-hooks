import { UserState } from 'modules/shared/types/reducers/UserState';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as authActions from '../auth.actions';

const UserInformation = ({ user, signOut }: ReduxProps) => (
  <>
    {user
      ? (
        <div>
          <h2>
            {user.firstname}
            {' '}
            {user.lastname}
          </h2>
          <button type="button" onClick={signOut}>Se déconnecter</button>
        </div>
      )
      : (
        <h2>Pas d&apos;utilisateur connecté</h2>
      )}
  </>
);

const mapStateToProps = ({ user }: UserState) => ({ user });

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(UserInformation);
