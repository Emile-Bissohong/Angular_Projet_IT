import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBloggyComponent } from './detail-bloggy.component';

describe('DetailBloggyComponent', () => {
  let component: DetailBloggyComponent;
  let fixture: ComponentFixture<DetailBloggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBloggyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBloggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
