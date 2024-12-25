import { api } from 'boot/axios';

import {
  TDoctorList,
  TTemplateList,
  TRoomList,
  TClassList,
  TDivisionList,
  TSchedule,
  TScheduleFull,
  TScheduleFullList,
  TWeekAutoScheduleParams,
  TWeekScheduleFullList,
  TWeekScheduleList,
} from './type';
import { filterRequestParams } from 'src/utils/request';

const getNumberTemplate = () => {
  return api.get<TTemplateList>('/reg/doctor-schedules/number-templates');
};

const getClassList = () => {
  return api.get<TClassList>('/reg/doctor-schedules/shifts');
};

const getDivisionList = () => {
  return api.get<TDivisionList>('/reg/doctor-schedules/outpatient-divisions');
};

const getRoomsList = () => {
  return api.get<TRoomList>('/reg/doctor-schedules/clinic-rooms');
};

const getDoctorList = () => {
  return api.get<TDoctorList>('/reg/doctor-schedules/doctors');
};

const getSchedules = (params: { startDate: string; endDate: string; divisionNo: string; employeeNo: string }) => {
  const obj = filterRequestParams(params);

  return api.get<{
    content: TScheduleFullList;
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

const addSchedule = (obj: TSchedule) => {
  return api.post<TScheduleFull>('/reg/doctor-schedules/', obj);
};

const updateSchedule = (id: string, obj: TSchedule) => {
  return api.put<TScheduleFull>(`/reg/doctor-schedules/${id}`, obj);
};

const getWeekScheduleSetting = (divisionNo: string, employeeNo: string) => {
  const obj = filterRequestParams({ divisionNo, employeeNo });
  return api.get<TWeekScheduleFullList>('/reg/doctor-schedules/week-settings/', {
    params: {
      ...obj,
    },
  });
};

const updateWeekScheduleSetting = (data: TWeekScheduleList) => {
  return api.put<TWeekScheduleFullList>('/reg/doctor-schedules/week-settings/', data);
};

const setWeekSchedule = (obj: TWeekAutoScheduleParams) => {
  return api.put<
    TWeekAutoScheduleParams & {
      totalStoppedCount: number;
      totalCreatedCount: number;
    }
  >('/reg/doctor-schedules/by-week', {
    ...obj,
  });
};

export {
  getRoomsList,
  getNumberTemplate,
  getClassList,
  getDivisionList,
  getDoctorList,
  getSchedules,
  addSchedule,
  updateSchedule,
  getWeekScheduleSetting,
  updateWeekScheduleSetting,
  setWeekSchedule,
};
