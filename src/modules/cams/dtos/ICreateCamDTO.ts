export default interface ICreateCamDTO {
  ip: string;
  user: string;
  model: string;
  installation: Date;
  countdown: [date: Date, countdown: string];
}
