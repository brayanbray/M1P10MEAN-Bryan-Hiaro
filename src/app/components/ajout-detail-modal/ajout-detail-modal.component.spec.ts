import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDetailModalComponent } from './ajout-detail-modal.component';

describe('AjoutDetailModalComponent', () => {
  let component: AjoutDetailModalComponent;
  let fixture: ComponentFixture<AjoutDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
