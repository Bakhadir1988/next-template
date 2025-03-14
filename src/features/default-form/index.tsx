'use client';

import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { SkeletonForm } from '@/shared/components/skeleton-form';

import { FormDto, FormItem } from './utils/formDataTypes';
import getFormData from './utils/getFormData';
import { sendData } from './utils/sendData';

interface FieldError {
  message?: string; // Сообщение об ошибке (необязательное поле)
  type?: string; // Тип ошибки (например, 'required', 'pattern' и т.д.)
}

interface FormDataValues {
  [key: string]: string | number | boolean;
}

export const DefaultForm = () => {
  const [formData, setFormData] = useState<FormDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setErrorState] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormDataValues>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFormData('https://dev.nmcms.ru/api/form-data');
        console.log('Данные с сервера:', data);
        setFormData(data);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setErrorState('Не удалось загрузить данные формы');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FormDataValues> = async (data) => {
    console.log('data', data);
    try {
      const formDataToSend = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        const props = formData?.fields?.__nogroup?.props;
        if (props && key in props) {
          const field = props[key]; // Тип: FormField | undefined
          if (field && field.tpl_key) {
            formDataToSend.append(`data[${field.tpl_key}]`, String(value));
          }
        }
      });

      formDataToSend.append('comp', 'form2');
      formDataToSend.append(
        'from',
        formData?.form.manual_url || 'defaultAlias',
      );
      formDataToSend.append('send', '1');
      formDataToSend.append('agreement', 'on');

      await sendData(formDataToSend, setError);

      reset();
      setIsSuccess(true);
    } catch (error) {
      console.error('Ошибка отправки:', error);
    }
  };

  if (loading) {
    return <SkeletonForm />;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <h2>Форма успешно отправлена!</h2>
        <p>Спасибо за ваше сообщение.</p>
      </div>
    );
  }

  const getErrorMessage = (error: FieldError | undefined): string => {
    if (!error) {
      return 'Это поле обязательно';
    }
    if (error?.message && typeof error.message === 'string') {
      return error.message;
    }
    return 'Это поле обязательно';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData?.fields?.__nogroup?.props &&
        Object.values(formData.fields.__nogroup.props).map((item: FormItem) => {
          if (item.type === 'HIDDEN') {
            return (
              <input
                key={item.prop_id}
                type="hidden"
                {...register(item.prop_id)}
              />
            );
          }

          return (
            <div key={item.prop_id}>
              <label>
                <span>{item.title}</span>
                {item.type === 'TEXT' ? (
                  <textarea
                    {...register(item.prop_id, {
                      required: item.required === '1',
                    })}
                    placeholder={item.title}
                  />
                ) : item.type === 'PHONE' ? (
                  <Controller
                    name={item.prop_id}
                    control={control}
                    rules={{ required: item.required === '1' }}
                    render={({ field: { onChange } }) => (
                      <IMaskInput
                        mask="+7 (000) 000-00-00"
                        placeholder="+7 (___) ___-__-__"
                        onAccept={(value) => onChange(value)}
                      />
                    )}
                  />
                ) : item.type === 'EMAIL' ? (
                  <input
                    type="email"
                    {...register(item.prop_id, {
                      required: item.required === '1',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неверный формат email',
                      },
                    })}
                    placeholder={item.title}
                  />
                ) : (
                  <input
                    {...register(item.prop_id, {
                      required: item.required === '1',
                    })}
                    placeholder={item.title}
                  />
                )}
              </label>
              {errors[item.prop_id] && (
                <span>
                  {getErrorMessage(
                    errors[item.prop_id] as FieldError | undefined,
                  )}
                </span>
              )}
            </div>
          );
        })}
      <small>
        Заполняя данную форму я даю согласие на обработку персональных данных
      </small>
      <button type="submit" disabled={loading || !!error}>
        Отправить
      </button>
    </form>
  );
};
