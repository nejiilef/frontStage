import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArrondissementComponent } from './add-arrondissement.component';

describe('AddArrondissementComponent', () => {
  let component: AddArrondissementComponent;
  let fixture: ComponentFixture<AddArrondissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArrondissementComponent]
    });
    fixture = TestBed.createComponent(AddArrondissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
