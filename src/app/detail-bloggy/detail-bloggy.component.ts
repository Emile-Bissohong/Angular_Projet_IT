import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable ,map} from 'rxjs';
import { Bloggy } from '../models/bloggy-model';
import { User } from '../models/user-model';
import { BloggyService } from '../services/bloggy.services';


@Component({
  selector: 'app-detail-bloggy',
  templateUrl: './detail-bloggy.component.html',
  styleUrls: ['./detail-bloggy.component.css']
})
export class DetailBloggyComponent implements OnInit {
 routeId! :number
 bloggy!:Bloggy
 user! :Observable<User>

  constructor(private route :ActivatedRoute,
    private service : BloggyService) { }

  ngOnInit(): void {
this.routeId = +this.route.snapshot.params["id"]
this.service.getBloggyById(this.routeId).subscribe(res => {this.bloggy=res
  //this.service.getAutorByid(this.bloggy.author_id).subscribe(final =>this.user=final.full_name)
 this.user = this.service.getAutorByid(this.bloggy.author_id).pipe(
  map(rest =>rest)
 )
 console.log(this.user)
})
 
  }
 
 

}
