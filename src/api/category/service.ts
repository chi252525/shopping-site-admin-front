import { api } from 'boot/axios';
import { CategoryList } from './type';

const getCategoryList = () => {
  return api.get<{
    content: CategoryList[];
  }>('/intranet/category/list', {});
};

export { getCategoryList };
