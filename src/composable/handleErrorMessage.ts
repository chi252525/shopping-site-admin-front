import { useDialog } from 'src/composable/AlertDialog';
import { isAxiosError } from 'axios';

export const useHandleErrorMessage = () => {
  const { confirmMessage } = useDialog();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleErrorDetail(ex: any) {
    if (isAxiosError(ex)) {
      await confirmMessage({
        type: 'negative',
        deleteConfirmStatus: true,
        message: '錯誤',
        content: ex.response?.data.detail ?? ex.response?.data.error ?? '',
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleErrorMessage(ex: any) {
    if (isAxiosError(ex)) {
      if (ex.message === null || ex.message === '') {
        if (
          ex.response?.data.detail !== null &&
          ex.response?.data.detail !== ''
        ) {
          handleErrorDetail(ex);
        } else {
          if (ex.code) {
            handleErrorMessageByText('錯誤代碼:' + ex.code);
            return;
          }
          handleErrorMessageByText('未知錯誤');
        }
        return;
      }
      await confirmMessage({
        type: 'negative',
        deleteConfirmStatus: true,
        message: '錯誤',
        content: ex.message,
      });
      return;
    }
    handleErrorMessageByText(ex);
  }

  async function handleErrorMessageByText(text: string) {
    await confirmMessage({
      type: 'negative',
      deleteConfirmStatus: true,
      message: '錯誤',
      content: text,
    });
  }

  return {
    handleErrorDetail,
    handleErrorMessage,
    handleErrorMessageByText,
  };
};
