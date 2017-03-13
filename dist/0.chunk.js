webpackJsonp([0,3],{

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submit_form_component__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submit_form_service__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rights_rights_component__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metadata_metadata_component__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__description_description_component__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_media_component__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__license_license_component__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complete_complete_component__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__submit_form_routing_module__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__result_result_component__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datepicker_datepicker_component__ = __webpack_require__(1144);
/* harmony export (binding) */ __webpack_require__.d(exports, "SubmitFormModule", function() { return SubmitFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SubmitFormModule = (function () {
    function SubmitFormModule() {
    }
    SubmitFormModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__submit_form_routing_module__["a" /* SubmitFormRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__rights_rights_component__["a" /* RightsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__metadata_metadata_component__["a" /* MetadataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__description_description_component__["a" /* DescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__media_media_component__["a" /* MediaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__license_license_component__["a" /* LicenseComponent */],
                __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__complete_complete_component__["a" /* CompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_3__submit_form_component__["a" /* SubmitFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__datepicker_datepicker_component__["a" /* DatepickerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__submit_form_service__["a" /* SubmitFormService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitFormModule);
    return SubmitFormModule;
}());


/***/ },

/***/ 1123:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubmitFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitFormService = (function () {
    function SubmitFormService(_http) {
        this._http = _http;
        this.endPoint = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINTS;
        this.title = "";
        this.description = "";
        this.rightsConsent = "";
        this.rightsRelease = "";
        this.contributorAuthor = [];
        this.creatorGender = [];
        this.coveragePeriod = [];
        this.coverageNationality = [];
        this.coverageStateProvince = [];
        this.coverageRegion = [];
        this.coverageSpatial = [];
        this.language = [];
        this.subject = [];
        console.log("Helloi");
    }
    // Get all form data from description step
    // Description form only has title, description, and coveragePeriod.
    SubmitFormService.prototype.getDescriptionFormValues = function (jsonValue) {
        var descriptionObj = JSON.parse(jsonValue);
        // console.log("Object:" , descriptionObj);
        var keys = Object.keys(descriptionObj);
        // console.log("Keys:",  keys);
        // step through the array of keys and assign variables.
        for (var key in keys) {
            // idk why it doesn't work with else-if, prob cuz im using for each.
            if (keys.indexOf("title") > -1) {
                this.title = descriptionObj.title;
            }
            else {
                this.title = null;
            }
            if (keys.indexOf("description") > -1) {
                this.description = descriptionObj.description;
            }
            else {
                this.description = null;
            }
            if (keys.indexOf("coveragePeriod") > -1) {
                this.coveragePeriod = descriptionObj.coveragePeriod;
            }
            else {
                this.coveragePeriod = null;
            }
        }
        this.postString = this.title;
        // console.log(this.title);
        // console.log(this.description);
        // console.log(this.coveragePeriod);
    };
    // TODO: NOT WORKING!!!
    SubmitFormService.prototype.getRightsFormValues = function (jsonValue) {
        var rightsObj = JSON.parse(jsonValue);
        // console.log("Object:" , rightsObj);
        var keys = Object.keys(rightsObj);
        // console.log("Keys:",  keys);
        // step through the array of keys and assign variables.
        for (var key in keys) {
            // idk why it doesn't work with else-if, prob cuz im using for each.
            if (keys.indexOf("rightsConsent") > -1) {
                this.rightsConsent = rightsObj.rightsConsent;
            }
            else {
                this.rightsConsent = null;
            }
            if (keys.indexOf("rightsRelease") > -1) {
                this.rightsRelease = rightsObj.rightsRelease;
            }
            else {
                this.rightsRelease = null;
            }
        }
        // console.log(this.rightsConsent);
        // console.log(this.rightsRelease);
    };
    SubmitFormService.prototype.getMetaFormValues = function (jsonValue) {
        var metaObj = JSON.parse(jsonValue);
        // console.log("Object:" , metaObj);
        var keys = Object.keys(metaObj);
        // console.log("Keys:",  keys);
        // step through the array of keys and assign variables.
        for (var key in keys) {
            // idk why it doesn't work with else-if, prob cuz im using for each.
            if (keys.indexOf("creatorGender") > -1) {
                this.creatorGender = metaObj.creatorGender;
            }
            else {
                this.creatorGender = null;
            }
        }
    };
    SubmitFormService.prototype.getMetaArrayValues = function (nameValues) {
        this.contributorAuthor = nameValues;
    };
    // A terrible function that will let you pass unorganized string arrays and get the data from them to assgin to local values.
    // Just make sure you pass in the right order or string arrays.
    SubmitFormService.prototype.getDescriptionArrayValues = function (subjectValues, nationValues, regionValues, stateValues, geoValues, languageValues) {
        this.subject = subjectValues;
        this.coverageNationality = nationValues;
        this.coverageRegion = regionValues;
        this.coverageStateProvince = stateValues;
        this.coverageSpatial = geoValues;
        this.language = languageValues;
        // Don't worry about null values, empty string. TODO: Just catch any undefined
        //   console.log(this.subject);
        //   console.log(this.coverageNationality);
        //   console.log(this.coverageRegion);
        //   console.log(this.coverageStateProvince);
        //   console.log(this.coverageSpatial);
        //   console.log(this.language);
    };
    SubmitFormService.prototype.getDescObj = function (data, field) {
        var descriptionObj = JSON.parse(data);
        // console.log("Object:" , descriptionObj);
        switch (descriptionObj.get(field)) {
            case "title": {
                console.log("Getting title");
                return descriptionObj.title;
            }
            case "description": {
                console.log("Getting desc");
                return descriptionObj.description;
            }
            case "coveragePeriod": {
                console.log("Getting coverage");
                return descriptionObj.coveragePeriod;
            }
            default: {
                //statements;
                return null;
            }
        }
    };
    SubmitFormService.prototype.makeDataJSON = function () {
        // get all form inputs
        // JSON.parse()
        // validate it
        // return as singlge
        //   var post= '{"title":' + '"' + this.title + '"' +  "," +  '}';
        //
        // var stringArr = [
        //     this.title,
        //     this.description,
        //     this.rightsConsent,
        //     this.rightsRelease
        // ];
        //
        // var stringArrOfArr = [
        //     this.contributorAuthor,
        //     this.creatorGender,
        //     this.coveragePeriod,
        //     this.coverageNationality,
        //     this.coverageStateProvince,
        //     this.coverageRegion,
        //     this.coverageSpatial,
        //     this.language,
        //     this.subject
        // ];
        // var arr = [
        //     this.title,
        //     this.description,
        //     this.rightsConsent,
        //     this.rightsRelease,
        //     this.contributorAuthor,
        //     this.creatorGender,
        //     this.coveragePeriod,
        //     this.coverageNationality,
        //     this.coverageStateProvince,
        //     this.coverageRegion,
        //     this.coverageSpatial,
        //     this.language,
        //     this.subject
        // ];
        // console.log(this.title);
        var BODY = {
            "title": this.title,
            "description": this.description,
            "rightsConsent": this.rightsConsent,
            "rightsRelease": this.rightsRelease,
            "contributorAuthor": this.contributorAuthor,
            "creatorGender": this.creatorGender,
            "coveragePeriod": this.coveragePeriod,
            "coverageNationality": this.coverageNationality,
            "coverageStateProvince": this.coverageStateProvince,
            "coverageRegion": this.coverageRegion,
            "coverageSpatial": this.coverageSpatial,
            "language": this.language,
            "subject": this.subject
        };
        // var BODY = {
        //    "contributorAuthor": [],
        //    "title": '',
        //    "description": ''
        // }
        // for (var i = 0; i < stringArr.length; i++) {
        //     if (stringArr[i] !== "" || !stringArr[i]) {
        //
        //     }
        // }
        // console.log(stringArr);
        //
        // console.log(BODY);
        // var tango = JSON.stringify(BODY);
        // console.log(tango);
    };
    SubmitFormService.prototype.postCreate = function () {
        var _this = this;
        console.log(this.title);
        var str = JSON.stringify(this.title);
        console.log(str);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers, method: "post" });
        return this._http.post(this.endPoint.create_post, str, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.postResult = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    SubmitFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SubmitFormService);
    return SubmitFormService;
    var _a;
}());


/***/ },

/***/ 1124:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Dispatcher; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        _super.call(this, { type: Dispatcher.INIT });
    }
    Dispatcher.prototype.dispatch = function (action) {
        this.next(action);
    };
    Dispatcher.prototype.complete = function () {
        // noop
    };
    Dispatcher.INIT = '@ngrx/store/init';
    return Dispatcher;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]));
