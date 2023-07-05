import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  sidabrOpenClose = true;

  constructor(private cdr: ChangeDetectorRef) {}

  /**
   * Adjust window Size on changing screen
   * @param isSideBarOpen
   */
  onWindowSizeAdjust(isSideBarOpen: boolean) {
    this.sidabrOpenClose = isSideBarOpen;
    this.cdr.detectChanges();
  }
}
