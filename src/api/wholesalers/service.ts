import { api } from 'boot/axios';
import { WholesalerList } from './type';

const getWholesalerList = () => {
  return api.get<WholesalerList[]>('/intranet/wholesaler/list', {});
};

export { getWholesalerList };
