import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  author?: string
  authorId?: string
  content?: string
  image?: string
  title?: string
  likes?:number
  dislikes?:number

  saving = 'Create Post'

  constructor(private postService: PostService) {}

  ngOnInit() {}

  createPost() {
    const postData = {
      author: this.author!,
      authorId: this.authorId!,
      content: this.content!,
      image: this.image || null!,
      published: new Date(),
      title: this.title!,
      likes: this.likes!,
      dislikes: this.dislikes!
    }
    this.postService.create(postData)
    this.author=''
    this.authorId=''
    this.title = ''
    this.content = ''
    this.image = ''
    this.likes=0
    this.dislikes=0

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
  }

  uploadImage(event:any) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } 
    else {
      /*const task = this.storage.upload(path, file)
      this.downloadURL = task.downloadURL()
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      this.downloadURL.subscribe(url => (this.image = url))*/
      const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result as string;
   
      };
    }
  }
}

}
