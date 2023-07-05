import { AfterContentInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterContentInit {
  sidabrOpenClose = true;

  constructor() {}

  ngAfterContentInit() {
    this.adjustWindowSize();
  }

  /**
   * Adjust WIndow Size
   */
  adjustWindowSize() {    
    this.sidabrOpenClose = window.innerWidth <= 768 ? false : true;
  }
}
