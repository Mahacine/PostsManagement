import { Component, OnInit } from '@angular/core';
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
    const id = parseInt(this.route.snapshot.paramMap.get('id')!) || 5
    console.log(id)
    this.post=this.postService.getPost(id)
    console.log('Post found'+id);
    console.log(this.postService.getPost(id));
  }
    
  /*getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => (this.post = post))
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }*/

  delete() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.postService.delete(id)
    this.router.navigate(['/blog'])
  }

  updateLikes(id:number){
    this.postService.updateLikes(id);
  }

  updateDislikes(id:number){
    this.postService.updateDislikes(id);
  }

}
