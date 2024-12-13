export class RentDate {
  constructor(
    public id: number,
    public startDate: Date,
    public returnDate: Date|undefined,
    public deadline: Date
  ) {
  }
}
