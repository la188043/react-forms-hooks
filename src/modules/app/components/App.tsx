import React from 'react';

import useQuickForm from 'modules/shared/hooks/useQuickForm.hook';
import Input from 'modules/shared/components/Input';

const App = () => {
  const {
    fields: [FIRSTNAME, LASTNAME],
    getFieldValue,
    handleChange,
    isValid,
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

      console.log(person);
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

export default App;
