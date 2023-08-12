import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaredirefarePage } from './maredirefare.page';

describe('MaredirefarePage', () => {
  let component: MaredirefarePage;
  let fixture: ComponentFixture<MaredirefarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaredirefarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
