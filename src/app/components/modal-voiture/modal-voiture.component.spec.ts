import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVoitureComponent } from './modal-voiture.component';

describe('ModalVoitureComponent', () => {
  let component: ModalVoitureComponent;
  let fixture: ComponentFixture<ModalVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
