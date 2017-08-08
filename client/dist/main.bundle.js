webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_topics_component__ = __webpack_require__("../../../../../src/app/topic/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_topic_single_component__ = __webpack_require__("../../../../../src/app/topic/topic-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_new_topic_component__ = __webpack_require__("../../../../../src/app/topic/new-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_pending_component__ = __webpack_require__("../../../../../src/app/topic/pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discussion_discussion_component__ = __webpack_require__("../../../../../src/app/discussion/discussion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_dashboard_component__ = __webpack_require__("../../../../../src/app/shared/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__session_login_component__ = __webpack_require__("../../../../../src/app/session/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__session_session_guard__ = __webpack_require__("../../../../../src/app/session/session.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'topics',
        component: __WEBPACK_IMPORTED_MODULE_2__topic_topics_component__["a" /* TopicsComponent */]
    },
    {
        path: 'topic/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__topic_topic_single_component__["a" /* TopicSingleComponent */]
    },
    {
        path: 'topic/:id/discussion',
        component: __WEBPACK_IMPORTED_MODULE_6__discussion_discussion_component__["a" /* DiscussionComponent */]
    },
    {
        path: 'topics/create',
        component: __WEBPACK_IMPORTED_MODULE_4__topic_new_topic_component__["a" /* NewTopicComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__session_session_guard__["a" /* SessionGuard */]]
    },
    {
        path: "topics/pending",
        component: __WEBPACK_IMPORTED_MODULE_5__topic_pending_component__["a" /* PendingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__session_session_guard__["a" /* SessionGuard */]]
    },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_7__shared_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_8__session_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__session_session_guard__["a" /* SessionGuard */]]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: "full"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__session_session_guard__["a" /* SessionGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar {\n    background-color: #0e0e0e;\n    box-shadow:         0px 1px 3px 0px rgba(0, 0, 0, 0.5);\n    width: 100%; \n    height: 60px;\n    position: fixed;\n    top: 0;\n    z-index: 3;\n    font-family: 'Source Sans Pro', sans-serif;\n    font-weight: 600;\n    text-align: center;\n}\n\n#navbar ul {\n    height: 100%;\n    padding: 0; \n    margin: 0;\n    margin-right: 15px;\n    display: inline-block;\n    position: absolute;\n}\n\n#navbar li {\n    display: inline-block;\n    margin-top: 20px;\n    margin-left: 5px;\n}\n\n#navbar a {\n    color: #eee;\n    text-decoration: none;\n}\n\n#navbar a.active {\n    color: #ffbd00;\n}\n\n#navbar a:hover {\n    color: #ff76e6;\n}\n\n.content {\n    margin: 0 auto; \n    margin-bottom: -50px; /* Footer height */ \n    width: 960px;\n    min-height: 100%;\n    z-index: 2;\n    overflow: hidden;\n}\n\n.content .push {\n    height: 60px;\n}\n\n.back {\n    margin: 10px;\n    display: block;\n}\n\n#footer {\n    height: 49px;\n    text-align: center;\n    border-top: 1px dashed #222;\n    /* Border + Height = 50px */\n}\n\n#footer p {\n    display: inline-block; \n    margin: 5px;\n    margin-top: 10px;\n    color: #eee;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n#footer p:hover {\n    color: #ccc;\n    font-style: oblique;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<search [present]=\"searchOn\" [session]=\"session\"></search>\n<div id=\"navbar\">\n    <ul>\n        <li>\n            <a  class=\"show-search\" \n                [class.active]=\"searchOn\" \n                (click)=\"toggleSearch()\">\n                Search\n            </a>\n        </li>\n        <li><a routerLink=\"/dashboard\">Dashboard</a></li>\n        <li><a>About</a></li>\n        <li *ngIf=\"!hideLogin\"><a routerLink=\"/login\">Login</a></li>\n        <li *ngIf=\"hideLogin && session\"><a>Logged in as {{session.name}}</a></li>\n        <li *ngIf=\"hideLogin && session\" (click)=\"logoutProceed()\"><a>Logout</a></li>\n    </ul>\n</div>\n<div class=\"content\">\n    <div class=\"push\"></div>\n    <router-outlet></router-outlet>\n    <div class=\"controls\">\n        <button (click)=\"goBack()\" class=\"back\">\n            Back\n        </button>\n    </div>\n    <div class=\"push\"></div>\n</div>\n<div id=\"footer\">\n    <!-- TODO -->\n    <p>Join us </p>\n    <p>Terms and conditions</p>\n    <p>Privacy policy</p>\n    <p>About</p>\n    <p>Contact</p>\n    <p>2017.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(location, router, sessionService) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.sessionService = sessionService;
        this.hideLogin = true;
        this.searchOn = true;
        sessionService.loginConfirmed$
            .subscribe({
            next: function (session) {
                _this.hideLogin = true;
                _this.session = session;
            },
            complete: function () { console.log("Login completed"); }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("kento"))
            this.sessionService
                .verifySession(localStorage.getItem("kento"))
                .subscribe(function (res) {
                if (res.valid)
                    _this.sessionService.setSession(res.user)
                        .then(function (session) {
                        _this.hideLogin = true;
                        _this.session = session;
                    });
                else {
                    localStorage.removeItem("kento");
                    _this.hideLogin = false;
                }
            });
        else
            this.hideLogin = false;
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent.prototype.toggleSearch = function () {
        this.searchOn = !this.searchOn;
    };
    AppComponent.prototype.logoutProceed = function () {
        var _this = this;
        this.sessionService
            .logout()
            .subscribe(function (res) {
            if (res.ok) {
                _this.session = null;
                _this.hideLogin = false;
                localStorage.removeItem("kento");
                location.reload();
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_search_component__ = __webpack_require__("../../../../../src/app/shared/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_topics_component__ = __webpack_require__("../../../../../src/app/topic/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topic_topic_single_component__ = __webpack_require__("../../../../../src/app/topic/topic-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_new_topic_component__ = __webpack_require__("../../../../../src/app/topic/new-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topic_pending_component__ = __webpack_require__("../../../../../src/app/topic/pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__discussion_discussion_component__ = __webpack_require__("../../../../../src/app/discussion/discussion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_dashboard_component__ = __webpack_require__("../../../../../src/app/shared/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__session_login_component__ = __webpack_require__("../../../../../src/app/session/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__topic_topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__discussion_discussion_service__ = __webpack_require__("../../../../../src/app/discussion/discussion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__session_session_guard__ = __webpack_require__("../../../../../src/app/session/session.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__topic_topics_component__["a" /* TopicsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__topic_topic_single_component__["a" /* TopicSingleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topic_new_topic_component__["a" /* NewTopicComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topic_pending_component__["a" /* PendingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__discussion_discussion_component__["a" /* DiscussionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__session_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__topic_topic_service__["a" /* TopicService */],
            __WEBPACK_IMPORTED_MODULE_15__discussion_discussion_service__["a" /* DiscussionService */],
            __WEBPACK_IMPORTED_MODULE_16__session_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_17__session_session_guard__["a" /* SessionGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/custom-types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Topic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Session; });
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());

var Reply = (function () {
    function Reply() {
    }
    return Reply;
}());

var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());

var Session = (function () {
    function Session() {
    }
    return Session;
}());

//# sourceMappingURL=custom-types.js.map

/***/ }),

/***/ "../../../../../src/app/discussion/discussion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, p {\n    margin-left: 10px;\n}\n\n.reply {\n    width: 950px; \n    min-height: 140px;\n    overflow: hidden;\n    margin: 5px;\n\n}\n\n.reply .user {\n    width: 120px; \n    height: 120px;\n    float: left;\n    text-align: center;\n    color: #eee;\n}\n\n.reply .user img {\n    height: 70px;\n    width: 70px; \n    display: block;\n    margin: 0 auto;\n    margin-bottom: 5px;\n    border-radius: 5px 10px; \n    background-color: #ddd;\n}\n\n.reply .content {\n    float: left;\n    margin: 10px;\n    font-size: 14px;\n    color: #eee;\n    width: 800px;\n}\n\n.reply .content p.date {\n    margin-top: 0;\n    margin-left: 0;\n    border-bottom: 1px solid #333;\n    font-size: 14px;\n    color: #41c9a7;\n}\n\n.prev, .next {\n    margin-bottom: 10px;\n}\n\nform {\n    width: 100%;\n    margin: 10px;\n}\n\nform input {\n    margin: 0;\n    margin-top: 10px;\n    width: 30%;\n}\n\nform textarea {\n    width: 90%;\n    padding-top: 5px;\n    padding-left: 5px;\n}\n\nform button {\n    margin-top: 10px;\n}\n\n.show-more {\n    margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discussion/discussion.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<p>Replies: {{replyCount}}</p>\n\n<div *ngFor=\"let reply of replies\" class=\"reply\">\n    <div class=\"user\">\n        <img src=\"assets/images/user.png\">\n        {{reply.name}}\n    </div>\n    <div class=\"content\">\n        <p class=\"date\">\n        {{reply.datetime}}\n        </p>\n        {{reply.content}}\n    </div>\n</div>\n<button (click)=\"showMore()\" class=\"show-more\">\n    Show more\n</button>\n<form *ngIf=\"session | async\" (ngSubmit)=\"postReply()\">\n    <textarea #content [(ngModel)]=\"newReply.content\" name=\"content\" placeholder=\"Content\"></textarea>\n    <button type=\"submit\">Reply</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/discussion/discussion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_types__ = __webpack_require__("../../../../../src/app/custom-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discussion_service__ = __webpack_require__("../../../../../src/app/discussion/discussion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscussionComponent = (function () {
    function DiscussionComponent(route, location, service, sessionService) {
        this.route = route;
        this.location = location;
        this.service = service;
        this.sessionService = sessionService;
        this.title = "Discussion on ...";
        this.newReply = new __WEBPACK_IMPORTED_MODULE_3__custom_types__["b" /* Reply */]();
        this.currentPage = 1;
    }
    DiscussionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getReplies(params.get('id'), null);
        })
            .subscribe(function (res) {
            _this.replies = res;
        });
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.countReplies(params.get('id'));
        })
            .subscribe(function (res) {
            _this.replyCount = parseInt(res);
        });
        this.session = this.sessionService.checkSession(5);
    };
    DiscussionComponent.prototype.showMore = function () {
        var _this = this;
        this.currentPage++;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getReplies(params.get('id'), {
                page: _this.currentPage,
                last: _this.replies[_this.replies.length - 1].datetime
            });
        })
            .subscribe(function (res) {
            for (var i = 0; i < res.length; i++)
                _this.replies.push(res[i]);
        });
    };
    DiscussionComponent.prototype.postReply = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.reply(params.get('id'), _this.newReply);
        })
            .subscribe(function (res) {
            _this.newReply.datetime = res.datetime;
            _this.replyCount++;
            _this.newReply = new __WEBPACK_IMPORTED_MODULE_3__custom_types__["b" /* Reply */]();
        });
    };
    return DiscussionComponent;
}());
DiscussionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "comments",
        template: __webpack_require__("../../../../../src/app/discussion/discussion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/discussion/discussion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__discussion_service__["a" /* DiscussionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__discussion_service__["a" /* DiscussionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__session_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], DiscussionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=discussion.component.js.map

/***/ }),

