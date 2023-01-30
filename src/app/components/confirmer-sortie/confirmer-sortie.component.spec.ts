import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerSortieComponent } from './confirmer-sortie.component';

describe('ConfirmerSortieComponent', () => {
  let component: ConfirmerSortieComponent;
  let fixture: ComponentFixture<ConfirmerSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmerSortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmerSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
