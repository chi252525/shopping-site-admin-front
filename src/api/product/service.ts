import { api } from 'boot/axios';
import { ProductList } from './type';
import { filterRequestParams } from 'src/utils/request';

const getProductList = (params: {
  startDate: string;
  endDate: string;
  divisionNo: string;
  employeeNo: string;
}) => {
  const obj = filterRequestParams(params);

  return api.get<{
    content: ProductList;
    total_elements: number;
    total_pages: number;
    page: number;
    size: number;
    sort: string[];
  }>('/reg/doctor-schedules/', {
    params: {
      ...obj,
      page: 0,
      size: 999,
    },
  });
};
export { getProductList };
