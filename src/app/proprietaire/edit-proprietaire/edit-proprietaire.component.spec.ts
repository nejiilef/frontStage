import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProprietaireComponent } from './edit-proprietaire.component';

describe('EditProprietaireComponent', () => {
  let component: EditProprietaireComponent;
  let fixture: ComponentFixture<EditProprietaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProprietaireComponent]
    });
    fixture = TestBed.createComponent(EditProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
