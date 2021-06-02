import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post?: Post
  editing: boolean = false


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPost()
  }

  getPost(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!) || 5;
    this.post=this.postService.getPost(id);
  }
    

  updatePost() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.updatePost(id,this.post?.content || '')
    this.editing = false
  }

  delete() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.delete(id)
    this.router.navigate(['/blog'])
  }

  updateLikes(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.updateLikes(id);
    this.post=this.postService.getPost(id)
  }

  updateDislikes(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.updateDislikes(id);
    this.post=this.postService.getPost(id)
  }

  addComment(comment:string){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.addComment(id,comment);
    this.post=this.postService.getPost(id)
  }

  backToList(){
    this.router.navigate(['/blog'])
  }

}
