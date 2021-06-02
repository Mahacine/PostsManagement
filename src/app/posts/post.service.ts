import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] =[];
  id:number=0;

  constructor() { 
    this.posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.id=parseInt(localStorage.getItem('id') || '0')
    console.log(this.id)
    /*let postNumber=parseInt(localStorage.getItem('id')!)
    console.log(postNumber)
    if(postNumber==null){
      localStorage.setItem("id",JSON.stringify(this.id));
    }
    else{
      this.id=postNumber;
    }*/
  }

  getPosts() :Post[]{
    return JSON.parse(localStorage.getItem('posts') || '[]');
  }

  getId():number{
    return JSON.parse(localStorage.getItem('id') || '0')
  }

  create(post:Post) {
    console.log(localStorage);
    let postsArray = this.getPosts();
    this.id=this.id+1;
    post.id=this.id;
    post.likes=0;
    post.dislikes=0;
    post.comments=[];
    postsArray.push(post);
    localStorage.setItem('id',JSON.stringify(this.id))
    localStorage.setItem('posts',JSON.stringify(postsArray));
   }

  getPost(postNumber:number) {
    return this.getPosts().find(post => post.id == postNumber) ;
  }

  delete(id:number) {
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        this.posts.splice(index, 1);
      }
    });
    localStorage.setItem('posts',JSON.stringify(this.posts));        
  }

  updatePost (id:number,content:string){

    let i=-1;
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        i=index;
      }
    });
    console.log(id);
    this.posts[i].content = content;
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  updateLikes(id:number){
    let i=-1;
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        i=index;
      }
    });
    this.posts[i].likes=this.posts[i].likes+1;
    console.log(this.posts[i].likes);
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  updateDislikes(id:number){
    let i=-1
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        i=index;
      }
    });
    this.posts[i].dislikes=this.posts[i].dislikes+1;
    console.log(this.posts[i].dislikes);
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  addComment(id:number,comment:string){
    let i=-1
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        i=index;
      }
    });
    console.log(this.posts[i])
    this.posts[i].comments.push(comment);
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

}
