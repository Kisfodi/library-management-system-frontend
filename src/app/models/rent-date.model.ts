export class RentDate {
  constructor(
    public id: number|undefined,
    public startDate: Date,
    public returnDate: Date|undefined,
    public deadline: Date
  ) {
  }
}
