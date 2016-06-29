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
var ng2_vs_for_1 = require('./ng2-vs-for');
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var item_filter_1 = require('./item.filter');
var dropdown_1 = require('./dropdown');
var collapse_1 = require('./collapse');
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
        this.mode = 'Observable';
    }
    HeroListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.addHero = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.heroService.addHero(name)
            .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.getSize = function (item, index) {
        return 18;
    };
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            templateUrl: 'app/toh/hero-list.component.html',
            directives: [ng2_vs_for_1.VsFor, dropdown_1.DROPDOWN_DIRECTIVES, collapse_1.CollapseDirective],
            providers: [hero_service_1.HeroService],
            pipes: [item_filter_1.default]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map