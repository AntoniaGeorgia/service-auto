import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comanda-piesa',
  templateUrl: './comanda-piesa.component.html',
  styleUrls: ['./comanda-piesa.component.scss']
})
export class ComandaPiesaComponent implements OnInit {
  codPiesa: string = '';
  nume: string = '';
  email: string = '';
  telefon: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.codPiesa = this.route.snapshot.paramMap.get('code') || '';
  }

  trimiteComanda() {
    if (!this.nume || !this.email || !this.telefon) {
      alert('Completează toate câmpurile!');
      return;
    }

    alert(`Comandă trimisă pentru piesa ${this.codPiesa}\nNume: ${this.nume}\nEmail: ${this.email}\nTelefon: ${this.telefon}`);
    // aici poți adăuga logica pentru trimitere către server, dacă ai un back-end
  }
}
