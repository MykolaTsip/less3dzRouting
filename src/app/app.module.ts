import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {RouterModule} from '@angular/router';
import { AllPostsOfUserComponent } from './components/all-posts-of-user/all-posts-of-user.component';
import { AllCommentsOfPostComponent } from './components/all-comments-of-post/all-comments-of-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    AllPostsOfUserComponent,
    AllCommentsOfPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent},
      {path: 'users/:id/posts', component: AllPostsOfUserComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: 'posts/:id/comments', component: AllCommentsOfPostComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users/:id/posts/:id/comments', component: AllCommentsOfPostComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
