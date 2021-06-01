export class Post {
    id?: number
    author!: string
    authorId!: string
    content!: string
    image!: string
    published!: Date
    title!: string
    likes:number=0
    dislikes:number=0
  }