/***/ "../../../../../src/app/discussion/discussion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscussionService = (function () {
    function DiscussionService(http) {
        this.http = http;
    }
    DiscussionService.prototype.reply = function (id, data) {
        return this.http
            .post("/api/topics/" + id + "/discussion", data)
            .map(function (res) { return res.json(); });
    };
    DiscussionService.prototype.getReplies = function (id, data) {
        return this.http
            .get("/api/topics/" + id + "/discussion", this.optionParams(data))
            .map(function (res) { return res.json(); });
    };
    DiscussionService.prototype.countReplies = function (id) {
        return this.http
            .get("/api/topics/" + id + "/count")
            .map(function (res) { return res.json().count; });
    };
    // I have similar one in topics.service 
    // It's even better if I extract it somewhere
    DiscussionService.prototype.optionParams = function (options) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        if (options) {
            params.set("page", options.page);
            params.set("last", options.last);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            search: params
        });
    };
    return DiscussionService;
}());
DiscussionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DiscussionService);

var _a;
//# sourceMappingURL=discussion.service.js.map

/***/ }),

/***/ "../../../../../src/app/session/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n    width: 480px;\n    margin: 0 auto;\n    margin-top: 30px;\n    padding-bottom: 10px;\n    background-color: #0e0e0e;\n    border: 1px solid #070707;\n}\n\n.wrapper h2 {\n    margin-left: 10px;\n    margin-bottom: 5px;\n}\n\nform {\n    display: inline-block;\n    width: 460px;;\n    margin-left: 10px;\n}\n\nform input {\n    width: 80%;\n}\n\nform input[type=\"submit\"] {\n    width: initial;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h2>Log in</h2>\n    <form (ngSubmit)=\"loginSubmit()\">\n        <input \n            #username \n            [(ngModel)]=\"creds.username\"\n            placeholder=\"Username\" \n            name=\"username\">\n        <input \n            #password \n            [(ngModel)]=\"creds.password\"\n            placeholder=\"Password\" \n            type=\"password\" \n            name=\"password\">\n        <input type=\"submit\" value=\"Proceed\">\n        <p *ngIf=\"message\" class=\"warning\">\n            {{message}}\n        </p>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/session/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_types__ = __webpack_require__("../../../../../src/app/custom-types.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.creds = new __WEBPACK_IMPORTED_MODULE_3__custom_types__["a" /* Credentials */]();
    }
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.service.login(this.creds)
            .subscribe(function (res) {
            if (res.user && res.ok) {
                localStorage.setItem("kento", res.token);
                _this.service.setSession(res.user)
                    .then(function (session) {
                    _this.service.confirmLogin(session);
                    _this.router.navigate([""]);
                });
            }
            else
                _this.message = "Invalid credentials.";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "login",
        template: __webpack_require__("../../../../../src/app/session/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionGuard = (function () {
    function SessionGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    SessionGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.user.checkSession(5)
            .map(function (session) {
            var path = route.url.map(function (i) { return i.path; });
            return _this.activateHelper(path.join("/"), session);
        });
    };
    SessionGuard.prototype.activateHelper = function (path, session) {
        if (session)
            switch (path) {
                case "login":
                    this.router.navigate([""]);
                    return false;
                case "topics/create":
                    return true;
                case "topics/pending":
                    if (session.priority < 3)
                        return true;
                    else
                        this.router.navigate([""]);
                    return false;
                default:
                    this.router.navigate([""]);
                    return false;
            }
        else if (path === "login")
            return true;
        else {
            this.router.navigate([""]);
            return false;
        }
    };
    return SessionGuard;
}());
SessionGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SessionGuard);

