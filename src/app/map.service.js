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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// import 'mapbox-gl';
var MapboxGl = require("mapbox-gl");
var MapService = (function () {
    function MapService(http) {
        this.http = http;
        this.getUrl = 'http://www.cartr.dev/'; // URL to web api
        this.geojsonPath = 'maps/geojson/';
        this.showPath = 'maps/show/';
        this.mapsPath = 'service/maps_info/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiKey = 'aJ4FW2DcNCYvItyHErGu3fhR8qd9xUMB';
        this.userKey = 'OVRTS2jZHUwAk3lE1qYCrmfMseNdp9Ic';
        MapboxGl.accessToken = 'pk.eyJ1IjoiZ3JhZmlrbGllc2NoZW4iLCJhIjoiTmhPalg0RSJ9.SsKEUr-0183Fncfy1V0aLA';
    }
    MapService.prototype.getMap = function (id) {
        var url = "" + this.getUrl + this.showPath + id + "/" + this.userKey;
        // return Promise.resolve({});
        return this.http.get(url)
            .toPromise()
            .then(function (response) { console.log(response.json()); return response.json().data; })
            .catch(this.handleError);
    };
    /**
    *
    */
    MapService.prototype.getMaps = function () {
        var url = "" + this.getUrl + this.mapsPath + this.apiKey;
        var maps = [];
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            for (var index in response.json().html.maps) {
                maps.push(response.json().html.maps[index]);
            }
            console.log('MANN EY', maps);
            return maps;
        })
            .catch(this.handleError);
    };
    MapService.prototype.getGeoJson = function (id) {
        var url = "" + this.getUrl + this.geojsonPath + id + "/" + this.userKey;
        // MapboxGl.accessToken = ('pk.eyJ1IjoiZ3JhZmlrbGllc2NoZW4iLCJhIjoiTmhPalg0RSJ9.SsKEUr-0183Fncfy1V0aLA');
        console.log('HUHU');
        // const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { console.log(response.json()); return response.json(); })
            .catch(this.handleError);
    };
    MapService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MapService;
}());
MapService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MapService);
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map