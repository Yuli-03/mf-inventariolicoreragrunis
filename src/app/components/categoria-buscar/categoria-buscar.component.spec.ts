import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBuscarComponent } from './categoria-buscar.component';

describe('CategoriaBuscarComponent', () => {
  let component: CategoriaBuscarComponent;
  let fixture: ComponentFixture<CategoriaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
