import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRueComponent } from './edit-rue.component';

describe('EditRueComponent', () => {
  let component: EditRueComponent;
  let fixture: ComponentFixture<EditRueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRueComponent]
    });
    fixture = TestBed.createComponent(EditRueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
