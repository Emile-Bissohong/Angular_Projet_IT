import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BloggyListComponent } from './bloggy-list/bloggy-list.component';
import { CreateBloggyComponent } from './create-bloggy/create-bloggy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailBloggyComponent } from './detail-bloggy/detail-bloggy.component';
import { EditBloggyComponent } from './edit-bloggy/edit-bloggy.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BloggyListComponent,
    CreateBloggyComponent,
    DashboardComponent,
    DetailBloggyComponent,
    EditBloggyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
