import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggyListComponent } from './bloggy-list.component';

describe('BloggyListComponent', () => {
  let component: BloggyListComponent;
  let fixture: ComponentFixture<BloggyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
