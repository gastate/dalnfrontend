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
var cognito_service_1 = require("./cognito.service");
var AWS = require("aws-sdk/global");
/**
 * Created by Vladimir Budilov
 */
var DynamoDBService = (function () {
    function DynamoDBService(cognitoUtil) {
        this.cognitoUtil = cognitoUtil;
        console.log("DynamoDBService: constructor");
    }
    DynamoDBService.prototype.getAWS = function () {
        return AWS;
    };
    return DynamoDBService;
}());
DynamoDBService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cognito_service_1.CognitoUtil])
], DynamoDBService);
exports.DynamoDBService = DynamoDBService;
//# sourceMappingURL=ddb.service.js.map