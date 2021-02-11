import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import Cleave from 'cleave.js/react';
import { randomString } from '../utils/strings.utils';

interface Props {
  className?: string;
  labelClassName?: string;
  controlClassName?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  delimiters?: string[];
  blocks?: number[];
  required?: boolean;
  isValid?: (text: string) => boolean;
  disabled?: boolean;
  onChange?: (value: string, isValid: boolean, name?: string) => void;
}

const Input = ({
  className,
  labelClassName,
  controlClassName,
  value,
  label,
  placeholder,
  name,
  type,
  delimiters,
  blocks,
  required,
  isValid,
  disabled,
  onChange,
}: Props) => {
  const id = useRef(randomString());
  const [isInvalid, setIsInvalid] = useState(false);

  const renderLabel = () => (
    <label className={classNames('label', labelClassName)} htmlFor={id.current}>
      {label}
    </label>
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!onChange) {
      return;
    }

    const requiredValid = !required || !!val;

    if (isValid) {
      const valid = requiredValid && isValid(val);
      setIsInvalid(!valid);
      onChange(val, valid, name);
    } else {
      setIsInvalid(!requiredValid);
      onChange(val, requiredValid, name);
    }
  };

  const renderInput = () => {
    const inputProps = {
      id: id.current,
      value,
      type,
      placeholder,
      name,
      onChange: handleChangeText,
      disabled,
      required,
      className: classNames(
        'input',
        {
          'is-danger': isInvalid,
          'read-only': disabled,
        },
        className,
      ),
    };

    if (!blocks && !delimiters) {
      return (
        <input {...inputProps} />
      );
    }

    return (
      <Cleave
        {...inputProps}
        options={{
          delimiters,
          blocks,
          uppercase: true,
        }}
      />
    );
  };

  return (
    <div className="field">
      {label && renderLabel()}
      <div className={classNames('control', controlClassName)}>
        {renderInput()}
      </div>
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
