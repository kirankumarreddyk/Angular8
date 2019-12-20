import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XldownloadComponent } from './xldownload.component';

describe('XldownloadComponent', () => {
  let component: XldownloadComponent;
  let fixture: ComponentFixture<XldownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XldownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XldownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
