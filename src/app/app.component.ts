import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-auto';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const header = document.querySelector('header');
    if (header) {
      if (scrollTop > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}
