import Input from 'modules/shared/components/Input';
import useQuickForm from 'modules/shared/hooks/useQuickForm.hook';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as authActions from '../auth.actions';

const AuthForm = ({ signIn }: ReduxProps) => {
  const {
    fields: [FIRSTNAME, LASTNAME],
    getFieldValue,
    handleChange,
    isValid,
    resetFields,
  } = useQuickForm(['', '']);

  const firstname = getFieldValue<string>(FIRSTNAME);
  const lastname = getFieldValue<string>(LASTNAME);

  const onChanged = (value: string, valid: boolean, name?: string) => {
    handleChange(value, valid, name!);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const person = { firstname, lastname };
      signIn(person);

      resetFields();
    } else {
      console.error('An error occured');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name={FIRSTNAME}
        value={firstname}
        placeholder="Prénom"
        onChange={onChanged}
        required
      />

      <Input
        type="text"
        name={LASTNAME}
        value={lastname}
        placeholder="Nom de famille"
        onChange={onChanged}
        required
      />

      <button type="submit">Afficher</button>
    </form>
  );
};

const mapDispatchToProps = {
  signIn: authActions.signIn,
};

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(AuthForm);
