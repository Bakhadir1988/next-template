import { FieldError } from 'react-hook-form';

type RegisterProps = (event: React.ChangeEvent<HTMLInputElement>) => void;

type FormInputProps = {
  label: string;
  id: string;
  type: string;
  register: RegisterProps;
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
