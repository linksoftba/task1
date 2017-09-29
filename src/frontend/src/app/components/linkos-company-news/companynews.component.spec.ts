import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanynewsComponent } from './companynews.component';

describe('CompanynewsComponent', () => {
  let component: CompanynewsComponent;
  let fixture: ComponentFixture<CompanynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
