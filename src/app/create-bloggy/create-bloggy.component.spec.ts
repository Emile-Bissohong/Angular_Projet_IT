import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloggyComponent } from './create-bloggy.component';

describe('CreateBloggyComponent', () => {
  let component: CreateBloggyComponent;
  let fixture: ComponentFixture<CreateBloggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBloggyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBloggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
