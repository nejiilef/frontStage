import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArrondissementComponent } from './edit-arrondissement.component';

describe('EditArrondissementComponent', () => {
  let component: EditArrondissementComponent;
  let fixture: ComponentFixture<EditArrondissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditArrondissementComponent]
    });
    fixture = TestBed.createComponent(EditArrondissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
