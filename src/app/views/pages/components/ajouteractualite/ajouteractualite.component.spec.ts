import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteractualiteComponent } from './ajouteractualite.component';

describe('AjouteractualiteComponent', () => {
  let component: AjouteractualiteComponent;
  let fixture: ComponentFixture<AjouteractualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteractualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteractualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
