System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this.postList = [
                        {
                            "postId": "fae17a81-4513-476c-9649-a1738852d542",
                            "title": "Joshua Brunner's Literacy Narrative",
                            "description": "This is my boring story.",
                            "identifierUri": "http://hdl.handle.net/2374.DALN/60",
                            "dateAccessioned": "2008-11-13T20:45:19Z",
                            "dateAvailable": "2008-11-13T20:45:19Z",
                            "dateCreated": "2008-11-13",
                            "dateIssued": "2008-11-13T20:45:19Z",
                            "rightsConsent": "adult",
                            "rightsRelease": "adult",
                            "contributorAuthor": ["Brunner, Joshua"],
                            "creatorGender": ["Male"],
                            "creatorYearOfBirth": ["1986"],
                            "coveragePeriod": ["1980-1989", "1990-1999", "2000-2009"],
                            "assetList": [{
                                    "assetName": "Josh Brunner_final.mp3",
                                    "assetType": "Audio",
                                    "assetID": "a18e63be-04b8-4d67-bb83-d996e37d8afc",
                                    "assetDescription": "None",
                                    "assetEmbedLink": "https://api.soundcloud.com/tracks/292286292",
                                    "assetLocation": "http://soundcloud.com/user-15072191/joshua-brunners-literacy-1"
                                }]
                        }, {
                            "postId": "ce6d88fd-67e9-4499-9778-31def4ec263f",
                            "title": "Jeff Welbaum's Literacy Narrative",
                            "identifierUri": "http://hdl.handle.net/2374.DALN/66",
                            "dateAccessioned": "2008-12-18T18:56:20Z",
                            "dateAvailable": "2008-12-18T18:56:20Z",
                            "dateCreated": "2008-12-18",
                            "dateIssued": "2008-12-18T18:56:20Z",
                            "rightsConsent": "adult",
                            "rightsRelease": "adult",
                            "contributorAuthor": ["Welbaum, Jeff"],
                            "creatorGender": ["male"],
                            "creatorClass": ["working class"],
                            "creatorYearOfBirth": ["1988"],
                            "coveragePeriod": ["1980-1989", "1990-1999", "2000-2009"],
                            "assetList": [{
                                    "assetName": "Jeff Welbaum_final.mp3",
                                    "assetType": "Audio",
                                    "assetID": "d887c393-ea8b-4f7e-8890-47aa7627d3b3",
                                    "assetDescription": "Jeff Welbaum's Literacy Narrative",
                                    "assetEmbedLink": "https://api.soundcloud.com/tracks/292287360",
                                    "assetLocation": "http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"
                                }]
                        }, {
                            "postId": "32c922fe-96e9-46e9-a297-0507519fa7df",
                            "title": "Clayton Buffer's Literacy Narrative",
                            "description": "A sophomore undergraduate discusses folklore and explores the study's possibilities.",
                            "identifierUri": "http://hdl.handle.net/2374.DALN/99",
                            "dateAccessioned": "2009-02-25T09:20:46Z",
                            "dateAvailable": "2009-02-25T09:20:46Z",
                            "dateCreated": "2009-02-25",
                            "dateIssued": "2009-02-25T09:20:46Z",
                            "rightsConsent": "adult",
                            "rightsRelease": "adult",
                            "contributorAuthor": ["Buffer, Clayton"],
                            "creatorGender": ["Male"],
                            "coverageStateProvince": ["Ohio"],
                            "subject": ["ebonics", "university district", "folklore"],
                            "assetList": [{
                                    "assetName": "cb_final.mp3",
                                    "assetType": "Audio",
                                    "assetID": "ee094a7b-867a-4204-beda-038cdb7fa469",
                                    "assetDescription": "None",
                                    "assetEmbedLink": "https://api.soundcloud.com/tracks/292291281",
                                    "assetLocation": "http://soundcloud.com/user-15072191/clayton-buffers-literacy"
                                }]
                        }, {
                            "postId": "35f94a41-f310-4d7b-93c1-616cb6096535",
                            "title": "test post 111116"
                        }
                    ];
                }
                PostService.prototype.ngOnInit = function () {
                    //    this.config = this.config = this._http.get('../../dev_config.json')
                    //     .map((congig: Response) => congig.json());
                    //     console.log("config: ", this.config);
                };
                PostService.prototype.getAllPosts = function () {
                    //    this.postList = this._http.get(this.test_endpoint)// ...and calling .json() on the response to return data
                    //                      .map((res:Response) => res.json())
                    //                      //...errors if any
                    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    //    console.log("postList: ", this.postList);
                    return this.postList;
                };
                PostService.prototype.getPostById = function (id) {
                    return this.postList.find(function (post) { return post.id === id; });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});

//# sourceMappingURL=PostService.js.map
