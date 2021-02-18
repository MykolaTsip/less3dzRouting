import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts-of-user',
  templateUrl: './all-posts-of-user.component.html',
  styleUrls: ['./all-posts-of-user.component.css']
})
export class AllPostsOfUserComponent implements OnInit {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    activatedRoute.params
      .subscribe(data => postService.getPostsByUserId(data.id)
        .subscribe(posts => this.posts = posts));
  }

  ngOnInit(): void {
  }

}
