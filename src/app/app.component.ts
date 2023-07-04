import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {
  title = 'angular-14-practise';

  sidebarToggle: boolean = true;

  constructor() { }

  ngAfterContentInit() {
    this.adjustWindowSize()
  }

  adjustWindowSize() {
    this.sidebarToggle = window.innerWidth <= 768 ? false : true;
  }
}
