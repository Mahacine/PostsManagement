import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostService} from  './post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },

]


@NgModule({
 
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostDashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [PostService]
})
export class PostsModule { }