//# sourceMappingURL=dispatcher.js.map

/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Reducer; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Reducer = (function (_super) {
    __extends(Reducer, _super);
    function Reducer(_dispatcher, initialReducer) {
        _super.call(this, initialReducer);
        this._dispatcher = _dispatcher;
    }
    Reducer.prototype.replaceReducer = function (reducer) {
        this.next(reducer);
    };
    Reducer.prototype.next = function (reducer) {
        _super.prototype.next.call(this, reducer);
        this._dispatcher.dispatch({ type: Reducer.REPLACE });
    };
    Reducer.REPLACE = '@ngrx/store/replace-reducer';
    return Reducer;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]));
//# sourceMappingURL=reducer.js.map

/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return State; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var State = (function (_super) {
    __extends(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = this;
        _super.call(this, _initialState);
        var actionInQueue$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_observeOn__["observeOn"].call(action$, __WEBPACK_IMPORTED_MODULE_3_rxjs_scheduler_queue__["queue"]);
        var actionAndReducer$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_withLatestFrom__["withLatestFrom"].call(actionInQueue$, reducer$);
        var state$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_scan__["scan"].call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
    }
    return State;
}(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]));
//# sourceMappingURL=state.js.map

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Store; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var Store = (function (_super) {
    __extends(Store, _super);
    function Store(_dispatcher, _reducer, state$) {
        _super.call(this);
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        this.select = __WEBPACK_IMPORTED_MODULE_0__ngrx_core__["a" /* select */].bind(this);
        this.source = state$;
    }
    Store.prototype.lift = function (operator) {
        var store = new Store(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    Store.prototype.replaceReducer = function (reducer) {
        this._reducer.next(reducer);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    Store.prototype.complete = function () {
        // noop
    };
    return Store;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]));
//# sourceMappingURL=store.js.map

/***/ },

/***/ 1128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = combineReducers;
function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        if (state === void 0) { state = {}; }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
//# sourceMappingURL=utils.js.map

/***/ },

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompleteComponent = (function () {
    function CompleteComponent() {
    }
    CompleteComponent.prototype.ngOnInit = function () {
    };
    CompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-complete',
            template: __webpack_require__(1158),
            styles: [__webpack_require__(1148)]
        }), 
        __metadata('design:paramtypes', [])
    ], CompleteComponent);
    return CompleteComponent;
}());


