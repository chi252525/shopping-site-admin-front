import { api } from 'boot/axios';
import type { IAnnouncement, IAnnouncementRequest } from './type';

//GET /announcements/
export const getAnnouncements = (params: IAnnouncementRequest) => {
  return api.get<IAnnouncement[]>('/announcements/', { params });
};
