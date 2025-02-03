import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, { message: 'Имя обязательно' }),
  phone: z
    .string()
    .min(1, { message: 'Телефон обязателен' })
    .regex(/^\+?[0-9]{10,15}$/, { message: 'Некорректный номер телефона' }),
});

export type FormData = z.infer<typeof schema>;
