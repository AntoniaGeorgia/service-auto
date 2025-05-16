export interface Car {
  id: number;
  licensePlate: string;
  vin: string;
  brand: string;
  model: string;
  year: number;
  engineType: 'diesel' | 'benzina' | 'hibrid' | 'electric';
  engineCapacity: number;
  horsepower: number;
  kilowatts: number;
}
