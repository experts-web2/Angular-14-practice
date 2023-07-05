import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}
  
  sidabrOpenClose = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.sidabrOpenClose = window.innerWidth <= 768 ? false : true;
  }
}
