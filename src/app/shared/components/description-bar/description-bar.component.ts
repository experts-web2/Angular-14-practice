import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-description-bar',
  templateUrl: './description-bar.component.html',
  styleUrls: ['./description-bar.component.sass'],
})
export class DescriptionBarComponent implements OnInit {
  defaultView: string = APP_CONSTANTS.CARD;
  appConstants = APP_CONSTANTS;

  @Input() heading: string = '';
  @Input() description?: string = '';

  @Output() onModeChange = new EventEmitter();

  ngOnInit(): void {}

  /**
   * Change View Mode
   * @param mode
   */
  changeView(mode: string) {
    this.defaultView = mode;
    this.onModeChange.emit(mode);
  }
}
