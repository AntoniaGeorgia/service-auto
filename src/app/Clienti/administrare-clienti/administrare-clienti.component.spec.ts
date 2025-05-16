import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrareClientiComponent } from './administrare-clienti.component';

describe('AdministrareClientiComponent', () => {
  let component: AdministrareClientiComponent;
  let fixture: ComponentFixture<AdministrareClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrareClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrareClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
