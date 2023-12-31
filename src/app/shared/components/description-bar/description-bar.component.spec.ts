import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBarComponent } from './description-bar.component';

describe('DescriptionBarComponent', () => {
  let component: DescriptionBarComponent;
  let fixture: ComponentFixture<DescriptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
