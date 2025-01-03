import { useQuasar } from 'quasar';
import NoticeMessage from 'components/NoticeMessage.vue';

export interface IDialogOptions {
  type: string;
  deleteConfirmStatus?: boolean;
  message: string;
  content?: string;
}

export const useDialog = () => {
  const $q = useQuasar();

  const checkType = (params: IDialogOptions) => {
    if (
      !['positive', 'negative'].includes(params.type) &&
      params.deleteConfirmStatus
    ) {
      $q.dialog({
        component: NoticeMessage,
        componentProps: {
          type: 'negative',
          message: '請確認 type 跟 deleteConfirmStatus 屬性 ',
        },
      });
      return true;
    }

    return false;
  };

  const confirmMessage = (params: IDialogOptions): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      if (checkType(params)) return;

      try {
        const dialogInstance = $q.dialog({
          //建立一個新的Instance 避免多個dialog共用產生衝突
          component: NoticeMessage,
          componentProps: {
            type: params.type,
            deleteConfirmStatus: params.deleteConfirmStatus,
            message: params.message,
            content: params.content,
          },
        });

        dialogInstance.onOk(() => {
          resolve(true);
        });

        dialogInstance.onCancel(() => {
          resolve(false);
        });

        dialogInstance.onDismiss(() => {
          resolve(false);
        });
      } catch (error) {
        console.error('useDialog failed:', error);
        reject(error);
      }
    });
  };

  const showNoticeMessage = (params: IDialogOptions) => {
    if (checkType(params)) return;

    try {
      const dialog = $q.dialog({
        component: NoticeMessage,
        componentProps: {
          type: params.type,
          deleteConfirmStatus: params.deleteConfirmStatus,
          message: params.message,
          content: params.content,
        },
      });

      const timeoutId = setTimeout(() => {
        dialog.hide();
      }, 1500);

      dialog.onCancel(() => {
        clearTimeout(timeoutId);
      });
    } catch (error) {
      console.error('useDialog failed:', error);
    }
  };

  return {
    confirmMessage,
    showNoticeMessage,
  };
};
