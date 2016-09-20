import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
     <a routerLink="/likes" routerLinkActive="active">Likes</a>
   </nav>
   <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
   <voter 
      [voteCount]="post.voteCount"
      [myVote]="post.myVote"
      (vote)="onVote($event)">
   </voter>
   <hero-form></hero-form>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  tweet = {
    totalLikes: 10,
    iLike: false
  }

  post = {
    voteCount: 10,
    myVote: 0
  }

  onVote($event){
    console.log($event);
  }
}