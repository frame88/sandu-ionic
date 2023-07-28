import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsPage } from './animations.page';

describe('AnimationsPage', () => {
  let component: AnimationsPage;
  let fixture: ComponentFixture<AnimationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
