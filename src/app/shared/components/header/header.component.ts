import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  title = 'NIBRAS iNNOVATEQ';

  @Output() toogleDrawer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Toogle Drawer to hide or show side menu
   */
  toggle() {
    this.toogleDrawer.emit();
  }
}
