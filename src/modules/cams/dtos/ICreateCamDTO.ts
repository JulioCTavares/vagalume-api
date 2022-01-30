export default interface ICreateCamDTO {
  ip: string;
  establishment_id: string;
  user: string;
  model: string;
  installation: Date;
  countdown: { date: Date; count: string };
}
