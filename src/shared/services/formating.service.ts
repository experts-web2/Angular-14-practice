import { Injectable } from '@angular/core';

@Injectable()
export class FormatingService {
  constructor() {}

  titleFormat(title: string | undefined) {
    return title?.length ? title.substring(0, 20) : '';
  }
}
