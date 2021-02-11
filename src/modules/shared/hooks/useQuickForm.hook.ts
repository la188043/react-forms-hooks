import { useState } from 'react';
import { randomString } from '../utils/strings.utils';
import useForm, { FieldValue, FormField } from './useForm.hook';

interface QuickFormField {
  name?: string;
  value: FieldValue;
  isValid?: boolean;
}

const isObject = (value: any) => value !== null && typeof value === 'object';

const initFields = (defaultValues: (FieldValue | QuickFormField)[]): FormField[] => defaultValues
  .map((f) => {
    if (!isObject(f)) {
      return {
        name: randomString(),
        value: f as FieldValue,
        isValid: false,
      };
    }

    const { name, value, isValid } = f as QuickFormField;

    return {
      name: name || randomString(),
      value,
      isValid: !!isValid,
    };
  });

const useQuickForm = (defaultValue: (FieldValue | QuickFormField)[]) => {
  const [fields] = useState(() => initFields(defaultValue));
  const form = useForm(fields);

  return {
    ...form,
    fields: fields.map((field) => field.name),
  };
};

export default useQuickForm;