/***/ },

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submit_form_service__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescriptionComponent = (function () {
    function DescriptionComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this._submitService = _submitService;
        this.subjects = [];
        this.nations = [];
        this.regions = [];
        this.states = [];
        this.geos = [];
        this.languages = [];
        this.initForm();
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.initForm = function () {
        this.descForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            description: [''],
            coveragePeriod: ['']
        });
    };
    DescriptionComponent.prototype.addSubject = function (subjectInput) {
        this.subjects.push(subjectInput);
    };
    DescriptionComponent.prototype.removeSubject = function (subjectValue) {
        this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
    };
    DescriptionComponent.prototype.addNation = function (nation) {
        this.nations.push(nation);
    };
    DescriptionComponent.prototype.removeNation = function (nation) {
        this.nations.splice(this.nations.indexOf(nation), 1);
    };
    DescriptionComponent.prototype.addRegion = function (region) {
        this.regions.push(region);
    };
    DescriptionComponent.prototype.removeRegion = function (region) {
        this.regions.splice(this.regions.indexOf(region), 1);
    };
    DescriptionComponent.prototype.addState = function (state) {
        this.states.push(state);
    };
    DescriptionComponent.prototype.removeState = function (state) {
        this.states.splice(this.states.indexOf(state), 1);
    };
    DescriptionComponent.prototype.addGeo = function (geo) {
        this.geos.push(geo);
    };
    DescriptionComponent.prototype.removeGeo = function (geo) {
        this.geos.splice(this.geos.indexOf(geo), 1);
    };
    DescriptionComponent.prototype.addLanguage = function (language) {
        this.languages.push(language);
    };
    DescriptionComponent.prototype.removeLanguage = function (language) {
        this.languages.splice(this.languages.indexOf(language), 1);
    };
    // getConsole() {
    //     console.log(this.subjects);
    //     console.log(this.nations);
    //     console.log(this.regions);
    //     console.log(this.states);
    //     console.log(this.geos);
    //     console.log(this.languages);
    // }
    DescriptionComponent.prototype.back = function () {
        // return data back through submit-service.
    };
    DescriptionComponent.prototype.next = function () {
        // this.descriptionService.updateDescription(this.form.value);
        var formObj = this.descForm.getRawValue();
        var serialize = JSON.stringify(formObj);
        // this._submitService.getDescObj(serialize);
        this._submitService.getDescriptionFormValues(serialize);
        this._submitService.getDescriptionArrayValues(this.subjects, this.nations, this.regions, this.states, this.geos, this.languages);
        this._router.navigateByUrl('/create/media');
    };
    DescriptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-description',
            template: __webpack_require__(1160),
            styles: [__webpack_require__(1150)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]) === 'function' && _c) || Object])
    ], DescriptionComponent);
    return DescriptionComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MediaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaComponent = (function () {
    function MediaComponent(_router) {
        this._router = _router;
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/summary');
    };
    MediaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-media',
            template: __webpack_require__(1162),
            styles: [__webpack_require__(1152)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], MediaComponent);
    return MediaComponent;
    var _a;
}());


/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submit_form_service__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MetadataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetadataComponent = (function () {
    function MetadataComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this._submitService = _submitService;
        this.names = [];
        this.initForm();
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent.prototype.initForm = function () {
        this.metaForm = this.fb.group({
            creatorGender: ['']
        });
    };
    MetadataComponent.prototype.addName = function (lastName, firstName) {
        var name = lastName + ", " + firstName;
        this.names.push(name);
    };
    MetadataComponent.prototype.removeName = function (name) {
        this.names.splice(this.names.indexOf(name), 1);
    };
    // getConsole(){
    //     console.log(this.names);
    // }
    MetadataComponent.prototype.next = function () {
        // this._submitService.setContributorAuthor(this.names);
        var formObj = this.metaForm.getRawValue();
        var serialize = JSON.stringify(formObj);
        this._submitService.getMetaFormValues(serialize);
        this._submitService.getMetaArrayValues(this.names);
        this._router.navigateByUrl('/create/description');
    };
    MetadataComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-metadata',
            template: __webpack_require__(1163),
            styles: [__webpack_require__(1153)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]) === 'function' && _c) || Object])
    ], MetadataComponent);
    return MetadataComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1133:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submit_form_service__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RightsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightsComponent = (function () {
    function RightsComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this._submitService = _submitService;
        this.initForm();
    }
    RightsComponent.prototype.ngOnInit = function () {
        //   this.rightsService.rights$
        //     .subscribe(rights => {
        //         this.initForm(rights);
        //     });
    };
    RightsComponent.prototype.initForm = function () {
        this.rightsForm = this.fb.group({
            rightsConsent: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            rightsRelease: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required]
        });
    };
    RightsComponent.prototype.next = function () {
        //   this.rightsService.updateRights(this.form.value);
        this.rightsConsent = this.rightsForm.value.rightsConsent;
        this.rightsRelease = this.rightsForm.value.rightsRelease;
        var formObj = this.rightsForm.getRawValue();
        var serialize = JSON.stringify(formObj);
        //   console.log(serialize);
        this._submitService.getRightsFormValues(serialize);
        //   this._submitService.setRightsConsent(this.rightsConsent);
        //   this._submitService.setRightsRelease(this.rightsRelease);
        this._router.navigateByUrl('/create/metadata');
    };
    RightsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-rights',
            template: __webpack_require__(1164),
            styles: [__webpack_require__(1154)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__submit_form_service__["a" /* SubmitFormService */]) === 'function' && _c) || Object])
    ], RightsComponent);
    return RightsComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1134:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubmitFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitFormComponent = (function () {
    function SubmitFormComponent() {
    }
    SubmitFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-submit-form',
            template: __webpack_require__(1165),
            styles: [__webpack_require__(1155)],
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitFormComponent);
    return SubmitFormComponent;
}());


