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
var img_service_1 = require("./img.service");
var GalleryComponent = (function () {
    function GalleryComponent(imgService, router) {
        this.imgService = imgService;
        this.router = router;
        this.name = 'Cartr';
        this.img_collection = [];
        this.collLength = 9;
        this.loadProgress = 0;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgService
            .getImgList()
            .subscribe(function (res) {
            // this.handleFeaturedImg(res);
            _this.handleImgCollection(res);
        });
        // //////////////////
    };
    GalleryComponent.prototype.handleFeaturedImg = function (res) {
        var randomImg = Math.floor(Math.random() * 1000) + 1;
        this.single_img = res[randomImg];
        this.single_img['loading'] = true;
        this.imgPreload(this.single_img);
    };
    GalleryComponent.prototype.handleImgCollection = function (res) {
        for (var i = 0; i < this.collLength; i++) {
            var randomImg = Math.floor(Math.random() * 1000) + 1;
            this.img_collection.push(res[randomImg]);
            this.img_collection[i]['loading'] = true;
            this.collectionImgPreload(this.img_collection[i], i);
        }
    };
    GalleryComponent.prototype.collectionImgPreload = function (new_image, i) {
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
    GalleryComponent.prototype.imgPreload = function (new_image) {
        var _this = this;
        var c = new Image();
        c.src = new_image['post_url'] + '/download';
        c.onload = function () {
            _this.single_img['loading'] = false;
        };
    };
    ;
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    core_1.Component({
        selector: 'gallery',
        templateUrl: './gallery.component.html',
        styleUrls: ['./gallery.component.css'],
        providers: [img_service_1.ImgService],
    }),
    __metadata("design:paramtypes", [img_service_1.ImgService,
        router_1.Router])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map