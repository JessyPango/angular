import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourLivreComponent } from './retour-livre.component';

describe('RetourLivreComponent', () => {
  let component: RetourLivreComponent;
  let fixture: ComponentFixture<RetourLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
