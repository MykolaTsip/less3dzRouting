import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/Comment';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments-of-post',
  templateUrl: './all-comments-of-post.component.html',
  styleUrls: ['./all-comments-of-post.component.css']
})
export class AllCommentsOfPostComponent implements OnInit {

  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    activatedRoute.params
      .subscribe(data => commentService.getCommentsByPostId(data.id)
        .subscribe(comments => this.comments = comments));
  }

  ngOnInit(): void {
  }

}
