import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocArrayComponent } from './poc-array.component';

describe('PocArrayComponent', () => {
  let component: PocArrayComponent;
  let fixture: ComponentFixture<PocArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
