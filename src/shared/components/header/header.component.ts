import {
  AfterContentInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  title = 'NIBRAS';
  @Output() toogleDrawer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle(){
    this.toogleDrawer.emit();
  }
}