/***/ },

/***/ 1135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_form_service__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = (function () {
    function SummaryComponent(_router, _submitService) {
        this._router = _router;
        this._submitService = _submitService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.next = function () {
        this._submitService.makeDataJSON();
        this._submitService.postCreate();
        this._router.navigateByUrl('/create/complete');
    };
    SummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__(1166),
            styles: [__webpack_require__(1156)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__submit_form_service__["a" /* SubmitFormService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__submit_form_service__["a" /* SubmitFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__submit_form_service__["a" /* SubmitFormService */]) === 'function' && _b) || Object])
    ], SummaryComponent);
    return SummaryComponent;
    var _a, _b;
}());


/***/ },

/***/ 1136:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_operator_enterZone__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_operator_leaveZone__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_operator_select__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_compose__ = __webpack_require__(1137);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_operator_select__["a"]; });
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ },

/***/ 1137:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export compose */
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};
//# sourceMappingURL=compose.js.map

/***/ },

/***/ 1138:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__);
/* unused harmony export enterZone */
/* unused harmony export EnterZoneOperator */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function enterZone(zone) {
    return this.lift(new EnterZoneOperator(zone));
}
var EnterZoneOperator = (function () {
    function EnterZoneOperator(_zone) {
        this._zone = _zone;
    }
    EnterZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
    };
    return EnterZoneOperator;
}());
var EnterZoneSubscriber = (function (_super) {
    __extends(EnterZoneSubscriber, _super);
    function EnterZoneSubscriber(destination, _zone) {
        _super.call(this, destination);
        this._zone = _zone;
    }
    EnterZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.run(function () { return _this.destination.next(value); });
    };
    return EnterZoneSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__["Subscriber"]));
//# sourceMappingURL=enterZone.js.map

/***/ },

/***/ 1139:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__);
/* unused harmony export leaveZone */
/* unused harmony export LeaveZoneOperator */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function leaveZone(zone) {
    return this.lift(new LeaveZoneOperator(zone));
}
var LeaveZoneOperator = (function () {
    function LeaveZoneOperator(_zone) {
        this._zone = _zone;
    }
    LeaveZoneOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new LeaveZoneSubscriber(subscriber, this._zone));
    };
    return LeaveZoneOperator;
}());
var LeaveZoneSubscriber = (function (_super) {
    __extends(LeaveZoneSubscriber, _super);
    function LeaveZoneSubscriber(destination, _zone) {
        _super.call(this, destination);
        this._zone = _zone;
    }
    LeaveZoneSubscriber.prototype._next = function (value) {
        var _this = this;
        this._zone.runOutsideAngular(function () { return _this.destination.next(value); });
    };
    return LeaveZoneSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscriber__["Subscriber"]));
//# sourceMappingURL=leaveZone.js.map

/***/ },

/***/ 1140:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__);
/* harmony export (immutable) */ exports["a"] = select;



function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var mapped$;
    if (typeof pathOrMapFn === 'string') {
        mapped$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__["pluck"].call.apply(__WEBPACK_IMPORTED_MODULE_0_rxjs_operator_pluck__["pluck"], [this, pathOrMapFn].concat(paths));
    }
    else if (typeof pathOrMapFn === 'function') {
        mapped$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__["map"].call(this, pathOrMapFn);
    }
    else {
        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
            + " expected 'string' or 'function'");
    }
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_distinctUntilChanged__["distinctUntilChanged"].call(mapped$);
}
//# sourceMappingURL=select.js.map

/***/ },

/***/ 1141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatcher__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng2__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_reducer__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_state__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_store__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(1128);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_store__["a"]; });
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ },

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dispatcher__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1128);
/* unused harmony export INITIAL_REDUCER */
/* unused harmony export INITIAL_STATE */
/* unused harmony export _INITIAL_REDUCER */
/* unused harmony export _INITIAL_STATE */
/* unused harmony export _initialReducerFactory */
/* unused harmony export _initialStateFactory */
/* unused harmony export _storeFactory */
/* unused harmony export _stateFactory */
/* unused harmony export _reducerFactory */
/* unused harmony export provideStore */
/* unused harmony export StoreModule */






