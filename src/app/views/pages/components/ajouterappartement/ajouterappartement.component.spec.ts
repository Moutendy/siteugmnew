import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterappartementComponent } from './ajouterappartement.component';

describe('AjouterappartementComponent', () => {
  let component: AjouterappartementComponent;
  let fixture: ComponentFixture<AjouterappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterappartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
