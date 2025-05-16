import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaPiesaComponent } from './comanda-piesa.component';

describe('ComandaPiesaComponent', () => {
  let component: ComandaPiesaComponent;
  let fixture: ComponentFixture<ComandaPiesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaPiesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaPiesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