var INITIAL_REDUCER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* OpaqueToken */]('Token ngrx/store/reducer');
var INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* OpaqueToken */]('Token ngrx/store/initial-state');
var _INITIAL_REDUCER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* OpaqueToken */]('Token _ngrx/store/reducer');
var _INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* OpaqueToken */]('Token _ngrx/store/initial-state');
function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* combineReducers */])(reducer);
}
function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */].INIT });
    }
    return initialState;
}
function _storeFactory(dispatcher, reducer, state$) {
    return new __WEBPACK_IMPORTED_MODULE_3__store__["a" /* Store */](dispatcher, reducer, state$);
}
function _stateFactory(initialState, dispatcher, reducer) {
    return new __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */](initialState, dispatcher, reducer);
}
function _reducerFactory(dispatcher, reducer) {
    return new __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */](dispatcher, reducer);
}
;
/**
 * @deprecated, use StoreModule.provideStore instead!
 */
function provideStore(_reducer, _initialState) {
    return [
        __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */],
        { provide: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* Store */], useFactory: _storeFactory, deps: [__WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */], __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */]] },
        { provide: __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */], useFactory: _reducerFactory, deps: [__WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], INITIAL_REDUCER] },
        { provide: __WEBPACK_IMPORTED_MODULE_4__state__["a" /* State */], useFactory: _stateFactory, deps: [INITIAL_STATE, __WEBPACK_IMPORTED_MODULE_2__dispatcher__["a" /* Dispatcher */], __WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* Reducer */]] },
        { provide: INITIAL_REDUCER, useFactory: _initialReducerFactory, deps: [_INITIAL_REDUCER] },
        { provide: INITIAL_STATE, useFactory: _initialStateFactory, deps: [_INITIAL_STATE, INITIAL_REDUCER] },
        { provide: _INITIAL_STATE, useValue: _initialState },
        { provide: _INITIAL_REDUCER, useValue: _reducer }
    ];
}
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule.provideStore = function (_reducer, _initialState) {
        return {
            ngModule: StoreModule,
            providers: provideStore(_reducer, _initialState)
        };
    };
    StoreModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgModule */], args: [{},] },
    ];
    /** @nocollapse */
    StoreModule.ctorParameters = [];
    return StoreModule;
}());
//# sourceMappingURL=ng2.js.map

/***/ },

/***/ 1143:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(1141);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = (function () {
    function ResultComponent(store) {
        this.store = store;
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__(1157),
            styles: [__webpack_require__(1147)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === 'function' && _a) || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a;
}());


/***/ },

/***/ 1144:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = (function () {
    function DatepickerComponent() {
    }
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-datepicker',
            template: __webpack_require__(1159),
            styles: [__webpack_require__(1149)]
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());


/***/ },

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LicenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LicenseComponent = (function () {
    function LicenseComponent(_router) {
        this._router = _router;
    }
    LicenseComponent.prototype.ngOnInit = function () {
    };
    LicenseComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/summary');
    };
    LicenseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Component */])({
            selector: 'app-license',
            template: __webpack_require__(1161),
            styles: [__webpack_require__(1151)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], LicenseComponent);
    return LicenseComponent;
    var _a;
}());


/***/ },

/***/ 1146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_form_component__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rights_rights_component__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__metadata_metadata_component__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__description_description_component__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_media_component__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__complete_complete_component__ = __webpack_require__(1129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubmitFormRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var submitFormRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__submit_form_component__["a" /* SubmitFormComponent */],
        children: [
            { path: '', redirectTo: 'rights', pathMatch: 'full' },
            { path: 'rights', component: __WEBPACK_IMPORTED_MODULE_3__rights_rights_component__["a" /* RightsComponent */] },
            { path: 'metadata', component: __WEBPACK_IMPORTED_MODULE_4__metadata_metadata_component__["a" /* MetadataComponent */] },
            { path: 'description', component: __WEBPACK_IMPORTED_MODULE_5__description_description_component__["a" /* DescriptionComponent */] },
            { path: 'media', component: __WEBPACK_IMPORTED_MODULE_6__media_media_component__["a" /* MediaComponent */] },
            // { path: 'license', component: LicenseComponent },
            { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["a" /* SummaryComponent */] },
            { path: 'complete', component: __WEBPACK_IMPORTED_MODULE_8__complete_complete_component__["a" /* CompleteComponent */] }
        ]
    },
];
var SubmitFormRoutingModule = (function () {
    function SubmitFormRoutingModule() {
    }
    SubmitFormRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(submitFormRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitFormRoutingModule);
    return SubmitFormRoutingModule;
}());


/***/ },

/***/ 1147:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1148:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1149:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1150:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1151:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1152:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1153:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1154:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1155:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1156:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1157:
/***/ function(module, exports) {

module.exports = "<h1>App store</h1>\r\n<pre>\r\n    {{store | async | json}}\r\n</pre>\r\n"

/***/ },

/***/ 1158:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h1>Post Submission Complete!</h1>\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ },

/***/ 1159:
/***/ function(module, exports) {

module.exports = "<!-- <form class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div class=\"input-group\">\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n              name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n      <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n          <i class=\"icon-calendar\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form> -->\r\n"

/***/ },

