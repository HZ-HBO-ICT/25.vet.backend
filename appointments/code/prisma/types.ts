/**
 * This file contains all the types that are used in the application
 *
 * It is a bit of a redundant file, because most of the types come from
 * the prima model. However, in this way we have more control over the
 * types that are used in the application. For example we want the id and
 * the createdAt field to be optional, it is genereated by Prisma/database.
 */

interface Appointment {
  id?: number,
  createdAt?: Date,
  state: string,
  name: string,
  breed: string,
  timeslotId: number,
  theDateId: number,
}

interface TimeSlot {
  id?: number,
  createdAt?: Date,
  starttime: string,
  duration: number,
}

interface TheDate {
  id?: number,
  createdAt?: Date,
  day: number,
  month: number,
  year: number,
  appointments?: Appointment[]
}


export { Appointment, TimeSlot, TheDate };
