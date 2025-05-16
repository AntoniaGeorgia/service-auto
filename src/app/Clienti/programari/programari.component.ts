import { Component, OnInit } from '@angular/core';
import { clientiInitiali } from 'src/app/data';

interface Programare {
  id: number;
  clientId: number;
  carId: number;
  contactMethod: 'email' | 'telefon' | 'persoană';
  action: string;
  interval: string;
}

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.scss']
})
export class ProgramariComponent implements OnInit {
  clienti: any[] = [];
  programari: Programare[] = [];
  intervale: string[] = [];

  programareNoua: Programare = {
    id: 0,
    clientId: 0,
    carId: 0,
    contactMethod: 'email',
    action: '',
    interval: ''
  };

  ngOnInit(): void {
    const salvati = localStorage.getItem('clienti');
    this.clienti = salvati ? JSON.parse(salvati) : clientiInitiali;

    const programariExistente = localStorage.getItem('programari');
    this.programari = programariExistente ? JSON.parse(programariExistente) : [];

    this.genereazaIntervale();
  }

  genereazaIntervale() {
    for (let h = 8; h <= 16; h++) {
      this.intervale.push(`${h}:00 - ${h}:30`);
      this.intervale.push(`${h}:30 - ${h + 1}:00`);
    }
  }

  getMasini(clientId: number) {
    const client = this.clienti.find(c => c.id === +clientId);
    return client ? client.cars : [];
  }

  adaugaProgramare() {
    if (!this.programareNoua.clientId || !this.programareNoua.carId || !this.programareNoua.action || !this.programareNoua.interval) {
      alert('Toate câmpurile sunt obligtorii!');
      return;
    }

    this.programareNoua.id = Date.now();
    this.programari.push({ ...this.programareNoua });
    localStorage.setItem('programari', JSON.stringify(this.programari));
    this.resetForm();
  }

  resetForm() {
    this.programareNoua = {
      id: 0,
      clientId: 0,
      carId: 0,
      contactMethod: 'email',
      action: '',
      interval: ''
    };
  }

  getNumeClient(id: number): string {
    const c = this.clienti.find(x => x.id === id);
    return c ? `${c.firstName} ${c.lastName}` : '-';
  }

  getNumarInmatriculare(carId: number, clientId: number): string {
    const client = this.clienti.find(c => c.id === clientId);
    if (!client) return '-';
    const masina = client.cars.find((c: any) => c.id === carId);
    return masina?.licensePlate || '-';
  }

  stergeProgramare(id: number) {
    this.programari = this.programari.filter(p => p.id !== id);
    localStorage.setItem('programari', JSON.stringify(this.programari));
  }
}
