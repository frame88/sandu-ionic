import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuffettiPage } from './buffetti.page';

describe('BuffettiPage', () => {
  let component: BuffettiPage;
  let fixture: ComponentFixture<BuffettiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuffettiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
