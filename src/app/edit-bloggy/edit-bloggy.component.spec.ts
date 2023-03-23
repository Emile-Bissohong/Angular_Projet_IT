import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloggyComponent } from './edit-bloggy.component';

describe('EditBloggyComponent', () => {
  let component: EditBloggyComponent;
  let fixture: ComponentFixture<EditBloggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloggyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBloggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
