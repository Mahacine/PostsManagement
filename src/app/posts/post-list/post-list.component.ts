import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts : Post[] = []
  constructor(private postService: PostService,private router:Router) {}

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  goNewPost(){
      this.router.navigate(['/dashboard']);
  }

}
