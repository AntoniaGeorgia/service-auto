import { Component, OnInit } from '@angular/core';
import { clientiInitiali } from 'src/app/data';

interface Istoric {
  id: number;
  programareId: number;
  primire: string;
  procesare: string;
  durata: number;
}

@Component({
  selector: 'app-istoric',
  templateUrl: './istoric.component.html',
  styleUrls: ['./istoric.component.scss']
})
export class IstoricComponent implements OnInit {
  clienti: any[] = [];
  programari: any[] = [];
  istorice: Istoric[] = [];

  istoricNou: Istoric = {
    id: 0,
    programareId: 0,
    primire: '',
    procesare: '',
    durata: 10
  };

  ngOnInit(): void {
    const clientiSalvati = localStorage.getItem('clienti');
    const programariSalvate = localStorage.getItem('programari');
    const istoriceSalvate = localStorage.getItem('istorice');

    this.clienti = clientiSalvati ? JSON.parse(clientiSalvati) : clientiInitiali;
    this.programari = programariSalvate ? JSON.parse(programariSalvate) : [];
    this.istorice = istoriceSalvate ? JSON.parse(istoriceSalvate) : [];
  }

  getNumeClient(programareId: number): string {
    const p = this.programari.find(p => p.id === programareId);
    const c = this.clienti.find(c => c.id === p?.clientId);
    return c ? `${c.firstName} ${c.lastName}` : '-';
  }

  getMasina(programareId: number): string {
    const p = this.programari.find(p => p.id === programareId);
    const client = this.clienti.find(c => c.id === p?.clientId);
    const masina = client?.cars.find((m: any) => m.id === p?.carId);
    return masina ? `${masina.licensePlate} – ${masina.brand} ${masina.model}` : '-';
  }

  adaugaIstoric() {
    if (!this.istoricNou.programareId || !this.istoricNou.primire || !this.istoricNou.procesare) {
      alert('Completează toate câmpurile!');
      return;
    }

    this.istoricNou.id = Date.now();
    this.istorice.push({ ...this.istoricNou });
    localStorage.setItem('istorice', JSON.stringify(this.istorice));
    this.resetForm();
  }

  resetForm() {
    this.istoricNou = {
      id: 0,
      programareId: 0,
      primire: '',
      procesare: '',
      durata: 10
    };
  }

  stergeIstoric(id: number) {
    this.istorice = this.istorice.filter(i => i.id !== id);
    localStorage.setItem('istorice', JSON.stringify(this.istorice));
  }
}
