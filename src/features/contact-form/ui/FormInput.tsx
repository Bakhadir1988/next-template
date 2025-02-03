import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: FieldError | string;
};

export default function FormInput({
  label,
  id,
  type,
  register,
  error,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} {...register} />
      {error && (
        <p style={{ color: 'red' }}>
          {typeof error === 'string' ? error : error.message}
        </p>
      )}
    </div>
  );
}