/***/ 1160:
/***/ function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n    <form [formGroup]=\"descForm\" novalidate (submit)=\"next()\">\r\n    <ul>\r\n\r\n        <li>\r\n            <span>Title</span>\r\n            <input class=\"meta-info\" type=\"text\" name=\"title\" formControlName=\"title\" [(ngModel)]='title'> <br />\r\n            <p>\r\n            To help other DALN users find your literacy narrative, please provide a brief title for your literacy narrative. (Required)\r\n            </p>\r\n\r\n\r\n        </li>\r\n\r\n        <li>\r\n          <span>Description</span>\r\n          <input class=\"meta-info\" type=\"text\" name=\"description\" formControlName=\"description\" [(ngModel)]='description'> <br />\r\n          <p>\r\n            To help other DALN users find your literacy narrative, please describe your literacy narrative briefly in this box (Optional).\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Date Created</span>\r\n          <!-- <app-datepicker></app-datepicker> -->\r\n        <br />\r\n          <p>\r\n            Please provide the date on which you created your literacy narrative -- not necessarily the date on which you are filling out this form. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n    </ul>\r\n\r\n<div class=\" well well-lg\">\r\n    <p>\r\n        The following form fields are optional, but recommended:\r\n    </p>\r\n\r\n    <ul>\r\n\r\n        <li>\r\n          <span>Subject Keyword</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"subject\" #subjectInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addSubject(subjectInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> Current Subject(s): </p>\r\n            <span *ngFor=\"let subject of subjects\" class=\"badge badge-primary\">{{subject}}\r\n              <button (click)=\"removeSubject(this.subject)\" type=\"button\" class=\"close\">\r\n              <span>&times;</span>\r\n            </button>\r\n            </span>\r\n          <br />\r\n\r\n          <p>\r\n            To help other DALN users find your literacy narrative, please enter appropriate subject keywords or phrases. You may enter as many as you like, but you should enter only one keyword or phrase at a time, then click \"Add More\" to enter additional keywords. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Decades covered</span>\r\n          <div class=\"form-group\">\r\n              <label for=\"decades\">Mutiple select list (hold shift to select more than one):</label>\r\n                    <select multiple class=\"form-control\" id=\"decades\" [(ngModel)]=\"coveragePeriod\" formControlName=\"coveragePeriod\">\r\n                      <option>1900-1909</option>\r\n                      <option>1910-1919</option>\r\n                      <option>1920-1929</option>\r\n                      <option>1930-1939</option>\r\n                      <option>1940-1949</option>\r\n                      <option>1950-1959</option>\r\n                      <option>1960-1969</option>\r\n                      <option>1970-1979</option>\r\n                      <option>1980-1989</option>\r\n                      <option>1990-1999</option>\r\n                      <option>2000-2009</option>\r\n                      <option>2010-2019</option>\r\n                    </select>\r\n          </div>\r\n            <p>\r\n              Please indicate the decades referred to in your literacy narrative. You can choose as many as necessary, but you may need to hold down the Shift or CTRL key to select multiple choices. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Nationality</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"nation\" #nationInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addNation(nationInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> Nation(s) specified: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let nation of nations\" class=\"list-group-item\">{{nation}}\r\n                    <button (click)=\"removeNation(this.nation)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n          <p>\r\n              To help other DALN users find narratives by people of a particular nationality, please list your nationality/nationalities during the period referred to in your narrative. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Region</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"region\" #regionInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addRegion(regionInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> Region(s) specified: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let region of regions\" class=\"list-group-item\">{{region}}\r\n                    <button (click)=\"removeRegion(this.region)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n          <p>\r\n            To help other DALN users find narratives from particular regions (e.g., New England, Rocky Mountains, Great Plains) please list the region(s) in which the events described in your narrative took place. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>State or Province</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"state\" #stateInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addState(stateInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> State(s) specified: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let state of states\" class=\"list-group-item\">{{state}}\r\n                    <button (click)=\"removeState(this.state)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n            <br />\r\n          <p>\r\n            To help other DALN users find narratives from your state or province, please list the state(s) or province(s) in which the events described in your narrative took place. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Other Geographical Information</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"geo\" #geoInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addGeo(geoInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> Georgraphical information added: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let geo of geos\" class=\"list-group-item\">{{geo}}\r\n                    <button (click)=\"removeGeo(this.geo)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n          <br />\r\n          <p>\r\n            Please provide any further description of the places referred to in your narrative that you consider important (e.g., urban, suburban, rural, inner-city Detroit). (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Language</span>\r\n          <div class=\"col-lg-6\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"meta-info\" type=\"text\" name=\"language\" #languageInput>\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addLanguage(languageInput.value)\">+</button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n          <p> Languages specified: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let language of languages\" class=\"list-group-item\">{{language}}\r\n                    <button (click)=\"removeLanguage(this.language)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n          <br />\r\n          <p>\r\n            Please enter the language(s) used or referred to in your literacy narrative. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n\r\n    </ul>\r\n</div>\r\n    </form>\r\n\r\n    <!-- <button type=\"submit\" [disabled]=\"form.invalid\" (click)=\"next()\">Next Step</button> -->\r\n    <!-- <button type=\"submit\" (click)=\"getConsole()\">Get Console</button> -->\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!descForm.valid\" (click)=\"next()\">Next Step</button>\r\n\r\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!descForm.controls.title.valid\">\r\n        <strong > A title is required to make a post.</strong>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- <p>\r\n    Form value:\r\n    {{descForm.value | json}}\r\n</p> -->\r\n"

