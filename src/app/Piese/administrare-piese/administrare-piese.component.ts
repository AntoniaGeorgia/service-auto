import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Piesa {
  name: string;
  code: string;
  price: number;
}

@Component({
  selector: 'app-administrare-piese',
  templateUrl: './administrare-piese.component.html',
  styleUrls: ['./administrare-piese.component.scss']
})
export class AdministrarePieseComponent implements OnInit {
  piese: Piesa[] = [];
  editingIndex: number | null = null;
  editingPiesa: Piesa = { name: '', code: '', price: 0 };
  editingMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const salvate = localStorage.getItem('piese');
    if (salvate) {
      this.piese = JSON.parse(salvate);
    } else {
      this.piese = [
        { name: 'Filtru ulei', code: 'OL1234', price: 35 },
        { name: 'Plăcuțe frână', code: 'BR5678', price: 120 },
        { name: 'Bec far H7', code: 'HL7890', price: 25 }
      ];
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('piese', JSON.stringify(this.piese));
  }

  startAdd() {
    this.editingIndex = null;
    this.editingPiesa = { name: '', code: '', price: 0 };
    this.editingMode = true;
  }

  editPiesa(index: number) {
    this.editingIndex = index;
    this.editingPiesa = { ...this.piese[index] };
    this.editingMode = true;
  }

  savePiesa() {
    if (this.editingPiesa.price < 0) {
      alert('Prețul nu poate fi negativ.');
      return;
    }

    if (this.editingIndex !== null) {
      this.piese[this.editingIndex] = { ...this.editingPiesa };
    } else {
      this.piese.push({ ...this.editingPiesa });
    }

    this.saveToLocalStorage();
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingPiesa = { name: '', code: '', price: 0 };
    this.editingMode = false;
  }

  sterge(index: number) {
    this.piese.splice(index, 1);
    this.saveToLocalStorage();
  }

  comandaPiesa(piesa: Piesa) {
    this.router.navigate(['/comanda', piesa.code]);
  }
}
