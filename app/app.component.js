"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.tweet = {
            totalLikes: 10,
            iLike: false
        };
        this.post = {
            voteCount: 10,
            myVote: 0
        };
    }
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <h1>{{title}}</h1>\n   <nav>\n     <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n     <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n     <a routerLink=\"/likes\" routerLinkActive=\"active\">Likes</a>\n   </nav>\n   <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n   <voter \n      [voteCount]=\"post.voteCount\"\n      [myVote]=\"post.myVote\"\n      (vote)=\"onVote($event)\">\n   </voter>\n   <hero-form></hero-form>\n   <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map