var _a, _b;
//# sourceMappingURL=session.guard.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Observables


var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        // String source
        this.loginConfirmedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // Observable stream
        this.loginConfirmed$ = this.loginConfirmedSource.asObservable();
    }
    SessionService.prototype.login = function (creds) {
        return this.http.post("/api/session/login", creds)
            .map(function (res) { return res.json(); });
    };
    SessionService.prototype.checkSession = function (priority) {
        if (priority === void 0) { priority = 5; }
        return this.http.get("/api/session/check?priority=" + priority)
            .map(function (res) { return res.json().session; });
    };
    SessionService.prototype.logout = function () {
        return this.http.post("/api/session/logout", {})
            .map(function (res) { return res.json(); });
    };
    SessionService.prototype.verifySession = function (token) {
        return this.http.post('/api/session/verify-token', { token: token })
            .map(function (res) { return res.json(); });
    };
    SessionService.prototype.setSession = function (data) {
        this.sessionInfo = data;
        return Promise.resolve(this.sessionInfo);
    };
    SessionService.prototype.getSession = function () {
        return Promise.resolve(this.sessionInfo);
    };
    SessionService.prototype.confirmLogin = function (session) {
        this.loginConfirmedSource.next(session);
        this.loginConfirmedSource.complete();
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, p {\n    margin-left: 10px;\n}\n\ntable {\n    width: 940px;\n    margin: 10px;\n}\n\n/* Anchor will act like a cell */ \ntable a {\n    display: table-cell;\n    height: 75px;\n    background-color: #171717;\n    color: #ccc;\n    border-radius: 5px;\n    font-size: 16px;\n    text-align: center;\n    vertical-align: middle;\n}\n\ntable a:hover {\n    background-color: #1b7f67;\n    color: #eee;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\n<p>\n    Welcome! To get started pick up one of recommended topics or use search to find what you like.\n</p>\n\n<table>\n    <tr>\n        <!-- TODO: This should be automated / generated -->\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'books'}\">\n            Books\n        </a>\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'movies'}\">\n            Movies\n        </a>\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'shows'}\">\n            Shows\n        </a>\n    </tr>\n    <tr>\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'theatre'}\">\n            Theatre\n        </a>\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'music'}\">\n            Music\n        </a>\n        <a [routerLink]=\"['/topics']\" \n            [queryParams]=\"{category: 'science'}\">\n            Science\n        </a>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/shared/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/shared/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/dashboard.component.css")]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%; \n    box-shadow:             1px 0px 3px 0px #070707;    \n    background-color: #171717;\n    padding: 0 5px 0 5px;\n    z-index: 5;\n}\n\ninput {\n    width: 300px;\n    font-size: 16px;\n    background-color: #111;\n}\n\n.search .result {\n    background-color: #222;\n    width: 100%; \n    margin: 0 auto;\n    margin-top: 5px;\n    text-align: left;\n    overflow: hidden;\n}\n\n.search .result a {\n    display: block;\n    margin-left: 10px; \n    background-color: #272727;\n    color: #ddd;\n    padding: 5px;\n}\n\n/* My account */ \nh2 {\n    margin: 5px 10px;\n    font-weight: normal;\n    color: #fa4a46;\n    font-size: 20px;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\nul li {\n    background-color: #222;\n    color: #eee;\n    padding-left: 10px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer;\n    font-size: 15px;\n}\n\nul li:hover {\n    background-color: #2e2e2e;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"present\" class=\"search\">\n    <input #searchBox placeholder=\"Search\" (keyup)=\"search(searchBox.value)\">\n    <div class=\"result\">\n        <a \n            [routerLink]=\"['/topic', item._id]\" \n            *ngFor=\"let item of found\">\n            {{item.title}} in {{item.category}}\n        </a>\n    </div>\n    <div *ngIf=\"session\">\n        <h2>My account</h2>\n        <ul>\n            <li routerLink=\"/topics/create\">Submission</li>\n            <!-- START OF TODO -->\n            <li>Saves</li>\n            <li>Runs</li>\n            <li>People</li>\n            <li>Statistics</li>\n            <li>Settings</li>\n            <!-- END OF TODO -->\n        </ul>\n    </div>\n    <div *ngIf=\"session && session.priority <= 3\">\n        <h2>Moderation</h2>\n        <ul>\n            <a routerLink=\"/topics/pending\"><li>Pending</li></a>\n            <li routerLink=\"/topics/rejected\">Rejects</li>\n            <li>Users</li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topic_topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_types__ = __webpack_require__("../../../../../src/app/custom-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Observable class extensions

// Observable operators




var SearchComponent = (function () {
    function SearchComponent(topicService) {
        this.topicService = topicService;
        this.present = false;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            return term ? _this.topicService.searchTopic(term)
                : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        })
            .subscribe(function (topics) { return _this.found = topics; });
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SearchComponent.prototype, "present", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__custom_types__["d" /* Session */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_types__["d" /* Session */]) === "function" && _a || Object)
], SearchComponent.prototype, "session", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "search",
        template: __webpack_require__("../../../../../src/app/shared/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__topic_topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__topic_topic_service__["a" /* TopicService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/new-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    width: 100%;\n    overflow: hidden;\n}\n\nh2, p {\n    margin-left: 10px;\n}\n\nform {\n    width: 50%;\n    display: inline-block;\n    white-space: nowrap;\n    vertical-align: top;\n}\n\nform > button {\n    display: block;\n    margin: 15px 0px;\n}\n\nform > input, form > textarea {\n    width: 70%;\n}\n\nform > input[type=\"checkbox\"] {\n    width: initial;\n}\n\n.dummy {\n    position: relative;\n    display: inline-block;\n    white-space: nowrap;\n    vertical-align: top;\n}\n\n.dummy img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 100%;\n    width: 100px;\n    height: 100px;\n    position: absolute; \n    top: 5px;\n    left: 5px;\n}\n\n.dummy h2 {\n    position: absolute;\n    top: 10px;\n    left: 120px;\n    margin: 0;\n    font-size: 20px;\n}\n\n.dummy h4 {\n    position: absolute;\n    top: 32px;\n    left: 120px;\n    margin: 0;\n    font-weight: normal;\n}\n\n.dummy .desc {\n    position: absolute;\n    top: 120px;\n    left: 5px;\n    margin: 0;\n    font-size: 14px;\n}\n\n.dummy .info {\n    position: absolute; \n    top: 37px;\n    left: 120px;\n}\n\n.dummy .info p {\n    display: inline-block;\n    font-size: 13px;\n}\n\n.separator {\n    display: inline-block;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/new-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\" *ngIf=\"message.show\">\n    Your request has been sent. The topic will be \n    available to you after approval on the link \n    http://www.corava.kokos/{{message._id}}.\n</div>\n<h2>Submit a topic</h2>\n<p>\n    Enter details about new topic. If you \n    are not sure how to do it properly please read \n    instructions. \n</p>\n\n<div class=\"container\">\n    <form [formGroup]=\"topicForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(topicForm, f)\">\n        <input \n            formControlName=\"title\"\n            placeholder=\"Title\" required>\n\n        <input \n            formControlName=\"author\"\n            placeholder=\"Author\" required>\n\n        <textarea \n            formControlName=\"description\"\n            placeholder=\"Topic description here\"\n            required>\n        </textarea>\n\n        <h3>Optional fields</h3>\n        <input \n            formControlName=\"imgUrl\"\n            placeholder=\"Image URL\">\n        <input \n            type=\"checkbox\"\n            (change)=\"optionalInput($event.target.name)\"\n            *ngIf=\"!optional.year\"\n            name=\"year\"><em *ngIf=\"!optional.year\">Year</em>\n        <input \n            type=\"checkbox\"\n            (change)=\"optionalInput($event.target.name)\"\n            *ngIf=\"!optional.genre\"\n            name=\"genre\"><em *ngIf=\"!optional.genre\">Genre</em>\n        <input \n            formControlName=\"year\"\n            *ngIf=\"optional.year\"\n            name=\"year\" type=\"text\"\n            placeholder=\"Year\">\n        <input \n            formControlName=\"genre\"\n            *ngIf=\"optional.genre\"\n            name=\"genre\" type=\"text\"\n            placeholder=\"Genre\">\n            \n        <button *ngIf=\"topicForm.valid\" type=\"submit\" >\n            Submit\n        </button>\n    </form>\n\n    <div class=\"dummy\">\n        <h2 *ngIf=\"topicForm.value.title\">\n            {{topicForm.value.title}}\n        </h2>\n        <h2 *ngIf=\"!topicForm.value.title\">\n            Enter title of the topic\n        </h2> \n        <h4 *ngIf=\"topicForm.value.author\">\n            Written by {{topicForm.value.author}}\n        </h4>\n        <h4 *ngIf=\"!topicForm.value.author\">\n            Written by ...\n        </h4>\n        <p *ngIf=\"topicForm.value.description\" class=\"desc\">\n            {{topicForm.value.description}}\n        </p>\n        <p *ngIf=\"!topicForm.value.description\" class=\"desc\">\n            Write something about topic... \n        </p>\n        <img [src]=\"topicForm.value.imgUrl ? topicForm.value.imgUrl : defImgUrl\">\n        <div class=\"info\">\n            <p *ngIf=\"topicForm.value.year\">{{topic.year}}</p>\n            <p *ngIf=\"topicForm.value.genre\">{{topic.genre}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topic/new-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_types__ = __webpack_require__("../../../../../src/app/custom-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewTopicComponent = (function () {
    function NewTopicComponent(router, service) {
        this.router = router;
        this.service = service;
        this.message = {
            show: false,
            _id: null
        };
        this.topic = new __WEBPACK_IMPORTED_MODULE_3__custom_types__["c" /* Topic */]();
        this.defImgUrl = 'assets/images/book-avatar.jpg';
        this.optional = {
            year: false,
            genre: false
        };
    }
    NewTopicComponent.prototype.ngOnInit = function () {
        this.topicForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.title, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(40),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[\\w\\s\'\".,]+")
            ]),
            'author': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.author, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(25),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[\\w\\s\'.]+")
            ]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.description, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(500)
            ]),
            'imgUrl': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.imgUrl),
            'year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.year),
            'genre': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.topic.genre)
        });
    };
    NewTopicComponent.prototype.onSubmit = function (form, formObject) {
        var _this = this;
        this.service.insertTopic(this.filterForm(form.value))
            .subscribe(function (res) {
            if (res.navigate)
                _this.router.navigate(['/topic', res._id]);
            else {
                formObject.resetForm();
                _this.message._id = res._id;
                _this.message.show = true;
            }
        });
    };
    NewTopicComponent.prototype.optionalInput = function (targetName) {
        this.optional[targetName] = true;
    };
    // Remove empty/null props from form object
    NewTopicComponent.prototype.filterForm = function (topic) {
        var filtered = new __WEBPACK_IMPORTED_MODULE_3__custom_types__["c" /* Topic */]();
        for (var i = 0; i < Object.keys(topic).length; i++) {
            var key = Object.keys(topic)[i];
            if (topic[key])
                filtered[key] = topic[key];
        }
        return filtered;
    };
    return NewTopicComponent;
}());
NewTopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "topic-book",
        template: __webpack_require__("../../../../../src/app/topic/new-topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/new-topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__topic_service__["a" /* TopicService */]) === "function" && _b || Object])
], NewTopicComponent);

