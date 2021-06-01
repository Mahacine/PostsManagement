import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './posts/post-detail/post-detail.component'
import { PostListComponent } from './posts/post-list/post-list.component'

/*const routes: Routes = [
  {path: 'blog', component: PostListComponent},
  { path: '', redirectTo: '/blog', pathMatch: 'full'},
  { path: '', loadChildren: './posts/posts.module#PostsModule' }
]*/

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
