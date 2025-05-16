import { Component, OnInit } from '@angular/core';
import { clientiInitiali } from 'src/app/data';

@Component({
  selector: 'app-administrare-clienti',
  templateUrl: './administrare-clienti.component.html',
  styleUrls: ['./administrare-clienti.component.scss']
})
export class AdministrareClientiComponent implements OnInit {
  clienti: any[] = [];

  ngOnInit(): void {
    const local = localStorage.getItem('clienti');
    this.clienti = local ? JSON.parse(local) : clientiInitiali;
    this.salveaza();
  }

  adaugaClient() {
    this.clienti.push({
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: '',
      phoneNumbers: [''],
      active: true,
      cars: []
    });
    this.salveaza();
  }

  adaugaTelefon(client: any) {
    client.phoneNumbers.push('');
    this.salveaza();
  }

  adaugaMasina(client: any) {
    client.cars.push({
      id: Date.now(),
      licensePlate: '',
      vin: '',
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      engineType: '',
      engineCapacity: null,
      horsepower: null,
      kilowatts: null
    });
    this.salveaza();
  }

  stergeMasina(client: any, index: number) {
    client.cars.splice(index, 1);
    this.salveaza();
  }

  stergeClient(index: number) {
    this.clienti.splice(index, 1);
    this.salveaza();
  }

  dezactiveazaClient(client: any) {
    client.active = false;
    this.salveaza();
  }

  updateKW(car: any) {
    if (car.horsepower) {
      car.kilowatts = Math.round(car.horsepower * 0.7355);
    }
    this.salveaza();
  }

  updateHP(car: any) {
    if (car.kilowatts) {
      car.horsepower = Math.round(car.kilowatts / 0.7355);
    }
    this.salveaza();
  }

  validEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  salveaza() {
    localStorage.setItem('clienti', JSON.stringify(this.clienti));
  }
}
