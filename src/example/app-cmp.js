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
var co_tags_cmp_1 = require('../co-tags/co-tags-cmp');
var AppCmp = (function () {
    function AppCmp() {
        this.tags = ['biff', 'buff', 'boff'];
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'co-tags-example',
            directives: [co_tags_cmp_1.CoTagsCmp],
            template: "\n    <h3>co-tags</h3>\n    <co-tags [tags]=\"tags\"></co-tags>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map