import { Car } from './car.model';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumbers: string[];
  email: string;
  active?: boolean;
  cars: Car[];
}
