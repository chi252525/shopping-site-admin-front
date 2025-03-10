import { api } from 'boot/axios';
import { ProductList } from './type';
import { filterRequestParams } from 'src/utils/request';

const getProductList = (params: {
  merchantId?: number;
  name?: string;
  firstCategory: number;
  secondCategory: number;
  baseSku?: string;
  minPrice?: number;
  maxPrice?: number;
  unitPrice?: number;
  salePrice?: number;
  discountPrice?: number;
  inStock?: boolean;
  startTime?: string;
  endTime?: string;
  page?: number;
  size?: number;
  sort?: string;
}) => {
  // 過濾空值的參數
  const obj = filterRequestParams(params);

  return api.get<{
    content: ProductList[];
    pageable: {
      pageNumber: number;
    };
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
    sort: string;
  }>('/intranet/product/list', {
    params: {
      ...obj,
      page: params.page || 0, // 默認 page = 0
      size: params.size || 10, // 默認 size = 10
      sort: params.sort || ['baseSku'], // 默認排序為baseSku
    },
  });
};

export { getProductList };
