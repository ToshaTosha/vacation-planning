export interface VacationRequest {
  number: number;
  fullName: string;
  applicationNumber: number;
  registrationDate: string;
  department: string;
  leaveType: string;
  status: 'Одобрено' | 'На рассмотрении' | 'Отказано';
}
