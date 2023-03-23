import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloggy } from '../models/bloggy-model';
import { BloggyService } from '../services/bloggy.services';

@Component({
  selector: 'app-bloggy-list',
  templateUrl: './bloggy-list.component.html',
  styleUrls: ['./bloggy-list.component.css']
})
export class BloggyListComponent implements OnInit {

  constructor(private service : BloggyService,
     private router :Router) { }
   post! : Bloggy[]
   getAllBloggy(){
    this.service.getPost().subscribe(res => this.post = res)
  }
  ngOnInit(): void {
    this.getAllBloggy()
  }
  detailBloggy(id : number){
  this.router.navigateByUrl(`/details/${id}`)
  }
 
}
