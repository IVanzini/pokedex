import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloModifyComponent } from './articolo-modify.component';

describe('ArticoloModifyComponent', () => {
  let component: ArticoloModifyComponent;
  let fixture: ComponentFixture<ArticoloModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticoloModifyComponent]
    });
    fixture = TestBed.createComponent(ArticoloModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
