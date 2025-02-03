import { NextResponse } from 'next/server';

import { schema } from '@/features/contact-form/lib/validation';

export async function POST(request: Request) {
  const body = await request.json();

  // Валидация данных на сервере
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.errors }, { status: 400 });
  }

  // Обработка данных (например, сохранение в базу данных)
  console.log('Полученные данные:', result.data);

  return NextResponse.json({ message: 'Данные успешно получены!' });
}
