import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZoneComponent } from './list-zone.component';

describe('ListZoneComponent', () => {
  let component: ListZoneComponent;
  let fixture: ComponentFixture<ListZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListZoneComponent]
    });
    fixture = TestBed.createComponent(ListZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
