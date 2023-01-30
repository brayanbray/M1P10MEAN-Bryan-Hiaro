import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/components/statistique/statistique.component.spec.ts
import { StatistiqueComponent } from './statistique.component';

describe('StatistiqueComponent', () => {
  let component: StatistiqueComponent;
  let fixture: ComponentFixture<StatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueComponent);
========
import { ReparationComponent } from './reparation.component';

describe('ReparationComponent', () => {
  let component: ReparationComponent;
  let fixture: ComponentFixture<ReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationComponent);
>>>>>>>> BR:src/app/components/reparation/reparation.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
