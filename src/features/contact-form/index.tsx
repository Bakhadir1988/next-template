'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { FormData, schema } from './lib/validation';
import FormInput from './ui/FormInput';
import SubmitButton from './ui/SubmitButton';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      toast.success('Данные успешно отправлены!');
    } catch (error) {
      console.error(error);
      toast.error('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Имя"
        id="name"
        type="text"
        register={register('name')}
        error={errors.name?.message}
      />
      <FormInput
        label="Телефон"
        id="phone"
        type="text"
        register={register('phone')}
        error={errors.phone?.message}
      />
      <SubmitButton>Отправить</SubmitButton>
    </form>
  );
}
