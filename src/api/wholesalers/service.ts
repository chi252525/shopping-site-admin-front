import { api } from 'boot/axios';
import { WholesalerList } from './type';

const getWholesalerList = () => {
  return api.get<{
    content: WholesalerList[];
  }>('/intranet/wholesaler/list', {});
};

export { getWholesalerList };
