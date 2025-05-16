import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  programOre = [
    { zi: 'Luni - Vineri', ore: '08:00 - 17:00' },
    { zi: 'Sâmbătă', ore: 'Închis' },
    { zi: 'Duminică', ore: 'Închis' }
  ];

  locatiiService = [
    { locatie: 'București - Militari', adresa: 'Str. Apusului nr. 1', telefon: '0722 111 111' },
    { locatie: 'București - Berceni', adresa: 'Șos. Berceni nr. 55', telefon: '0733 222 222' },
    { locatie: 'București - Colentina', adresa: 'Bd. Colentina nr. 120', telefon: '0744 333 333' }
  ];
  scrollTop(event: Event): void {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

}

