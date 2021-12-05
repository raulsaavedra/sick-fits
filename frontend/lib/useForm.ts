import { useState, ChangeEvent } from 'react';

interface IEventTarget {
  name: string;
  value: string | number | boolean | File;
  type: string;
}
export default function useForm<T>(initial: T) {
  const [inputs, setInputs] = useState<T>(initial);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let { value, name, type }: IEventTarget = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value = e.target.files ? e.target.files[0] : '';
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  function resetForm() {
    setInputs(initial);
  }
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(initial).map(([key, value]) => {
        if (typeof value === 'string') {
          return [key, ''];
        }
        if (typeof value === 'number') {
          return [key, 0];
        }
        if (typeof value === 'boolean') {
          return [key, false];
        }
        return [key, null];
      })
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
