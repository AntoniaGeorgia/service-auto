import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarePieseComponent } from './administrare-piese.component';

describe('AdministrarePieseComponent', () => {
  let component: AdministrarePieseComponent;
  let fixture: ComponentFixture<AdministrarePieseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarePieseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarePieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
