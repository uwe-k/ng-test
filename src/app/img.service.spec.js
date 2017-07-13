/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require("@angular/core/testing");
var img_service_1 = require("./img.service");
var http_1 = require("@angular/http");
describe('Service: Img', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [img_service_1.ImgService],
            imports: [
                http_1.HttpModule,
            ]
        });
    });
    it('should ...', testing_1.inject([img_service_1.ImgService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=img.service.spec.js.map