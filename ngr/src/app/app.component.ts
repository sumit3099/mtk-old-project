import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';
import * as PostActions from './post.actions';

interface AppState {
  message: string;
  post: Post;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Observable<Post>;
  text: string;
  messageData: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.messageData = this.store.select('message');
    this.post = this.store.select('post');
    console.log(this.messageData);
    console.log(this.post);
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }
}
