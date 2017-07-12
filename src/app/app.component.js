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
var img_service_1 = require("./img.service");
var AppComponent = (function () {
    function AppComponent(mapService, imgService, router) {
        this.mapService = mapService;
        this.imgService = imgService;
        this.router = router;
        this.name = 'Cartr';
        this.img_collection = [];
        this.collLength = 9;
        this.loadProgress = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgService
            .getImgList()
            .subscribe(function (res) {
            // this.handleFeaturedImg(res);
            _this.handleImgCollection(res);
        });
        this.mapService.getMaps()
            .then(function (data) {
            console.log('MAPS INFO', data);
            return _this.maps = data;
        });
        // //////////////////
    };
    AppComponent.prototype.handleFeaturedImg = function (res) {
        var randomImg = Math.floor(Math.random() * 1000) + 1;
        this.single_img = res[randomImg];
        this.single_img['loading'] = true;
        this.imgPreload(this.single_img);
    };
    AppComponent.prototype.handleImgCollection = function (res) {
        for (var i = 0; i < this.collLength; i++) {
            var randomImg = Math.floor(Math.random() * 1000) + 1;
            this.img_collection.push(res[randomImg]);
            this.img_collection[i]['loading'] = true;
            this.collectionImgPreload(this.img_collection[i], i);
        }
    };
    AppComponent.prototype.collectionImgPreload = function (new_image, i) {
        var _this = this;
        var c = new Image();
        c.src = new_image['post_url'] + '/download';
        c['index'] = i;
        c.onload = function (ci) {
            _this.loadProgress = _this.loadProgress + (100 / _this.collLength);
            console.log(_this.loadProgress);
            var loadedI = ci['target']['index'];
            _this.img_collection[loadedI]['loading'] = false;
        };
    };
    AppComponent.prototype.imgPreload = function (new_image) {
        var _this = this;
        var c = new Image();
        c.src = new_image['post_url'] + '/download';
        c.onload = function () {
            _this.single_img['loading'] = false;
        };
    };
    ;
    // //////////////////
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
        providers: [img_service_1.ImgService],
    }),
    __metadata("design:paramtypes", [map_service_1.MapService,
        img_service_1.ImgService,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map