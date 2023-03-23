import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bloggy } from '../models/bloggy-model';
import { User } from '../models/user-model';
import { BloggyService } from '../services/bloggy.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-bloggy',
  templateUrl: './edit-bloggy.component.html',
  styleUrls: ['./edit-bloggy.component.css']
})
export class EditBloggyComponent implements OnInit {
  getAuteur$!:Observable<User[]>
  constructor(private route :ActivatedRoute,
    private service :BloggyService,
    private form : FormBuilder) { }
    blog! : Bloggy
    formEdit!: FormGroup
    id!:number
  ngOnInit(): void {
    this.id = +this.route.snapshot.params["id"]
    this.formEdit = this.form.group({
      title : ["",Validators.required] ,
      author_id :["",Validators.required],
      image_url:["",Validators.required] ,
      resume:["",Validators.required],
      content:["",Validators.required] 
    })
    this.getValue()
    this.getAuteur$ = this.service.getAutorByUrl()
    /*
    this.formEdit.controls["title"].setValue(this.formEdit.value.title),
    this.formEdit.controls["author_id"].setValue(this.formEdit.value.author_id),
    this.formEdit.controls["image_url"].setValue(this.formEdit.value.image_url),
    this.formEdit.controls["resume"].setValue(this.formEdit.value.content)
    //this.formEdit.controls["content"].setValue(user1.date_ajout) 
    
    */
  }

  getValue(){
   this.id = +this.route.snapshot.params["id"]
    this.service.getBloggyById(this.id).subscribe(res =>{
    this.formEdit.controls["title"].setValue(res.title),
    this.formEdit.controls["image_url"].setValue(res.image_url),
    this.formEdit.controls["resume"].setValue(res.resume),
    this.formEdit.controls["author_id"].setValue(res.author_id),
    this.formEdit.controls["content"].setValue(res.content)
    })
      
  }

  Editbtn(){
    this.blog ={
      id :+this.route.snapshot.params["id"],
      ... this.formEdit.value,
      created_at:new Date

    }
    console.log(this.formEdit.value)
    this.id = +this.route.snapshot.params["id"]
    this.service.onUpdateForm(this.blog,this.id).subscribe(res =>console.log(res))
    this.notificationSuccess()
  }

  notificationSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post Modifie',
      showConfirmButton: false,
      timer: 1500
    })
  }
 

}
