import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibriPage } from './libri.page';

describe('LibriPage', () => {
  let component: LibriPage;
  let fixture: ComponentFixture<LibriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
