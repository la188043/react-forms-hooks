import React from 'react';
import AuthForm from './AuthForm';
import UserInformation from './UserInformation';

const ManageAuth = () => (
  <div className="container">
    <AuthForm />
    <UserInformation />
  </div>
);

export default ManageAuth;
