import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IamPage } from './iam.page';

describe('IamPage', () => {
  let component: IamPage;
  let fixture: ComponentFixture<IamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
