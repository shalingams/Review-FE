export interface TypeService {
  _id: string
  providedBy: string
  title: string
  active: boolean
  description: string
  directBooking: boolean
  availability: Availability[]
  picture: string
  minTimeRentingUnitInMinutes: number
  created: number
  updated: number
  IS_DELETED: boolean
  stripeProductId: string
  category: string
}

export interface Availability {
  active: boolean
  dayOfWeek: DayOfWeek
  time: Time
  valueInCents: number
}

export interface DayOfWeek {
  "0": boolean
  "1": boolean
  "2": boolean
  "3": boolean
  "4": boolean
  "5": boolean
  "6": boolean
}

export interface Time {
  endTime: string
  startTime: string
}

export interface CurrentUser {
  _id: string
  username: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IReview {
  _id: string
  userId: string
  serviceId: string
  rating: number
  review: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface ICountry {
  _id: string
  name: string
  flag: string
}