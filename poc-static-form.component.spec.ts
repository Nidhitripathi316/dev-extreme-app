import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocStaticFormComponent } from './poc-static-form.component';

describe('PocStaticFormComponent', () => {
  let component: PocStaticFormComponent;
  let fixture: ComponentFixture<PocStaticFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocStaticFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocStaticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