var _a, _b;
//# sourceMappingURL=new-topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/pending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n    margin: 20px auto;\n    margin-top: 20px;\n    width: 100%;\n}\n\ntr:nth-child(odd) {\n    background-color: #222;\n}\n\ntr:nth-child(even) {\n    background-color: #171717;\n}\n\ntd {\n    color: #eee;\n    padding: 5px 10px;\n    text-align: center;\n}\n\ntd:first-child {\n    text-align: left;\n}\n\ntd a {\n   cursor: pointer; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/pending.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n    <tr *ngFor=\"let topic of topics\">\n        <td>{{topic.title}}</td>\n        <td>{{topic.author}}</td>\n        <td><a (click)=\"answer(topic._id, true)\">Approve</a></td>\n        <td><a (click)=\"answer(topic._id, false)\">Reject</a></td>\n        <td><a [routerLink]=\"['/topic', topic._id]\">Visit</a></td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/topic/pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PendingComponent = (function () {
    function PendingComponent(service, sessionService) {
        this.service = service;
        this.sessionService = sessionService;
    }
    PendingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPending()
            .subscribe(function (res) { return _this.topics = res; });
    };
    PendingComponent.prototype.answer = function (id, value) {
        var _this = this;
        this.service.pending(id, value)
            .subscribe(function () {
            var i = _this.topics.findIndex(function (o) { return o._id === id; });
            _this.topics.splice(i, 1);
        });
    };
    return PendingComponent;
}());
PendingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__("../../../../../src/app/topic/pending.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/pending.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], PendingComponent);

var _a, _b;
//# sourceMappingURL=pending.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic-single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#update {\n    display: none;\n}\n\n.topic-container {\n    position: relative;\n    display: block;\n    min-height: 200px;\n    margin: 10px;\n}\n\n.topic-container img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: absolute; \n    border-radius: 100%;\n    top: 10px;\n    left: 10px;\n    height: 130px;\n    width: 130px;\n}\n\n.topic-container h2 {\n    position: absolute;\n    top: 15px;\n    left: 200px;\n    margin: 0; \n}\n\n.topic-container h4 {\n    position: absolute;\n    top: 50px;\n    left: 200px;\n    margin: 0;\n}\n\n.topic-container p.desc {\n    position: absolute;\n    top: 140px;\n}\n\n.topic-container .info {\n    position: absolute;\n    top: 80px;\n    left: 200px;\n}\n\n.topic-container .info p {\n    margin: 0;\n    margin-bottom: 5px;\n    display: inline-block;\n}\n\nbutton, a {\n    margin: 10px;\n    margin-right: 0;\n}\n\nform#update {\n    display: block;\n    text-align: center;\n}\n\nform#update input {\n    display: inline-block;\n}\n\nform#update textarea {\n    margin: 0 auto;\n    margin-top: 10px;\n    width: 80%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic-single.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"topic && !topic.reviewed\" class=\"message\">\n    This topic is not approved yet. If you want, choose action to apply upon this topic.\n    <button>Approve topic</button><button>Reject</button>\n</div>\n\n<div *ngIf=\"topic && !topic.passed && topic.reviewed\" class=\"message\">\n    This topic is rejected by site moderators and will be deleted completely\n    on upcoming maintenance. <button>Approve topic, instead?</button>\n</div>\n\n<div *ngIf=\"topic\">\n    <div class=\"topic-container\">\n        <img [src]=\"topic.imgUrl ? topic.imgUrl : 'assets/images/book-avatar.jpg'\">\n        <h2>{{topic.title}}</h2>\n        <h4>Written by {{topic.author}}</h4>\n        <p *ngIf=\"topic.description\" class=\"desc\">{{topic.description}}</p>\n        <div class=\"info\">\n            <p *ngIf=\"topic.year\">Publishing year: {{topic.year}}</p>\n            <p *ngIf=\"topic.genre\">Genre: {{topic.genre}}</p>\n        </div>\n    </div>\n    <p>\n        <a [routerLink]=\"['/topic', topic._id, 'discussion']\">\n            Visit Discussion Page\n        </a>\n    </p>\n    <button *ngIf=\"session|async\" (click)=\"toggleUpdate()\">\n        Toggle Update\n    </button>\n    <button *ngIf=\"session|async\" (click)=\"remove()\">\n        Delete\n    </button>\n\n    <!-- Break this in two modules (one for update and other for view) -->\n    <form \n        (ngSubmit)=\"update()\" id=\"update\"\n        [style.display]=\"hideUpdate ? 'none' : 'block'\">\n        <input placeholder=\"Author\" [(ngModel)]=\"topic.author\" name=\"author\">\n        <input placeholder=\"Title\" [(ngModel)]=\"topic.title\" name=\"title\">     \n        <input placeholder=\"Category\" [(ngModel)]=\"topic.category\" name=\"category\">\n        <input placeholder=\"Year\" [(ngModel)]=\"topic.year\" name=\"year\">\n        <input placeholder=\"Genre\" [(ngModel)]=\"topic.genre\" name=\"price\">\n        <textarea [(ngModel)]=\"topic.description\" name=\"desc\"></textarea>\n        <input placeholder=\"Image URL\" [(ngModel)]=\"topic.imgUrl\" name=\"imgUrl\">\n        <button type=\"submit\">Apply</button>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic/topic-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_session_service__ = __webpack_require__("../../../../../src/app/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





"";

var TopicSingleComponent = (function () {
    function TopicSingleComponent(route, router, service, sessionService, location) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sessionService = sessionService;
        this.location = location;
        this.hideUpdate = true;
    }
    TopicSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getOneTopic(params.get('id'));
        })
            .subscribe(function (res) {
            _this.topic = res;
        }, function (err) {
            if (err.message == 401)
                _this.router.navigate([""]);
        });
        this.session = this.sessionService.checkSession(2);
    };
    TopicSingleComponent.prototype.update = function () {
        var _this = this;
        this.service.updateTopic(this.topic)
            .subscribe(function () { return _this.hideUpdate = true; });
    };
    TopicSingleComponent.prototype.remove = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.deleteTopic(params.get("id"));
        })
            .subscribe(function (r) { return _this.location.back(); });
        // Should check if deletion has succeed before redirect 
    };
    TopicSingleComponent.prototype.toggleUpdate = function () {
        this.hideUpdate = !this.hideUpdate;
    };
    return TopicSingleComponent;
}());
TopicSingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__("../../../../../src/app/topic/topic-single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic-single.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__session_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__session_session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _e || Object])
], TopicSingleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topic-single.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicService = (function () {
    function TopicService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ "Content-Type": "application/json" });
    }
    TopicService.prototype.getTopics = function (category) {
        var options = this.optionParams("category", category);
        return this.http.get("/api/topics", options)
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.getOneTopic = function (id) {
        return this.http.get("/api/topics/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (err, caught) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error(err.status));
        });
    };
    TopicService.prototype.getPending = function () {
        return this.http.get("/api/topics/pending")
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.pending = function (id, value) {
        return this.http.post("/api/topics/pending", JSON.stringify({ id: id, value: value }), { headers: this.header })
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.insertTopic = function (topic) {
        return this.http.post("/api/topics", JSON.stringify(topic), { headers: this.header }).map(function (res) { return res.json(); });
    };
    TopicService.prototype.updateTopic = function (topic) {
        return this.http.put("/api/topics/" + topic._id, JSON.stringify(topic), { headers: this.header }).map(function (res) { return res.json(); });
    };
    TopicService.prototype.deleteTopic = function (id) {
        return this.http.delete("/api/topics/" + id)
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.searchTopic = function (value) {
        var options = this.optionParams("search", value);
        return this.http.get("/api/topics", options)
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.optionParams = function (key, value) {
        // Extend to work with arrays if needed
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set(key, value);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            search: params
        });
    };
    return TopicService;
}());
TopicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TopicService);

