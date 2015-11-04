var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var CoTagsCmp = (function () {
    function CoTagsCmp() {
    }
    CoTagsCmp.prototype.onInit = function () {
        console.log(this.tags);
    };
    CoTagsCmp.prototype.typing = function ($event) {
        if ($event.keyCode === 13) {
            this.addTag($event.target.value);
            $event.target.value = '';
        }
    };
    CoTagsCmp.prototype.addTag = function (newTag) {
        var exists = this.tags.some(function (tag) {
            return tag === newTag;
        });
        if (!exists) {
            this.tags.push(newTag);
        }
        else {
            console.log('already exists');
        }
    };
    CoTagsCmp.prototype.removeTag = function (tagToRemove) {
        this.tags.splice(this.tags.indexOf(tagToRemove), 1);
    };
    CoTagsCmp = __decorate([
        angular2_1.Component({
            selector: 'co-tags',
            template: "\n    <input class=\"form-control\" (keyup)=\"typing($event)\" style=\"width: 150px;\">\n    <span class=\"label label-info\" style=\"margin-right: 5px;\" *ng-for=\"#tag of tags\">\n      <span (click)=\"removeTag(tag)\" style=\"cursor: pointer;\">{{tag}}</span>\n    </span>\n  ",
            inputs: ['tags'],
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], CoTagsCmp);
    return CoTagsCmp;
})();
exports.CoTagsCmp = CoTagsCmp;
//# sourceMappingURL=co-tags-cmp.js.map