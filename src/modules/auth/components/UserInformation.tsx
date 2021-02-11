import { UserState } from 'modules/shared/types/reducers/UserState';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

const UserInformation = ({ user }: ReduxProps) => (
  <>
    {user
      ? (
        <h2>
          {user.firstname}
          {' '}
          {user.lastname}
        </h2>
      )
      : (
        <h2>Pas d&apos;utilisateur connecté</h2>
      )}
  </>
);

const mapStateToProps = ({ user }: UserState) => ({ user });

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(UserInformation);
