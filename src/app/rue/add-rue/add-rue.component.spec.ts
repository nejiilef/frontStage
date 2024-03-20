import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRueComponent } from './add-rue.component';

describe('AddRueComponent', () => {
  let component: AddRueComponent;
  let fixture: ComponentFixture<AddRueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRueComponent]
    });
    fixture = TestBed.createComponent(AddRueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
