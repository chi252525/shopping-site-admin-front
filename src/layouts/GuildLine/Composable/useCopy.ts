import { useQuasar } from 'quasar';

export const useCopy = () => {
  const $q = useQuasar();

  const copyText = (text: string, message: string) => {
    try {
      navigator.clipboard.writeText(text);

      $q.notify({
        position: 'top',
        color: 'green',
        textColor: 'white',
        message: `已 Copy ${message}`,
        timeout: 1500,
      });
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return {
    copyText,
  };
};
