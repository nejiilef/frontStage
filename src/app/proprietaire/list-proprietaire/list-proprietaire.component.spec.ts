import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProprietaireComponent } from './list-proprietaire.component';

describe('ListProprietaireComponent', () => {
  let component: ListProprietaireComponent;
  let fixture: ComponentFixture<ListProprietaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProprietaireComponent]
    });
    fixture = TestBed.createComponent(ListProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
