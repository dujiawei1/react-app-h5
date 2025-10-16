// 医馆列表项数据结构
interface ClinicItem {
  clinicName: string;
  clinicId: string;
  avatar: string;
  expertiseAreasValue: Array<string>;
  addr: string;
}

export { ClinicItem };
