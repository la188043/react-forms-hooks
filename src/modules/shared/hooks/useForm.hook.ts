import { useReducer } from 'react';
import { reduceToObject } from '../utils/array.utils';

export type FieldValue = string | boolean | FileList | null;

export interface FormField {
  name: string;
  value: FieldValue;
  isValid: boolean;
}

interface State {
  fields: { [key: string]: FormField; };
  initial: FormField[];
}

const CHANGE = 'change';
const RESET = 'reset';

type Action =
  | { type: typeof CHANGE, field: FormField }
  | { type: typeof RESET };

const init = (formFields: FormField[]): State => {
  const fields = reduceToObject(
    formFields,
    (f) => f.name,
    (f) => f,
  );

  return {
    fields,
    initial: formFields,
  };
};

const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case RESET:
      return init(state.initial);
    case CHANGE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.field.name]: action.field,
        },
      };
    default:
      return state;
  }
};

const useForm = (formFields: FormField[]) => {
  const [state, dispatch] = useReducer(formReducer, formFields, init);
  const { fields } = state;

  const handleChange = (value: FieldValue, isValid: boolean, name: string) => {
    const field: FormField = {
      ...fields[name],
      isValid,
      value,
    };

    dispatch({ type: CHANGE, field });
  };

  const getFieldValue = <T extends FieldValue>(name: string): T => fields[name].value as T;
  const resetFields = () => dispatch({ type: RESET });

  return {
    handleChange,
    isValid: Object.keys(fields).every((key) => fields[key].isValid),
    getFieldValue,
    resetFields,
  };
};

export default useForm;
