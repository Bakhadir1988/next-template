export const sendData = async (
  formData: FormData,
  setError: (name: string, error: { type: string; message?: string }) => void,
) => {
  try {
    const response = await fetch('https://dev.nmcms.ru/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.statusText}`);
    }
    console.log('Данные успешно отправлены');
  } catch (error) {
    console.error('Ошибка отправки данных:', error);
    setError('formError', {
      type: 'manual',
      message: 'Ошибка отправки данных',
    });
  }
};
