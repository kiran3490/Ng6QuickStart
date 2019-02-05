import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHomeComponentComponent } from './widget-home-component.component';

describe('WidgetHomeComponentComponent', () => {
  let component: WidgetHomeComponentComponent;
  let fixture: ComponentFixture<WidgetHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
