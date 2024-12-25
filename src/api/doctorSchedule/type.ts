type Nullable<T> = {
  [p in keyof T]: T[p] | null;
};

interface IAccountInfo {
  admin: boolean;
  id: string | null;
  name: string;
}

interface IDivision {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  id: string;
  organizationId: string;
  divisionNo: string;
  divisionName: string;
  divisionEngName: string;
  insuDivisionNo: string;
  visitClass: string;
  divisionNote: string;
  stop: boolean;
  stopDateTime: string;
}

interface IClass {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  stop: boolean;
  stopDateTime: string;
  startDate: string;
  endDate: string;
  id: string;
  code: string;
  name: string;
  regStartTime: string;
  regEndTime: string;
  treatmentStartTime: string;
  treatmentEndTime: string;
  backgroundColor: string;
}

interface IRoom {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  id: string;
  organizationId: string;
  code: string;
  name: string;
  location: string;
  note: string;
  stop: boolean;
  stopDateTime: string;
}

interface ITemplate {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  stop: boolean;
  stopDateTime: string;
  id: string;
  code: string;
  name: string;
  maxNo: number;
  startNo: number;
  totalNo: number;
}

interface IDoctor {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  id: string;
  no: string;
  chName: string;
  enName: string;
  title: string;
  division: string;
}

interface ISchedule {
  stop: boolean;
  scheduleDate: string;
  doctorId: string;
  divisionId: string;
  clinicRoomId: string;
  shiftId: string;
  getNumberTemplateMtId: string;
  state: string;
  replaceDoctorId: string;
  teach: boolean;
  scheduleType: string;
  scheduleNote: string;
  modifyNote: string;
}

interface IScheduleFull {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  stop: boolean;
  stopDateTime: string;
  id: string;
  scheduleDate: string;
  weekday: number;
  doctorId: string;
  doctorNo: string;
  doctorChName: string;
  doctorEnName: string;
  divisionId: string;
  divisionCode: string;
  divisionChName: string;
  divisionEnName: string;
  clinicRoomId: string;
  clinicRoomCode: string;
  clinicRoomName: string;
  shiftId: string;
  shiftCode: string;
  shiftName: string;
  shiftBackgroundColor: string;
  treatmentStartTime: string;
  treatmentEndTime: string;
  getNumberTemplateDtId: string;
  maxNo: number;
  startNo: number;
  totalNo: number;
  regCountNo: number;
  regCountOddNo: number;
  regCountEvenNo: number;
  state: string;
  replaceDoctorId: string;
  replaceDoctorNo: string;
  replaceDoctorChName: string;
  replaceDoctorEnName: string;
  teach: boolean;
  scheduleType: string;
  scheduleNote: string;
  weekScheduleId: string;
}

interface IWeekScheduleFull {
  modifiedAt: string;
  modifiedBy: IAccountInfo;
  createdAt: string;
  createdBy: IAccountInfo;
  stop: boolean;
  stopDateTime: string;
  id: string;
  weekday: number;
  doctorId: string;
  doctorNo: string;
  doctorChName: string;
  doctorEnName: string;
  divisionId: string;
  divisionCode: string;
  divisionChName: string;
  divisionEnName: string;
  clinicRoomId: string;
  clinicRoomCode: string;
  clinicRoomName: string;
  shiftId: string;
  shiftCode: string;
  shiftName: string;
  shiftBackgroundColor: string;
  getNumberTemplateMtId: string;
  getNumberTemplateMtCode: string;
  getNumberTemplateMtName: string;
  maxNo: number;
  startNo: number;
  totalNo: number;
  getNumberTemplateDtId: string;
  autoSchedule: boolean;
  scheduleNote: string;
}

interface IWeekSchedule {
  id?: string;
  stop: boolean;
  weekday: number;
  doctorId: string;
  divisionId: string;
  clinicRoomId: string;
  shiftId: string;
  getNumberTemplateMtId: string;
  autoSchedule: boolean;
  scheduleNote: string;
}

interface IWeekAutoScheduleParams {
  startDate: string;
  endDate: string;
  divisionId: string;
  doctorId: string;
  weekScheduleIdList: string[];
}

type TWeekAutoScheduleParams = IWeekAutoScheduleParams;
type TWeekSchedule = Nullable<IWeekSchedule>;
type TWeekScheduleList = TWeekSchedule[];
type TWeekScheduleFull = Nullable<IWeekScheduleFull>;
type TWeekScheduleFullList = TWeekScheduleFull[];

type TSchedule = Nullable<ISchedule>;
type TScheduleFull = Nullable<IScheduleFull>;
type TScheduleFullList = TScheduleFull[];

type TDoctor = Nullable<IDoctor>;
type TDoctorList = TDoctor[];

type TTemplate = Nullable<ITemplate>;
type TTemplateList = TTemplate[];
type TRoom = Nullable<IRoom>;
type TRoomList = TRoom[];
type TDivision = Nullable<IDivision>;
type TDivisionList = TDivision[];
type TClass = Nullable<IClass>;
type TClassList = TClass[];

export type {
  TScheduleFull,
  TSchedule,
  TScheduleFullList,
  TTemplate,
  TTemplateList,
  TRoomList,
  TDivision,
  TDivisionList,
  TClass,
  TClassList,
  TDoctor,
  TDoctorList,
  TWeekScheduleFull,
  TWeekScheduleFullList,
  TWeekSchedule,
  TWeekScheduleList,
  TWeekAutoScheduleParams,
};