/***/ },

/***/ 1161:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Licensing Options</h1>\r\n    <p>\r\n        If you assigned a Creative Commons license in the description of your narrative, you are finished with licensing. Please confirm your choice by checking \"I confirm my choice. . . .\" below, then clicking the \"Complete submission\" button.\r\n    </p>\r\n    <p>\r\n        If you did not assign a Creative Commons license in the description of your narrative, please read the terms of the Deed of Gift outlined below and confirm that you accept those terms.\r\n    </p>\r\n\r\n    <div class=\"tooltip-demo well\">\r\n\r\n\r\n    <p class=\"muted\">\r\n        PLEASE READ THE FOLLOWING INFORMATION ABOUT LICENSING YOUR LITERACY NARRATIVE\r\n\r\n        If you wish to transfer all rights to your narrative to the Digital Archive of Literacy Narratives (DALN) according to the terms of our DEED OF GIFT form (see below), please make sure you DID NOT add a Creative Commons license notice to your narrative's description. Any Creative Commons license you indicated in your description will take precedence over the Deed of Gift described below.\r\n        By checking \"I confirm my choice. . . .\" below, you confirm your choice of EITHER a Creative Commons license (as noted in your narrative's description, if applicable), OR you confirm that you are contributing your narrative to the Digital Archive of Literacy Narrative under a Deed of Gift (if you did not include a Creative Commons license notice in your narrative's description).\r\n        If you have questions about those options, you can step back through the submission forms by clicking the \"Previous\" button and reviewing information about the Creative Commons licensing options.\r\n        You may also click \"Save and Exit\" in order to save your submission and complete the submission process at a later time.\r\n\r\n        Once you have checked \"I confirm my choice. . . .\" below, you may click \"Complete submission.\"\r\n        Thank you for contributing to the Digital Archive of Literacy Narratives (DALN). We hope you will browse other people's narratives and encourage others to contribute. If you have suggestions about the submission process or the DALN in general, please send e-mail to Professor Cynthia Selfe (selfe.2@osu.edu).\r\n        ------------------------------------------\r\n        DEED OF GIFT\r\n        FOR ADULTS: I (the Contributor) give my literacy narrative (including all associated files and materials that are part of this literacy narrative) to the Digital Archive of Literacy Narrative (DALN) to become part of this public online collection of literacy narratives with the understandings listed below.\r\n        FOR CONTRIBUTORS UNDER 18: As the parent or legal guardian of the minor (the Contributor) who created this literacy narrative, I give this narrative (and all associated files and materials) to the Digital Archive of Literacy Narrative (DALN) to become part of this public online collection of literacy narratives with the understandings listed below:\r\n        - The DALN will store, preserve, and provide access to the gift in accordance with its archival practices.\r\n        - The DALN will organize, index, and/or create a guide to the gift in accordance with its archival practices.\r\n        - The DALN will put the gift on a web site that is accessible to members of the public.\r\n        - The DALN may appropriately dispose of materials that, after receipt, are deemed unsuitable to those collection about literacy.\r\n        REPRESENTATION AND WARRANTY\r\n        The Contributor represents and warrants that he/she is the sole owner of the gift and has the full right, title, and interest to make the donation, and that no agreement, assignment, sale, or encumbrance has been or will be made or entered into which would conflict with this deed.\r\n        ASSIGNMENT OF RIGHTS\r\n        The Contributor gives and grants to the DALN any and all rights and/or copyrights to this gift, including the right to archive, display, and provide public access to it through the DALN.\r\n        ACCESS TO THE ARCHIVE\r\n        It is the Contributor's wish that the Gift be made available for research as soon as possible following its transfer to the DALN. Materials in the DALN will be available for use by the public subject to policies about license and copyright that are posted on the DALN website.\r\n        PROCESSING THE COLLECTION\r\n        The DALN will create an archival finding aid for the collection, which will include a listing of all literacy narratives.\r\n        TRANSFER TO ANOTHER FORMAT\r\n        The DALN reserves the right to transfer material to other formats, which in the opinion of DALN Advisory Board, and according to national archival standards, will prolong the life of the material and/or facilitate access and use. In all instances the original items will also be retained. The DALN also reserves the right, within the limit of copyright provisions, to reproduce material from the collection for physical and electronic exhibits.\r\n        PROMOTING AWARENESS OF THE ARCHIVE\r\n        All literacy narratives in the DALN collection and the DALN's finding aid/index will be available on its website which is publicly accessible worldwide.\r\n        ADDITIONS TO THE ARCHIVE\r\n        The Contributor may make additions to the DALN collection subject to DALN policies.\r\n        ------------------------------------------\r\n\r\n    </p>\r\n</div>\r\n\r\n<button type=\"submit\" (click)=\"next()\">Next Step</button>\r\n\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ },

