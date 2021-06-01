import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] =[];
  id:number=1;

  constructor() { 
    this.posts = JSON.parse(localStorage.getItem('posts') || '[]');
    let postNumber=parseInt(localStorage.getItem("id")!) || 0
    if(postNumber==null){
      localStorage.setItem("id",JSON.stringify(this.id));
    }
    else{
      this.id=postNumber;
    }
  }

  getPosts() :Post[]{
    return JSON.parse(localStorage.getItem('posts') || '[]');
  }

  create(post:Post) {
    console.log(localStorage);
    let postsArray = this.getPosts();
    this.id=this.id+1;
    post.id=this.id;
    postsArray.push(post);
    localStorage.setItem('posts',JSON.stringify(postsArray));
   }

  getPost(postNumber:number) {
    return this.getPosts().find(post => post.id == postNumber) ;
  }

  delete(id:number) {
    let post=this.getPost(id)
    const index: number = this.posts.indexOf(post!);
    if (index !== -1) {
        this.posts.splice(index, 1);
    }
    localStorage.setItem('posts',JSON.stringify(this.posts));        
  }

  updatePost (post:Post){

    this.posts.forEach((element, index) => {
      if(element.id == post.id ) {
        this.posts[index] = post;
      }
    });
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  updateLikes(id:number){
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        this.posts[index].likes=this.posts[index].likes+1;
      }
    });
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  updateDislikes(id:number){
    this.posts.forEach((element, index) => {
      if(element.id == id ) {
        this.posts[index].dislikes=this.posts[index].dislikes+1;
      }
    });
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }


}
