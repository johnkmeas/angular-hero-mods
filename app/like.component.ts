import { Component, Input } from '@angular/core';


@Component({
	selector: 'like',
	template: `
	<i 
		class="glyphicon glyphicon-heart"
		[class.highlighted]="iLike"
		(click)="onClick()">Like
	</i>
	<span>{{ totalLikes}}</span>
	`,
	styles: [`
		.glyphicon-heart {
			color: #ccc;
			cursor: pointer;
		}

		.highlighted {
			color: red;
		}
	`]
})

export class LikeComponent {
	@Input() totalLikes = 0;
	@Input() iLike = false;

	onClick() {
		this.iLike = !this.iLike;
		this.totalLikes += this.iLike ? 1 : -1;
	}
}