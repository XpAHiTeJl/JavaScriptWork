import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullitemComponent } from './fullitem.component';

describe('FullitemComponent', () => {
  let component: FullitemComponent;
  let fixture: ComponentFixture<FullitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
