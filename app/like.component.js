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
var LikeComponent = (function () {
    function LikeComponent() {
        this.totalLikes = 0;
        this.iLike = false;
    }
    LikeComponent.prototype.onClick = function () {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "totalLikes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "iLike", void 0);
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like',
            template: "\n\t<i \n\t\tclass=\"glyphicon glyphicon-heart\"\n\t\t[class.highlighted]=\"iLike\"\n\t\t(click)=\"onClick()\">Like\n\t</i>\n\t<span>{{ totalLikes}}</span>\n\t",
            styles: ["\n\t\t.glyphicon-heart {\n\t\t\tcolor: #ccc;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.highlighted {\n\t\t\tcolor: red;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map