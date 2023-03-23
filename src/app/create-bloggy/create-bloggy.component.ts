import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import { BloggyService } from '../services/bloggy.services';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-bloggy',
  templateUrl: './create-bloggy.component.html',
  styleUrls: ['./create-bloggy.component.css']
})
export class CreateBloggyComponent implements OnInit {

  constructor(private builder:FormBuilder,
              private service :BloggyService) { }
  bloggyForm!:FormGroup
  getAuteur$!:Observable<User[]>
  
  ngOnInit(): void {
    
    this.bloggyForm = this.builder.group({
      title : ["",Validators.required] ,
      author_id :["",Validators.required],
      image_url:["",Validators.required] ,
      resume:["",Validators.required],
      content:["",Validators.required] 
    })

    this.getAuteur$ = this.service.getAutorByUrl()
  }
  onSubmitForm(){
    //console.log(this.bloggyForm.value)
    //this.service.PostBloggy(this.bloggyForm.value).subscribe(res => console.log(res))
   this.service.addPost(this.bloggyForm.value).subscribe(res=>console.log(res))
    // this.service.delete(148).subscribe()
    this.bloggyForm.reset()
    this.notificationSuccess()
  }

  notificationSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post Cree',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
