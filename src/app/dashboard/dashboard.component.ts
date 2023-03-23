import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloggy } from '../models/bloggy-model';
import { BloggyService } from '../services/bloggy.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post! : Bloggy[]
  indexDelete!:number
  constructor(private route :Router, 
    private service : BloggyService,
     private builder :FormBuilder) { }
  formDelete! : FormGroup
  ngOnInit(): void {
    this.getAllBloggy()
    this.formDelete = this.builder.group({
      validation :["",Validators.required],
      idHide:["",Validators.required]
    })
  }
  onCreatePost(){
    this.route.navigateByUrl("/create")
  }
  
  
  getAllBloggy(){
    this.service.getPost().subscribe(res => this.post = res)
  }

  editBloggy(id:number){
    this.route.navigateByUrl(`/edit/${id}`)
  }

  OndeleteIndex(index:Bloggy){
   this.formDelete.controls["idHide"].setValue(index.id)
   
  }
  OnDelete(){
   // console.log(this.formDelete.value.idHide)
    if(this.formDelete.value.validation == "The World"){
     this.service.delete(this.formDelete.value.idHide).subscribe()
     this.notificationSuccess()

    }
    else{
      this.route.onSameUrlNavigation ="reload"
    }
    //console.log(this.formDelete.value.validation)
  }


  notificationSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post Supprime',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
