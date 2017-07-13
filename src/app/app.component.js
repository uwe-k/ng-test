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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var map_service_1 = require("./map.service");
var AppComponent = (function () {
    function AppComponent(mapService, router) {
        this.mapService = mapService;
        this.router = router;
        this.name = 'Cartr';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getMaps()
            .then(function (data) {
            console.log('MAPS INFO', data);
            return _this.maps = data;
        });
        // //////////////////
    };
    AppComponent.prototype.onSelect = function (map) {
        this.selectedMap = map;
        console.log(map, this.selectedMap.entity_id);
        this.router.navigate(['/map', this.selectedMap.entity_id]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'cartr-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [map_service_1.MapService],
    }),
    __metadata("design:paramtypes", [map_service_1.MapService,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map