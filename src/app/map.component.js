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
var router_2 = require("@angular/router");
var map_service_1 = require("./map.service");
var mapbox_gl_1 = require("mapbox-gl");
// from 'mapbox-gl';
var MapComponent = (function () {
    function MapComponent(mapService, router, route) {
        var _this = this;
        this.mapService = mapService;
        this.router = router;
        this.route = route;
        this.name = 'Cartr';
        // router.params.subscribe(val => myInit());
        console.log('ROUTE', route.params.subscribe);
        route.params.subscribe(function (params) {
            _this.mapId = +params['id'];
            console.log(params);
            _this.initMap();
            return params;
        });
    }
    MapComponent.prototype.ngOnChanges = function () {
        console.log('CHANGESSSSSSS');
    };
    MapComponent.prototype.ngOnDestroy = function () {
        console.log('DESTROY');
        // this.subParams.unsubscribe();
    };
    MapComponent.prototype.ngOnInit = function () {
        console.log('HELLLLLLLOOOOOOOOOO');
    };
    MapComponent.prototype.initMap = function () {
        var _this = this;
        this.mapId = this.mapId || 63;
        this.mapService.getMap(this.mapId)
            .then(function (data) {
            console.log(data.maps.parent[_this.mapId].mapcenter);
            var map = new mapbox_gl_1.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v9',
                zoom: data.maps.parent[_this.mapId].zoomlevel,
                center: data.maps.parent[_this.mapId].mapcenter,
            });
            _this.map = map;
            return _this.data = data;
        }).then(function (data) {
            console.log('SECOND THENS', data);
            _this.mapService.getGeoJson(_this.mapId)
                .then(function (mapData) {
                var layer = L.geoJSON(mapData);
                console.log(layer);
                for (var _i = 0, _a = mapData.features; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    entry.properties.icon = "rocket";
                }
                _this.map.addSource("mapDataSrc", {
                    "type": "geojson",
                    "data": mapData
                });
                var lObj = {
                    "id": "points",
                    "type": "symbol",
                    "source": "mapDataSrc",
                    "layout": {
                        "icon-image": "{icon}-15",
                        "text-field": "{title}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, 0.6],
                        "text-anchor": "top"
                    }
                };
                console.log(lObj);
                _this.map.addLayer(lObj);
                //layer.addTo(this.map);
                return _this.mapData = mapData;
            });
            return data;
        });
    };
    ;
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'cartr-app',
        templateUrl: './map.component.html',
    }),
    __metadata("design:paramtypes", [map_service_1.MapService, router_1.Router, router_2.ActivatedRoute])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map