var _a;
//# sourceMappingURL=topic.service.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topics {\n    width: 100%;\n    padding-top: 15px;\n    display: inline-block;\n}\n\n.topic-wrapper {\n    position: relative; \n    width: 720px;\n    height: 120px;\n    margin-bottom: 10px;\n    float: left;\n}\n\n.topic-wrapper img {\n    width: 90px; \n    height: 90px;\n    margin: 15px;\n    border-radius: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.topic-wrapper .title {\n    font-family: 'Source Sans Pro', sans-serif;\n    position: absolute;\n    display: inline-block;\n    margin: 0; \n    padding: 0; \n    top: 10px; \n    left: 130px;\n}\n\n.topic-wrapper .title a {\n    font-size: 23px;\n    text-decoration: none; \n    color: #41c9a7;\n    font-weight: bold;\n}\n\n.topic-wrapper a:hover {\n    text-decoration: underline;\n}\n\n.topic-wrapper h4 {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-weight: normal;\n    position: absolute;\n    display: inline-block;\n    margin: 0; \n    padding: 0; \n    top: 40px;\n    left: 130px;\n}\n\n.topic-wrapper p {\n    font-size: 14px;\n    display: inline-block;\n    position: absolute;\n    top: 50px;\n    left: 130px;\n    width: 70%;\n}\n\n.topic-status {\n    height: 120px;\n    width: 120px;\n    background-color: #171717;\n    border-radius: 5px;\n    text-align: center;\n    color: #eee;\n    float: left;\n    font-size: 14px;\n}\n\n.topic-status .count {\n    display: block;\n    font-size: 25px;\n    margin-top: 5px;\n    color: #ffc632;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topics\">\n    <div *ngFor=\"let topic of topics\">\n        <div class=\"topic-wrapper\">\n            <img [src]=\"topic.imgUrl ? topic.imgUrl : 'assets/images/book-avatar.jpg'\">\n\n            <div class=\"title\">\n                <a [routerLink]=\"['/topic', topic._id]\">{{topic.title}}</a>\n            </div>\n\n            <h4>Written by {{topic.author}}</h4>\n\n            <p>\n                {{topic.description}}\n            </p>\n        </div>\n        <div class=\"topic-status\">\n            <a  [routerLink] =\"['/topic', topic._id]\"\n                class=\"count\">\n                1 \n            </a>\n            People following \n\n            <a  [routerLink]=\"['/topic', topic._id, 'discussion']\"\n                class=\"count\">\n                {{topic.repliesCount}} \n            </a>\n            Replies on topic\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topic/topics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_types__ = __webpack_require__("../../../../../src/app/custom-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_service__ = __webpack_require__("../../../../../src/app/topic/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicsComponent = (function () {
    function TopicsComponent(router, topicService, route) {
        this.router = router;
        this.topicService = topicService;
        this.route = route;
        this.newTopic = new __WEBPACK_IMPORTED_MODULE_1__custom_types__["c" /* Topic */]();
    }
    TopicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap
            .switchMap(function (params) {
            return _this.topicService
                .getTopics(params.get("category"));
        })
            .subscribe(function (r) { return _this.topics = r; });
    };
    return TopicsComponent;
}());
TopicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "topics",
        template: __webpack_require__("../../../../../src/app/topic/topics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__topic_service__["a" /* TopicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], TopicsComponent);

var _a, _b, _c;
//# sourceMappingURL=topics.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map