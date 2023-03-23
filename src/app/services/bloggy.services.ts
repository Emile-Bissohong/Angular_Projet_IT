import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { map, mergeMap, observable, Observable, switchMap, tap } from "rxjs";
import { Bloggy } from "../models/bloggy-model";
import { User } from "../models/user-model";
@Injectable({
providedIn:"root"
})

export class BloggyService{
   
 constructor(private http :HttpClient){}
 
 getAutorByUrl():Observable<User[]>{

    return this.http.get<User[]>("http://101905.bloggy.ecole-it.devigne.space/authors/")
  
 }
 onUpdateForm(user:Bloggy,id:number):Observable<Bloggy>{
  return this.http.put<Bloggy>(`http://101905.bloggy.ecole-it.devigne.space/posts/${id}`,user)
}

 getAutorByid(id:number):Observable<User>{

  return this.http.get<User>(`http://101905.bloggy.ecole-it.devigne.space/authors/${id}`)

}
 getPost():Observable<Bloggy[]>{
   return this.http.get<Bloggy[]>("http://101905.bloggy.ecole-it.devigne.space/posts/")
 }
 getBloggyById(numero : number):Observable<Bloggy>{
  return this.http.get<Bloggy>(`http://101905.bloggy.ecole-it.devigne.space/posts/${numero}`)  
}

 //addPost():Observable<Bloggy>{
  // return this.http.post<Bloggy>("http://101905.bloggy.ecole-it.devigne.space/posts/")
 //}
 /*
  getDataBaseLenght(){
    
  
  this.getAutorByUrl().pipe(switchMap(result=> result.length)).subscribe()
  
   return this.taille
  }
 */

addPost(form:{title:string,resume:string,content:string,author_id:number,image_url:string}):Observable<Bloggy>{

return this.getPost().pipe(
  map(result => [...result].sort((a:Bloggy,b:Bloggy) => a.id - b.id)),
  map(resultat => resultat[resultat.length -1]),
  map(resultat2 => ({
    id: resultat2.id +1,
    ...form,
    created_at:new Date
  })),
  switchMap(final => this.http.post<Bloggy>("http://101905.bloggy.ecole-it.devigne.space/posts/",final))
)

//return this.http.post<Bloggy>("http://101905.bloggy.ecole-it.devigne.space/posts/",bloggy)


 }

 delete(id:number):Observable<Bloggy>{
  return this.http.delete<Bloggy>(`http://101905.bloggy.ecole-it.devigne.space/posts/${id}`)
 }
}