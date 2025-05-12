'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { ErrorIcon } from '@/shared/icons';
import { CheckIcon } from '@/shared/icons/check';
import { Button } from '@/shared/ui/button';
import { SkeletonForm } from '@/shared/ui/skeleton-form';

import styles from './default-form.module.scss';
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

export const DefaultForm = ({ form }: { form: string }) => {
  const [formData, setFormData] = useState<FormDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setErrorState] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log('error', error);

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
        const data = await getFormData(
          `${process.env.NEXT_PUBLIC_FORMS_URL}${form}/`,
        );
        setFormData(data);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setErrorState('Не удалось загрузить данные формы');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [form]);

  const onSubmit: SubmitHandler<FormDataValues> = async (data) => {
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
    return (
      <div className={styles.success}>
        <ErrorIcon fill="#DF2A2A" />
        <span className="base_subtitle">
          Ошибка! <br /> {error}
        </span>
        <span>Перезагрузите страницу и попробуйте снова!</span>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={styles.success}>
        <CheckIcon fill="#00B436" />
        <span className="base_subtitle">
          Спасибо! <br /> Вы успешно отправили заявку
        </span>
        <span>
          Оставьте свои данные и мы обязательно <br /> свяжемся с вами
        </span>
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
    <div className={styles.root}>
      <div className={styles.heading}>
        <strong>Оставьте ваши данные для связи</strong>
        <span>
          Оставьте заявку прямо сейчас. Мы перезвоним Вам, рассчитаем стоимость
          ремонта и предоставим скидку 10%.
        </span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapper}>
          {formData?.fields?.__nogroup?.props &&
            Object.values(formData.fields.__nogroup.props).map(
              (item: FormItem) => {
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
                  <label
                    className={clsx(
                      styles.control,
                      errors[item.prop_id] && styles.errors,
                      item.type === 'TEXT' && styles.textarea,
                    )}
                    key={item.prop_id}
                  >
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
                    {errors[item.prop_id] && (
                      <span>
                        {getErrorMessage(
                          errors[item.prop_id] as FieldError | undefined,
                        )}
                      </span>
                    )}
                  </label>
                );
              },
            )}
        </div>
        <div className={styles.checkbox_wrapper}>
          <small className={styles.checkbox}>
            <input type="checkbox" id="policy" name="policy" />
            <label htmlFor="policy">
              <span className={styles.icon}>
                <span className={styles.checkmark}></span>
              </span>
            </label>
          </small>
          <Link href="/privacy-policy">
            Согласен на обработку персональных данных
          </Link>
        </div>
        <Button
          radius="full"
          size="lg"
          type="submit"
          disabled={loading || !!error}
        >
          Записаться на ремонт
        </Button>
      </form>
    </div>
  );
};
