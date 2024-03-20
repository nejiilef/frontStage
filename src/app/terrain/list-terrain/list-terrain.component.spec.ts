import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerrainComponent } from './list-terrain.component';

describe('ListTerrainComponent', () => {
  let component: ListTerrainComponent;
  let fixture: ComponentFixture<ListTerrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTerrainComponent]
    });
    fixture = TestBed.createComponent(ListTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
