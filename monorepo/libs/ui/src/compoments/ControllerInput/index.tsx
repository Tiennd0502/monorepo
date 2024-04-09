import { ForwardedRef, forwardRef, memo } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import isEqual from 'react-fast-compare';

import Input, { InputProps, InputVariant } from '../Input';

interface ControllerInputProps<T> extends InputProps {
  name: string;
  label: string;
  variant: InputVariant;
  rules: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  control: Control<T & FieldValues>;
}

const InputBase = <T,>(
  {
    name,
    control,
    rules,
    label,
    variant = 'flushed',
    ...rest
  }: ControllerInputProps<T>,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <Controller
      name={name.toString()}
      control={control as Control<FieldValues>}
      rules={rules}
      render={({ field: { onChange, ...props }, fieldState: { error } }) => {
        return (
          <Input
            aria-label={name.toString()}
            label={label}
            variant={variant}
            errorMessage={error?.message}
            onChangeText={onChange}
            {...props}
            {...rest}
            ref={ref}
          />
        );
      }}
    />
  );
};

const ControllerInput = forwardRef(InputBase) as <T>(
  props: ControllerInputProps<T> & { ref?: ForwardedRef<HTMLElement> }
) => ReturnType<typeof InputBase>;

export default memo(ControllerInput, isEqual) as typeof InputBase;
