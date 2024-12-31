import { api } from 'boot/axios';
import { ProductList } from './type';
import { filterRequestParams } from 'src/utils/request';

const getProductList = (params: {
  baseSku: string;
  productName: string;
  firstCategory: string;
  secondCategory: string;
  startTime: string;
  endTime: string;
}) => {
  const obj = filterRequestParams(params);

  return api.get<{
    content: ProductList[];
    total_elements: number;
    total_pages: number;
    page: number;
    size: number;
    sort: string[];
  }>('/intranet/product/list', {
    params: {
      ...obj,
      page: 0,
      size: 999,
    },
  });
};
export { getProductList };
