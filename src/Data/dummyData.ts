import { FoodItem, TimeSlot, User, Booking } from "../types";

export const initialUsers: User[] = [
  {
    id: 1,
    name: "Anu",
    regNo: "21CS01",
    email: "anu@gmail.com",
    password: "1234",
  },
];

export const initialFood: FoodItem[] = [
  { id: 1, name: "Biriyani", price: 120, stock: 50 },
  { id: 2, name: "Meals", price: 80, stock: 40 },
  { id: 3, name: "Fried Rice", price: 100, stock: 30 },
];

export const initialSlots: TimeSlot[] = [
  { id: 1, slotTime: "1:00 - 1:30 PM", maxLimit: 20, booked: 0 },
  { id: 2, slotTime: "1:30 - 2:00 PM", maxLimit: 20, booked: 0 },
  { id: 3, slotTime: "2:00 - 2:30 PM", maxLimit: 20, booked: 0 },
];

export const initialBookings: Booking[] = [];
