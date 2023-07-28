import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollaborationsPage } from './collaborations.page';

describe('CollaborationsPage', () => {
  let component: CollaborationsPage;
  let fixture: ComponentFixture<CollaborationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CollaborationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
