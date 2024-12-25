export interface IAnnouncement {
  id: string;
  modifiedAt: string;
  modifiedBy: IAccountInfo | null;
  createdAt: string;
  createdBy: IAccountInfo | null;
  startDatetime: string;
  endDatetime: string;
  title: string;
  content: string;
  type: number;
}

export interface IAccountInfo {
  admin: boolean;
  id: null | string;
  name: string;
}

export interface IAnnouncementRequest {
  title?: string;
  isActive: boolean;
  type: number;
}
