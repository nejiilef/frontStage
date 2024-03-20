import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRueComponent } from './list-rue.component';

describe('ListRueComponent', () => {
  let component: ListRueComponent;
  let fixture: ComponentFixture<ListRueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRueComponent]
    });
    fixture = TestBed.createComponent(ListRueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
