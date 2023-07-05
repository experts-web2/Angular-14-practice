import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, AfterContentInit {
  @Output() onWindowSizeAdjust = new EventEmitter();

  title = 'NIBRAS';

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.adjustWindowSize();
  }

  adjustWindowSize() {
    const sidabrOpenClose = window.innerWidth <= 768 ? false : true;
    this.onWindowSizeAdjust.emit(sidabrOpenClose);
  }
}
