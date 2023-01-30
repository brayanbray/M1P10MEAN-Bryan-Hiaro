import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/components/reparation/reparation.component.spec.ts
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
========
import { DeposerComponent } from './deposer.component';

describe('DeposerComponent', () => {
  let component: DeposerComponent;
  let fixture: ComponentFixture<DeposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeposerComponent);
>>>>>>>> BR:src/app/components/deposer/deposer.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