/***/ 1162:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <p><input type=\"file\" name=\"file1\">\r\n\r\n  <p><button type=\"submit\">Submit</button>\r\n\r\n\r\n\r\n    <p>\r\n        Please enter the full path of the file on your computer corresponding to your item. If you click \"Browse...\", a new window will allow you to select the file from your computer.\r\n\r\n       We recommend that you use the following file formats for compatibility with our system and broader accessiblity by end users, who typically must open the files on their own computers --\r\n\r\n       TEXT: Microsoft Word (.doc or .rtf); plain text (.txt); or Adobe Acrobat (.pdf)\r\n       IMAGES: JPEG (.jpg or .jpeg), GIF (.gif), or PNG (.png)\r\n       AUDIO: MP3 or QuickTime (.mov)\r\n       VIDEO: QuickTime (.mov)\r\n       WEB: HTML (.htm or .html)\r\n\r\n       If your file (particularly audio or video) is larger than 35 MB, we recommend that you split it into two or more files, with no single file larger than about 35 MB so that visitors to the site will be able to download your file(s) more conveniently.\r\n\r\n    </p>\r\n<!--\r\n    <li>\r\n      <span>File Description</span>\r\n      <input class=\"meta-info\" type=\"text\" name=\"file\"> <br />\r\n      <p>\r\n        Optionally, provide a brief description of the file, for example \"Main article\", or \"Experiment data readings\".\r\n      </p>\r\n    </li> -->\r\n\r\n    <button type=\"submit\" (click)=\"next()\">Next Step</button>\r\n\r\n\r\n</div>\r\n"

/***/ },

/***/ 1163:
/***/ function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n    <form [formGroup]=\"metaForm\" novalidate submit=next()>\r\n    <ul>\r\n\r\n        <li>\r\n            <span>Author</span>\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorLastName\" #lastName >\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorFirstName\" #firstName >\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addName(lastName.value, firstName.value)\">Add More</button>\r\n            <p>Authors: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let name of names\" >{{name}}\r\n                    <button (click)=\"removeName(this.name)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n            <br />\r\n            <p>\r\n            If you wish, enter the name of the author of this literacy narrative (you can click \"Add More\" to enter multiple names for a collaborative narrative). (Optional)\r\n            </p>\r\n\r\n        </li>\r\n\r\n        <li>\r\n          <span>Year-of-Birth</span>\r\n          <input class=\"meta-info\" type=\"text\" name=\"creatorYearOfBirth\"> <br />\r\n          <p>\r\n              To help other DALN users find narratives by people of a particular age group, please provide your year of birth (or years of birth for collaborative entries), using four digits. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Gender</span>\r\n          <div class=\"form-group\">\r\n              <input type=\"radio\" name=\"creatorGender\" value=\"Male\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\r\n                  Male\r\n              </p>\r\n              <input type=\"radio\" name=\"creatorGender\" value=\"Female\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\r\n                  Female\r\n              </p>\r\n          </div>\r\n          <br />\r\n          <p>\r\n             To help other DALN users find narratives by people of a particular gender or sexual orientation, please describe your gender (for example, male, female, transgender) and/or sexual orientation (for example: gay, bisexual, heterosexual). (Optional)\r\n          </p>\r\n        </li>\r\n\r\n    </ul>\r\n\r\n    </form>\r\n\r\n    <!-- <button type=\"submit\" (click)=\"getConsole()\">Get Console</button> -->\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\">Next Step</button>\r\n\r\n\r\n</div>\r\n\r\n<!-- <p>\r\n    Form value:\r\n    {{metaForm.value | json}}\r\n</p> -->\r\n"

/***/ },

/***/ 1164:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n\r\n<form [formGroup]=\"rightsForm\" novalidate (submit)=\"next()\">\r\n\r\n    <div class=\"rights-consent\">\r\n        <span>Consent to Participate</span>\r\n        <div class=\"well\">\r\n            <p>\r\n                Because we value your right to make an informed decision to participate in the DALN, we must have your consent before we accept a submission. Please click one of the following links to read our Adult Consent Form or Under-18 Consent Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate consent form.\r\n            </p>\r\n        </div>\r\n\r\n\r\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Adult\" formControlName=\"rightsConsent\" [(ngModel)]='rightsConsent'> <p>Adult</p>\r\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Under-18\" formControlName=\"rightsConsent\" [(ngModel)]='rightsConsent'> <p> Under-18</p>\r\n\r\n    </div>\r\n\r\n      <div class=\"materials-consent\">\r\n          <span>Release for Materials:</span>\r\n          <div class=\"well\">\r\n              <p>\r\n                Because we want you to know how your materials and personal information will be used in the DALN, we must have your release before we accept a submission. Please click one of the following links to read our Adult Release Form or Under-18 Release Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate release form.\r\n              </p>\r\n          </div>\r\n\r\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Adult\" formControlName=\"rightsRelease\" [(ngModel)]='rightsRelease'> <p> Adult </p>\r\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Under-18\" formControlName=\"rightsRelease\" [(ngModel)]='rightsRelease'> <p> Under-18 </p>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"rightsForm.invalid\" (click)=\"next()\">Next Step</button>\r\n\r\n\r\n</div>\r\n\r\n<!-- <p>\r\n    Form value:\r\n    {{rightsForm.value | json}}\r\n</p> -->\r\n"

/***/ },

/***/ 1165:
/***/ function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 1166:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <p>\r\n        Summary of Post Submission\r\n    </p>\r\n\r\n    <input type=\"checkbox\" /> <p>\r\n        Confirmation check\r\n    </p>\r\n    <button type=\"submit\" (click)=\"next()\">Next Step</button>\r\n\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ }

});
//# sourceMappingURL=0.bundle.map