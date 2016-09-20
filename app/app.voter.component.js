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
var VoterComponent = (function () {
    function VoterComponent() {
        this.voteCount = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoterComponent.prototype.upVote = function () {
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    };
    VoterComponent.prototype.downVote = function () {
        if (this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "voteCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "myVote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VoterComponent.prototype, "vote", void 0);
    VoterComponent = __decorate([
        core_1.Component({
            selector: 'voter',
            template: "\t\n\t<div class=\"voter\">\n\t\t<i \n\t\t\tclass=\"glyphicon glyphicon-menu-up vote-button\"\n\t\t\t[class.highlighted]=\"myVote == 1\"\n\t\t\t(click)=\"upVote()\">\n\t\t</i>\n\t\t<span class=\"vote-count\">{{ voteCount + myVote}}</span>\n\t\t<i \n\t\t\tclass=\"glyphicon glyphicon-menu-down vote-button\"\n\t\t\t[class.highlighted]=\"myVote == -1\"\n\t\t\t(click)=\"downVote()\">\n\t\t</i>\n\t</div>",
            styles: ["\n\t\t.voter {\n\t\t\twidth: 20px;\n\t\t\ttext-align: center;\n\t\t\tcolor: #999;\n\t\t}\n\t\t.vote-count {\n\t\t\tfont-size: 1.2em;\n\t\t}\n\t\t.vote-button {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.highlighted {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: orange;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], VoterComponent);
    return VoterComponent;
}());
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=app.voter.component.js.map