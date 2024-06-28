import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const InputField = ({ id, label, type, value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        required
        type={type}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
