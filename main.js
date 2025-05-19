globalThis.$localize=Object.assign(globalThis.$localize || {},{locale:"fr"});
"use strict";(function(global,_global$ng,_global$ng2,_global$ng2$common,_global$ng$common,_global$ng$common$loc){(_global$ng=global.ng)!==null&&_global$ng!==void 0?_global$ng:global.ng={};(_global$ng2$common=(_global$ng2=global.ng).common)!==null&&_global$ng2$common!==void 0?_global$ng2$common:_global$ng2.common={};(_global$ng$common$loc=(_global$ng$common=global.ng.common).locales)!==null&&_global$ng$common$loc!==void 0?_global$ng$common$loc:_global$ng$common.locales={};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length,e=parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;if(i===0||i===1)return 1;if(e===0&&!(i===0)&&i%1000000===0&&v===0||!(e>=0&&e<=5))return 4;return 5}global.ng.common.locales["fr"]=["fr",[["AM","PM"],u,u],u,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],u,[["av. J.-C.","ap. J.-C."],u,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",u],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{"ARS":["$AR","$"],"AUD":["$AU","$"],"BEF":["FB"],"BMD":["$BM","$"],"BND":["$BN","$"],"BYN":[u,"\u0440."],"BZD":["$BZ","$"],"CAD":["$CA","$"],"CLP":["$CL","$"],"CNY":[u,"\xA5"],"COP":["$CO","$"],"CYP":["\xA3CY"],"EGP":[u,"\xA3E"],"FJD":["$FJ","$"],"FKP":["\xA3FK","\xA3"],"FRF":["F"],"GBP":["\xA3GB","\xA3"],"GIP":["\xA3GI","\xA3"],"HKD":[u,"$"],"IEP":["\xA3IE"],"ILP":["\xA3IL"],"ITL":["\u20A4IT"],"JPY":[u,"\xA5"],"KMF":[u,"FC"],"LBP":["\xA3LB","\xA3L"],"MTP":["\xA3MT"],"MXN":["$MX","$"],"NAD":["$NA","$"],"NIO":[u,"$C"],"NZD":["$NZ","$"],"PHP":[u,"\u20B1"],"RHD":["$RH"],"RON":[u,"L"],"RWF":[u,"FR"],"SBD":["$SB","$"],"SGD":["$SG","$"],"SRD":["$SR","$"],"TOP":[u,"$T"],"TTD":["$TT","$"],"TWD":[u,"NT$"],"USD":["$US","$"],"UYU":["$UY","$"],"WST":["$WS"],"XCD":[u,"$"],"XPF":["FCFP"],"ZMW":[u,"Kw"]},"ltr",plural,[[["minuit","midi","mat.","ap.m.","soir","nuit"],u,["minuit","midi","du matin","de l\u2019apr\xE8s-midi","du soir","du matin"]],[["minuit","midi","mat.","ap.m.","soir","nuit"],u,["minuit","midi","matin","apr\xE8s-midi","soir","nuit"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]]]})(globalThis);;
"use strict";
(self["webpackChunklive_resume"] = self["webpackChunklive_resume"] || []).push([["main"],{

/***/ 9684:
/*!******************************************************!*\
  !*** ./src/app/404/page-not-found-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundRoutingModule: () => (/* binding */ PageNotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ 4546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: "page-not-found",
  component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class PageNotFoundRoutingModule {
  static {
    this.ɵfac = function PageNotFoundRoutingModule_Factory(t) {
      return new (t || PageNotFoundRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PageNotFoundRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4546:
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 38,
      vars: 0,
      consts: [[1, "page-not-found-text"], [1, "container"], [1, "caveman"], [1, "leg"], [1, "foot"], [1, "fingers"], [1, "shape"], [1, "circle"], [1, "head"], [1, "eye"], [1, "nose"], [1, "mouth"], [1, "arm-right"], [1, "club"], ["href", "/"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7)(13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3)(25, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7)(29, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8)(31, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go back to Home Page.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["a[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: 12em;\n  background-color: #3a5f8e;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: #2a3c52;\n}\n\n\n\n.page-not-found-text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(42, 60, 82, 0.1);\n  font-size: 30em;\n  text-align: center;\n  top: 40%;\n  height: 400px;\n}\n.page-not-found-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: 300px;\n  width: 500px;\n}\n.container[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(42, 60, 82, 0.1);\n  border-radius: 12px;\n  bottom: 40px;\n  height: 12px;\n  left: 80px;\n  width: 350px;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.1s;\n}\n\n\n\n.caveman[_ngcontent-%COMP%] {\n  height: 300px;\n  position: absolute;\n  width: 250px;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1) {\n  right: 20px;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20px;\n  transform: rotateY(180deg);\n}\n\n.head[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2a3c52;\n  border-radius: 50px;\n  height: 140px;\n  left: 60px;\n  top: 25px;\n  width: 65px;\n}\n.head[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 10px;\n  height: 20px;\n  width: 7px;\n}\n.head[_ngcontent-%COMP%]:after {\n  left: 35px;\n  top: -8px;\n  transform: rotate(20deg);\n}\n.head[_ngcontent-%COMP%]:before {\n  left: 30px;\n  top: -8px;\n  transform: rotate(-20deg);\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #e2af90;\n  border-radius: 50px;\n  height: 16px;\n  left: 45%;\n  top: 40px;\n  width: 48px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 50%;\n  height: 5px;\n  width: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after {\n  left: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  right: 9px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #d6a486;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 35px;\n  left: 45%;\n  top: 12px;\n  width: 15px;\n}\n\n.shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  height: 140px;\n  overflow: hidden;\n  top: 70px;\n  width: 140px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after {\n  left: 50px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  left: 60px;\n  top: 45px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  left: -12px;\n  top: 80px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10px;\n  top: 0;\n  transform: rotate(90deg);\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):after {\n  left: 65px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):before {\n  display: none;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3f5571;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3a5f8e;\n}\n\n.arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e2af90;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 50px;\n  box-sizing: border-box;\n  height: 180px;\n  left: 135px;\n  top: 80px;\n  transform-origin: 30px 30px;\n  width: 60px;\n  z-index: 1;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 110px solid #601513;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  height: 0;\n  left: -60px;\n  top: 120px;\n  transform: rotate(70deg);\n  width: 20px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after, .arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #601513;\n  border-radius: 50%;\n  left: 0;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after {\n  height: 20px;\n  width: 20px;\n  top: -10px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  height: 40px;\n  width: 40px;\n  left: -10px;\n  top: 90px;\n}\n\n.leg[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  height: 55px;\n  top: 200px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 10px;\n  left: -5px;\n  top: 15px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 25px 25px 0 0;\n  height: 25px;\n  left: -38px;\n  top: 30px;\n  width: 50px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%], .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #e2af90;\n  border-radius: 50%;\n  bottom: 0;\n  height: 15px;\n  transform-origin: bottom;\n  width: 15px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after {\n  left: -6px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before {\n  left: 8px;\n  transform: scale(0.6);\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%] {\n  left: 15px;\n  transform: scale(0.6);\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  left: 11px;\n  content: \"\";\n}\n\n.leg[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #bf9176;\n  left: 95px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%] {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:before {\n  display: none;\n}\n\n.leg[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #d6a486;\n  left: 115px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #d6a486;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2)   .foot[_ngcontent-%COMP%] {\n  background-color: #d6a486;\n}\n\n\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .arm-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .arm-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .head[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .head[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:before {\n  animation: _ngcontent-%COMP%_eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:before {\n  animation: _ngcontent-%COMP%_eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@keyframes _ngcontent-%COMP%_shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQU5FLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQU1FLGdCQUFBO0VBQ0EseUJBaENXO0VBaUNYLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBM0JKO0FBNkJJO0VBQ0kseUJBQUE7QUEzQlI7O0FBK0JBLGNBQUE7QUFDQTtFQTNCRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUEyQkEsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQTFCRjtBQTRCRTtFQUNJLFNBQUE7QUExQk47O0FBOEJBO0VBekNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQXlDQSxhQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EscUJBQUE7QUF4Qko7O0FBNEJBLFlBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBQXdCLFdBQUE7QUF4QnhCOztBQXlCQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLHlCQTVGVztFQTZGWCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFyQkY7QUFzQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkE1R1U7RUE2R1YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXBCSjtBQXNCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFwQko7QUFzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBcEJKO0FBc0JFO0VBekdBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBMEdFLHlCQTFIVztFQTJIWCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFuQko7QUFvQkk7RUF4SEYsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUF5SEksV0FBQTtFQUNBLHlCQXhJUTtFQXlJUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBakJOO0FBbUJJO0VBQ0UsU0FBQTtBQWpCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFtQkk7RUEzSEYsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBMkhJLHlCQWpKUztFQWtKVCw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBZk47O0FBb0JBO0VBaEpFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBaUpBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFoQkY7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFmSjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkTjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBZE47QUFnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWROO0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFmSjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7QUFoQko7QUFpQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWZOO0FBaUJJO0VBQ0UsYUFBQTtBQWZOOztBQW9CQTtFQUNFLHlCQWpOYTtBQWdNZjtBQW1CRTtFQUNFLHlCQW5OVztBQWtNZjtBQWtCSTtFQUFvQix5QkFwTlQ7QUFxTWY7O0FBbUJBO0VBQ0UseUJBek5hO0FBeU1mO0FBaUJFO0VBQ0kseUJBNU5TO0FBNk1mO0FBZ0JNO0VBQW9CLHlCQTdOWDtBQWdOZjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLHlCQWpPYTtFQWtPYiw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZEY7QUFnQkU7RUFDRSxrQkFBQTtFQUNELGtDQUFBO0VBQ0MsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQWRKO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdFBTO0VBdVBULGtCQUFBO0VBQ0EsT0FBQTtBQWROO0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZE47QUFnQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZE47O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWhCRjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFoQko7QUFpQkk7RUFDRSxrQkFBQTtFQUNBLHlCQXJTUztFQXNTVCxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBZk47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQWZOO0FBaUJJO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBaEJOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFoQk47O0FBcUJBO0VBQ0UseUJBaFVhO0VBaVViLFVBQUE7QUFsQkY7QUFtQkU7RUFBVSx5QkFsVUc7QUFrVGY7QUFpQkU7RUFDRSx5QkFwVVc7QUFxVGY7QUFnQkk7RUFBVSx5QkFyVUM7QUF3VGY7QUFjSTtFQUFXLGFBQUE7QUFYZjs7QUFlQTtFQUNFLHlCQTVVYTtFQTZVYixXQUFBO0FBWkY7QUFhRTtFQUFVLHlCQTlVRztBQW9VZjtBQVdFO0VBQVEseUJBL1VLO0FBdVVmOztBQVdBLGNBQUE7QUFDQTtFQUNFLHVFQUFBO0FBUkY7O0FBV0E7RUFDRSx1RUFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUFLLG9CQUFBO0VBUEw7RUFRQTtJQUFPLDBCQUFBO0VBTFA7QUFDRjtBQU9BO0VBQ0Usd0VBQUE7QUFMRjs7QUFRQTtFQUNFLHdFQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQUssU0FBQTtFQUpMO0VBS0E7SUFBTSxTQUFBO0VBRk47RUFHQTtJQUFNLFNBQUE7RUFBTjtFQUNBO0lBQU8sU0FBQTtFQUVQO0FBQ0Y7QUFBQTs7RUFFRSx1RUFBQTtBQUVGOztBQUNBOztFQUVFLHVFQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQUssV0FBQTtFQUdMO0VBRkE7SUFBTSxXQUFBO0VBS047RUFKQTtJQUFNLFdBQUE7RUFPTjtFQU5BO0lBQU8sV0FBQTtFQVNQO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJsYWNrOiAjMmEzYzUyO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsdWUtMTogIzNhNWY4ZTtcbiRjb2xvci1ibHVlLTI6ICMzZjU1NzE7XG4kY29sb3Itc2tpbi0xOiAjZTJhZjkwO1xuJGNvbG9yLXNraW4tMjogI2Q2YTQ4NjtcbiRjb2xvci1za2luLTM6ICNiZjkxNzY7XG4kY29sb3ItaGFpcjogIzJhM2M1MjtcbiRjb2xvci13b29kLTE6ICM2MDE1MTM7XG4kY29sb3Itd29vZC0yOiAjNDEwYTA5O1xuXG5AbWl4aW4gdG9wNTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiBsZWZ0NTAge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyZWQge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5hIHtcbiAgICBAaW5jbHVkZSBjZW50ZXJlZDtcblxuICAgIG1hcmdpbi10b3A6IDEyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gICAgfVxufVxuXG4vKiBUaGUgc2NlbmUgKi9cbi5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xuICBmb250LXNpemU6IDMwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0MCU7XG4gIGhlaWdodDogNDAwcHg7XG5cbiAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxufVxuXG4vKiBjYXZlbWFuICovXG4uY2F2ZW1hbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgeyByaWdodDogMjBweDsgfVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhhaXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogMjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgbGVmdDogMzVweDtcbiAgICB0b3A6IC04cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIC5leWUge1xuICAgIEBpbmNsdWRlIGxlZnQ1MDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGVmdDogNDUlO1xuICAgIHRvcDogNDBweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSB0b3A1MDtcbiAgICAgIFxuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDVweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIHJpZ2h0OiA5cHg7XG4gICAgfVxuICAgIC5ub3NlIHtcbiAgICAgIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yO1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbGVmdDogNDUlO1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5zaGFwZSB7XG4gIEBpbmNsdWRlIGxlZnQ1MDsgXG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDcwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMjBweDsgICAgICBcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICB0b3A6IDQ1cHg7XG4gICAgfVxuICB9XG4gIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiAtMTJweDtcbiAgICB0b3A6IDgwcHg7XG4gIH1cblxuICAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDY1cHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xO1xuXG4gIC5jaXJjbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0yOyBcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IH1cbiAgfVxufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjtcbiAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xOyBcbiAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTsgfVxuICB9XG59XG5cbi5hcm0tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTgwcHg7XG4gIGxlZnQ6IDEzNXB4OyBcbiAgdG9wOiA4MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMHB4IDMwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICB6LWluZGV4OiAxO1xuXG4gIC5jbHViIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm9yZGVyLWJvdHRvbTogMTEwcHggc29saWQgJGNvbG9yLXdvb2QtMTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IC02MHB4O1xuICAgIHRvcDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpO1xuICAgIHdpZHRoOiAyMHB4O1xuXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13b29kLTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIHRvcDogOTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxlZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA1NXB4OyAgXG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IC01cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgLmZvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiAtMzhweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUsIC5maW5nZXJzLCAuZmluZ2VyczphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogLTZweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuXG4gICAgLmZpbmdlcnMge1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG4gICAgLmZpbmdlcnM6YWZ0ZXIge1xuICAgICAgbGVmdDogMTFweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDEpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7XG4gIGxlZnQ6IDk1cHg7XG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyB9XG4gIC5mb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyBcbiAgICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMzsgfVxuICAgICY6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDIpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XG4gIGxlZnQ6IDExNXB4OyAgIFxuICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjsgfVxuICAuZm9vdCB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7IH1cbn1cblxuLyogYW5pbWF0aW9uICovXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgYXJtLWFuaW1hIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5oZWFkIHtcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBoZWFkLWFuaW1hIHtcbiAgMCUgeyB0b3A6IDI1cHg7IH1cbiAgNDIlIHsgdG9wOiAyNXB4OyB9XG4gIDQ1JSB7IHRvcDogNTBweDsgfVxuICAxMDAlIHsgdG9wOiAyNXB4OyB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLCBcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTphZnRlciwgXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTpiZWZvcmUge1xuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGV5ZS1hbmltYSB7XG4gIDAlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDIlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDUlIHsgaGVpZ2h0OiAxcHg7IH1cbiAgMTAwJSB7IGhlaWdodDogNXB4OyB9XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93LWFuaW1hIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQU5FLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQU1FLGdCQUFBO0VBQ0EseUJBaENXO0VBaUNYLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBM0JKO0FBNkJJO0VBQ0kseUJBQUE7QUEzQlI7O0FBK0JBLGNBQUE7QUFDQTtFQTNCRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUEyQkEsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQTFCRjtBQTRCRTtFQUNJLFNBQUE7QUExQk47O0FBOEJBO0VBekNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQXlDQSxhQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EscUJBQUE7QUF4Qko7O0FBNEJBLFlBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBQXdCLFdBQUE7QUF4QnhCOztBQXlCQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLHlCQTVGVztFQTZGWCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFyQkY7QUFzQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkE1R1U7RUE2R1YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXBCSjtBQXNCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFwQko7QUFzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBcEJKO0FBc0JFO0VBekdBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBMEdFLHlCQTFIVztFQTJIWCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFuQko7QUFvQkk7RUF4SEYsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUF5SEksV0FBQTtFQUNBLHlCQXhJUTtFQXlJUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBakJOO0FBbUJJO0VBQ0UsU0FBQTtBQWpCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFtQkk7RUEzSEYsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBMkhJLHlCQWpKUztFQWtKVCw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBZk47O0FBb0JBO0VBaEpFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBaUpBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFoQkY7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFmSjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkTjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBZE47QUFnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWROO0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFmSjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7QUFoQko7QUFpQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWZOO0FBaUJJO0VBQ0UsYUFBQTtBQWZOOztBQW9CQTtFQUNFLHlCQWpOYTtBQWdNZjtBQW1CRTtFQUNFLHlCQW5OVztBQWtNZjtBQWtCSTtFQUFvQix5QkFwTlQ7QUFxTWY7O0FBbUJBO0VBQ0UseUJBek5hO0FBeU1mO0FBaUJFO0VBQ0kseUJBNU5TO0FBNk1mO0FBZ0JNO0VBQW9CLHlCQTdOWDtBQWdOZjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLHlCQWpPYTtFQWtPYiw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZEY7QUFnQkU7RUFDRSxrQkFBQTtFQUNELGtDQUFBO0VBQ0MsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQWRKO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdFBTO0VBdVBULGtCQUFBO0VBQ0EsT0FBQTtBQWROO0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZE47QUFnQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZE47O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWhCRjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFoQko7QUFpQkk7RUFDRSxrQkFBQTtFQUNBLHlCQXJTUztFQXNTVCxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBZk47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQWZOO0FBaUJJO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBaEJOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFoQk47O0FBcUJBO0VBQ0UseUJBaFVhO0VBaVViLFVBQUE7QUFsQkY7QUFtQkU7RUFBVSx5QkFsVUc7QUFrVGY7QUFpQkU7RUFDRSx5QkFwVVc7QUFxVGY7QUFnQkk7RUFBVSx5QkFyVUM7QUF3VGY7QUFjSTtFQUFXLGFBQUE7QUFYZjs7QUFlQTtFQUNFLHlCQTVVYTtFQTZVYixXQUFBO0FBWkY7QUFhRTtFQUFVLHlCQTlVRztBQW9VZjtBQVdFO0VBQVEseUJBL1VLO0FBdVVmOztBQVdBLGNBQUE7QUFDQTtFQUNFLHVFQUFBO0FBUkY7O0FBV0E7RUFDRSx1RUFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUFLLG9CQUFBO0VBUEw7RUFRQTtJQUFPLDBCQUFBO0VBTFA7QUFDRjtBQU9BO0VBQ0Usd0VBQUE7QUFMRjs7QUFRQTtFQUNFLHdFQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQUssU0FBQTtFQUpMO0VBS0E7SUFBTSxTQUFBO0VBRk47RUFHQTtJQUFNLFNBQUE7RUFBTjtFQUNBO0lBQU8sU0FBQTtFQUVQO0FBQ0Y7QUFBQTs7RUFFRSx1RUFBQTtBQUVGOztBQUNBOztFQUVFLHVFQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQUssV0FBQTtFQUdMO0VBRkE7SUFBTSxXQUFBO0VBS047RUFKQTtJQUFNLFdBQUE7RUFPTjtFQU5BO0lBQU8sV0FBQTtFQVNQO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtBQUNGO0FBQ0Esb2xlQUFvbGUiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmxhY2s6ICMyYTNjNTI7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmx1ZS0xOiAjM2E1ZjhlO1xuJGNvbG9yLWJsdWUtMjogIzNmNTU3MTtcbiRjb2xvci1za2luLTE6ICNlMmFmOTA7XG4kY29sb3Itc2tpbi0yOiAjZDZhNDg2O1xuJGNvbG9yLXNraW4tMzogI2JmOTE3NjtcbiRjb2xvci1oYWlyOiAjMmEzYzUyO1xuJGNvbG9yLXdvb2QtMTogIzYwMTUxMztcbiRjb2xvci13b29kLTI6ICM0MTBhMDk7XG5cbkBtaXhpbiB0b3A1MCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGxlZnQ1MCB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbkBtaXhpbiBjZW50ZXJlZCB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmEge1xuICAgIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gICAgbWFyZ2luLXRvcDogMTJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhM2M1MjtcbiAgICB9XG59XG5cbi8qIFRoZSBzY2VuZSAqL1xuLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICBAaW5jbHVkZSBjZW50ZXJlZDtcblxuICBjb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gIGZvbnQtc2l6ZTogMzBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDQwJTtcbiAgaGVpZ2h0OiA0MDBweDtcblxuICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGVmdDogODBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgYW5pbWF0aW9uOiBzaGFkb3ctYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG59XG5cbi8qIGNhdmVtYW4gKi9cbi5jYXZlbWFuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSB7IHJpZ2h0OiAyMHB4OyB9XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5oZWFkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGFpcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAyNXB4O1xuICB3aWR0aDogNjVweDtcbiAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDdweDtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBsZWZ0OiAzNXB4O1xuICAgIHRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiAtOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIH1cbiAgLmV5ZSB7XG4gICAgQGluY2x1ZGUgbGVmdDUwO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICAgIEBpbmNsdWRlIHRvcDUwO1xuICAgICAgXG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogNXB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IDlweDtcbiAgICB9XG4gICAgLm5vc2Uge1xuICAgICAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBsZWZ0OiA0NSU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLnNoYXBlIHtcbiAgQGluY2x1ZGUgbGVmdDUwOyBcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNzBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICAuY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiAyMHB4OyAgICAgIFxuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogNTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogNjBweDtcbiAgICAgIHRvcDogNDVweDtcbiAgICB9XG4gIH1cbiAgLmNpcmNsZTpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IC0xMnB4O1xuICAgIHRvcDogODBweDtcbiAgfVxuXG4gIC5jaXJjbGU6bnRoLWNoaWxkKDIpIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogNjVweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7XG5cbiAgLmNpcmNsZSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IFxuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjsgfVxuICB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0yO1xuICAuY2lyY2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7IFxuICAgICAgJjphZnRlciwgJjpiZWZvcmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xOyB9XG4gIH1cbn1cblxuLmFybS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMTtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbGVmdDogMTM1cHg7IFxuICB0b3A6IDgwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMwcHggMzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgLmNsdWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICBib3JkZXItYm90dG9tOiAxMTBweCBzb2xpZCAkY29sb3Itd29vZC0xO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogLTYwcHg7XG4gICAgdG9wOiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZyk7XG4gICAgd2lkdGg6IDIwcHg7XG5cbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdvb2QtMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgdG9wOiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubGVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7ICBcbiAgdG9wOiAyMDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbGVmdDogLTVweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAuZm9vdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGxlZnQ6IC0zOHB4O1xuICAgIHRvcDogMzBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSwgLmZpbmdlcnMsIC5maW5nZXJzOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBsZWZ0OiAtNnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogOHB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICAuZmluZ2VycyB7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIH1cbiAgICAuZmluZ2VyczphZnRlciB7XG4gICAgICBsZWZ0OiAxMXB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLmxlZzpudGgtY2hpbGQoMSkgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMztcbiAgbGVmdDogOTVweDtcbiAgJjphZnRlciB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IH1cbiAgLmZvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IFxuICAgICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyB9XG4gICAgJjpiZWZvcmUgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cblxuLmxlZzpudGgtY2hpbGQoMikgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjtcbiAgbGVmdDogMTE1cHg7ICAgXG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yOyB9XG4gIC5mb290IHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjsgfVxufVxuXG4vKiBhbmltYXRpb24gKi9cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuYXJtLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBhcm0tYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuYXJtLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBhcm0tYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBhcm0tYW5pbWEge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfVxufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuaGVhZCB7XG4gIGFuaW1hdGlvbjogaGVhZC1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGhlYWQtYW5pbWEge1xuICAwJSB7IHRvcDogMjVweDsgfVxuICA0MiUgeyB0b3A6IDI1cHg7IH1cbiAgNDUlIHsgdG9wOiA1MHB4OyB9XG4gIDEwMCUgeyB0b3A6IDI1cHg7IH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YWZ0ZXIsIFxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmFmdGVyLCBcbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgZXllLWFuaW1hIHtcbiAgMCUgeyBoZWlnaHQ6IDVweDsgfVxuICA0MiUgeyBoZWlnaHQ6IDVweDsgfVxuICA0NSUgeyBoZWlnaHQ6IDFweDsgfVxuICAxMDAlIHsgaGVpZ2h0OiA1cHg7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFkb3ctYW5pbWEge1xuICAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgMjUlIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 990px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 23em;\n  }\n}\n@media screen and (max-width: 790px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 20em;\n  }\n}\n@media screen and (max-width: 690px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 18em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 14em;\n  }\n}\n@media screen and (max-width: 500px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksZUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUVJO0lBQ0ksZUFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUVJO0lBQ0ksZUFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZUFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUVJO0lBQ0ksZUFBQTtFQVJOO0FBQ0YiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcblxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyM2VtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcblxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMGVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcblxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOGVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNGVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMGVtO1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksZUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUVJO0lBQ0ksZUFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUVJO0lBQ0ksZUFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZUFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUVJO0lBQ0ksZUFBQTtFQVJOO0FBQ0Y7QUFDQSx3cUNBQXdxQyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6565:
/*!**********************************************!*\
  !*** ./src/app/404/page-not-found.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundModule: () => (/* binding */ PageNotFoundModule)
/* harmony export */ });
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found-routing.module */ 9684);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component */ 4546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PageNotFoundModule {
  static {
    this.ɵfac = function PageNotFoundModule_Factory(t) {
      return new (t || PageNotFoundModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PageNotFoundModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageNotFoundModule, {
    declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent],
    imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundRoutingModule],
    exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent]
  });
})();

/***/ }),

/***/ 2912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 6327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data.service */ 875);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ 8955);







const _c0 = a0 => ["fas", a0];
const _c1 = a0 => ["fab", a0];
function AboutComponent_fa_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 24);
  }
  if (rf & 2) {
    const hobby_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", hobby_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, hobby_r1.icon));
  }
}
function AboutComponent_a_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const media_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", media_r2.http, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", media_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, media_r2.icon));
  }
}
class AboutComponent {
  constructor(dataService, library) {
    this.dataService = dataService;
    this.library = library;
    library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fab);
  }
  ngOnInit() {
    this.name = "Mohamed Ali Boudich"; // Sets here, your full name
    this.yearsOld = this.calcAge("1986-05-10"); // Sets here, your date birthday
    // Fetches the About information from the Data Service (about.json file).
    this.subscription = this.dataService.getAbout().subscribe(about => this.aboutData = about);
  }
  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    this.subscription.unsubscribe();
  }
  calcAge(dateString) {
    const birthday = new Date(dateString);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getFullYear() - 1970);
  }
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconLibrary));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 33,
      vars: 5,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_0 = goog.getMsg("About me");
          i18n_0 = MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_0;
        } else {
          i18n_0 = "A propos";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc about
           */
          const MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("years old");
          i18n_1 = MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1;
        } else {
          i18n_1 = "ans";
        }
        return [i18n_0, i18n_1, ["id", "about", "itemscope", "", "itemtype", "https://schema.org/AboutPage"], ["itemscope", "", "itemtype", "https://schema.org/Person", 1, "about-container"], ["itemprop", "jobTitle", "content", "Full-stack Java Developer"], ["itemprop", "knowsLanguage", "content", "en"], ["itemprop", "knowsLanguage", "content", "pt"], ["itemprop", "knowsLanguage", "content", "fr"], ["itemprop", "nationality", "content", "Tunisian"], ["itemprop", "gender", "content", "Male"], ["itemprop", "email", "content", "contact@mohamedaliboudich.fr"], ["itemprop", "birthDate", "content", "1993-06-29"], ["itemprop", "url", "content", "https://www.guilhermeborgesbastos.com"], [1, "first-column"], ["itemprop", "name"], [1, "years-old"], ["itemprop", "yearsOld"], ["internationalization", "", "property", "description", "itemprop", "summary", 1, "text", 3, "data"], [1, "hobbies"], ["class", "icon", "itemprop", "hobby", 3, "icon", "title", 4, "ngFor", "ngForOf"], [1, "second-column"], [1, "profile-picture"], [1, "social-media"], ["target", "_blank", "itemprop", "sameAs", 3, "href", 4, "ngFor", "ngForOf"], ["itemprop", "hobby", 1, "icon", 3, "icon", "title"], ["target", "_blank", "itemprop", "sameAs", 3, "href"], [1, "icon", 3, "icon", "title"]];
      },
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 4)(3, "meta", 5)(4, "meta", 6)(5, "meta", 7)(6, "meta", 8)(7, "meta", 9)(8, "meta", 10)(9, "meta", 11)(10, "meta", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13)(12, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2")(15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 15)(18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](22, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18)(26, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Hobbies");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AboutComponent_fa_icon_28_Template, 1, 4, "fa-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AboutComponent_a_32_Template, 2, 5, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.yearsOld);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.aboutData == null ? null : ctx.aboutData.internationalizations);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.hobbies);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.medias);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__.InternationalizationDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
      styles: ["#about[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(0deg, #fff 44.44%, #d4e7fe 44.44%, #d4e7fe 0%, #fff 0%, #fff 94.44%, #d4e7fe 94.44%, #d4e7fe 100%);\n  background-size: 10px 1220px;\n}\n\n.about-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  width: 85vw;\n  z-index: 2;\n  padding: 2em;\n  max-width: 1400px;\n}\n.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  font-size: 22px;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  color: #222f5c;\n  margin: 5px 0 0 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 10px;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n  color: #b2b6c6;\n  font-size: 18px;\n  font-style: italic;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  min-height: 220px;\n  line-height: 1.5em;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #555f81;\n  margin-right: 1em;\n  transition: 0.3s;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: 450px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('profile.png');\n  border: 3px solid #d4e7fe;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #414c73;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9JQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUVRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUFaO0FBR1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRlo7QUFPWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFMaEI7QUFRWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOaEI7QUFVUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVJaO0FBVVk7RUFDSSxjQUFBO0FBUmhCO0FBYUk7RUFDSSxZQUFBO0FBWFI7QUFhUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUdBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQVhaO0FBY1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFaWjtBQWNZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBWmhCO0FBY2dCO0VBQ0ksY0FBQTtBQVpwQiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmIDQ0LjQ0JSwgI2Q0ZTdmZSA0NC40NCUsICNkNGU3ZmUgMCUsICNmZmYgMCUsICNmZmYgOTQuNDQlLCAjZDRlN2ZlIDk0LjQ0JSwgI2Q0ZTdmZSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTIyMHB4O1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuZmlyc3QtY29sdW1uIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcCB7XG4gICAgXG4gICAgICAgICAgICAmLnllYXJzLW9sZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiMmI2YzY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi50ZXh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1NTVmODE7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBcbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvcHJvZmlsZS5wbmcnKTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNkNGU3ZmU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0YzczO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0lBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQVo7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQU9ZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUxoQjtBQVFZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5oQjtBQVVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUlo7QUFVWTtFQUNJLGNBQUE7QUFSaEI7QUFhSTtFQUNJLFlBQUE7QUFYUjtBQWFRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBR0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBWFo7QUFjUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQVpaO0FBY1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7QUFjZ0I7RUFDSSxjQUFBO0FBWnBCO0FBREEsZ2pLQUFnaksiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA0NC40NCUsICNkNGU3ZmUgNDQuNDQlLCAjZDRlN2ZlIDAlLCAjZmZmIDAlLCAjZmZmIDk0LjQ0JSwgI2Q0ZTdmZSA5NC40NCUsICNkNGU3ZmUgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEyMjBweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICB3aWR0aDogODV2dztcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAge1xuICAgIFxuICAgICAgICAgICAgJi55ZWFycy1vbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjJiNmM2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1ZjgxO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MDg3YTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNlY29uZC1jb2x1bW4ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L3Byb2ZpbGUucG5nJyk7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZDRlN2ZlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIFxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQxNGM3MztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDg3YTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1280px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 380px;\n    height: 380px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 370px;\n    height: 370px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    flex-wrap: wrap;\n  }\n  .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .first-column[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .second-column[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2em;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    align-self: center;\n  }\n}\n@media screen and (max-width: 880px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1350px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 0;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n  }\n}\n@media screen and (max-width: 600px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1600px;\n  }\n  .about-container[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n}\n@media screen and (max-width: 460px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 10px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    padding: 15px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRO0lBQ0ksZUFBQTtFQURWO0VBSU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUZWO0FBQ0Y7QUFNQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFMTjtBQUNGO0FBUUE7RUFFSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBUE47RUFZTTtJQUNJLGVBQUE7RUFWVjtFQWFNO0lBQ0ksZUFBQTtFQVhWO0VBY007SUFDSSxlQUFBO0VBWlY7RUFlTTtJQUNJLGtCQUFBO0VBYlY7RUFpQkU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VBZk47RUFpQk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VBZlY7QUFDRjtBQW1CQTtFQUVJO0lBQ0ksNEJBQUE7RUFsQk47RUF5QlU7SUFDSSxlQUFBO0VBdkJkO0VBMEJVO0lBQ0ksWUFBQTtFQXhCZDtFQTJCVTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBekJkO0VBNkJNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUEzQlY7QUFDRjtBQStCQTtFQUVJO0lBQ0ksNEJBQUE7RUE5Qk47RUFpQ0U7SUFDSSxXQUFBO0VBL0JOO0VBbUNVO0lBQ0ksZUFBQTtFQWpDZDtFQW9DVTtJQUNJLGFBQUE7RUFsQ2Q7QUFDRjtBQXVDQTtFQU1ZO0lBQ0ksZUFBQTtFQTFDZDtFQTZDVTtJQUNJLGVBQUE7RUEzQ2Q7RUFnRGM7SUFDSSxlQUFBO0VBOUNsQjtFQWlEYztJQUNJLGVBQUE7RUEvQ2xCO0VBbURVO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUFqRGQ7RUF3RE07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQXREVjtFQXdEVTtJQUNJLGVBQUE7RUF0RGQ7QUFDRjtBQTJEQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUExRE47QUFDRjtBQTZEQTtFQUVJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUE1RE47RUFnRVU7SUFDSSxlQUFBO0VBOURkO0VBb0VVO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFsRWQ7RUFxRVU7SUFDSSxlQUFBO0VBbkVkO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMzcwcHg7XG4gICAgICAgIGhlaWdodDogMzcwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIFxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5maXJzdC1jb2x1bW4ge1xuICAgICAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcC55ZWFycy1vbGQgeyAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob2JiaWVzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWNvbmQtY29sdW1uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMzUwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmljb24geyBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwLnRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICB9ICAgIFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxNjAwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICBcbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcblxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG5cbiAgICAgICAgICAgICAgICAmLnllYXJzLW9sZCB7ICAgIFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kLWNvbHVtbiB7XG5cbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZC1jb2x1bW4ge1xuICAgIFxuICAgICAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1E7SUFDSSxlQUFBO0VBRFY7RUFJTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBRlY7QUFDRjtBQU1BO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUxOO0FBQ0Y7QUFRQTtFQUVJO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUFQTjtFQVlNO0lBQ0ksZUFBQTtFQVZWO0VBYU07SUFDSSxlQUFBO0VBWFY7RUFjTTtJQUNJLGVBQUE7RUFaVjtFQWVNO0lBQ0ksa0JBQUE7RUFiVjtFQWlCRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUFmTjtFQWlCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFmVjtBQUNGO0FBbUJBO0VBRUk7SUFDSSw0QkFBQTtFQWxCTjtFQXlCVTtJQUNJLGVBQUE7RUF2QmQ7RUEwQlU7SUFDSSxZQUFBO0VBeEJkO0VBMkJVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUF6QmQ7RUE2Qk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTNCVjtBQUNGO0FBK0JBO0VBRUk7SUFDSSw0QkFBQTtFQTlCTjtFQWlDRTtJQUNJLFdBQUE7RUEvQk47RUFtQ1U7SUFDSSxlQUFBO0VBakNkO0VBb0NVO0lBQ0ksYUFBQTtFQWxDZDtBQUNGO0FBdUNBO0VBTVk7SUFDSSxlQUFBO0VBMUNkO0VBNkNVO0lBQ0ksZUFBQTtFQTNDZDtFQWdEYztJQUNJLGVBQUE7RUE5Q2xCO0VBaURjO0lBQ0ksZUFBQTtFQS9DbEI7RUFtRFU7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQWpEZDtFQXdETTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBdERWO0VBd0RVO0lBQ0ksZUFBQTtFQXREZDtBQUNGO0FBMkRBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTFETjtBQUNGO0FBNkRBO0VBRUk7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQTVETjtFQWdFVTtJQUNJLGVBQUE7RUE5RGQ7RUFvRVU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQWxFZDtFQXFFVTtJQUNJLGVBQUE7RUFuRWQ7QUFDRjtBQUNBLDQzTEFBNDNMIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMzcwcHg7XG4gICAgICAgIGhlaWdodDogMzcwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIFxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5maXJzdC1jb2x1bW4ge1xuICAgICAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcC55ZWFycy1vbGQgeyAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob2JiaWVzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWNvbmQtY29sdW1uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMzUwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmljb24geyBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwLnRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICB9ICAgIFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxNjAwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICBcbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcblxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG5cbiAgICAgICAgICAgICAgICAmLnllYXJzLW9sZCB7ICAgIFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kLWNvbHVtbiB7XG5cbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG5cbiAgICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZC1jb2x1bW4ge1xuICAgIFxuICAgICAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume/resume.component */ 3972);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 1665);
/* harmony import */ var _contact_firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/firebase-contact/firebase-contact.component */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






// Any URL apart from the root domain is going to be rendered as "page-not-found".
const routes = [{
  path: "",
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent
}, {
  path: "about",
  redirectTo: "/#about"
}, {
  path: "experience",
  redirectTo: "/#experience"
}, {
  path: "experiences",
  redirectTo: "/#experience"
}, {
  path: "posts",
  redirectTo: "/#posts"
}, {
  path: "contact",
  component: _contact_firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_2__.FirebaseContactComponent
}, {
  path: "contact-form",
  component: _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__.ContactFormComponent
}, {
  path: "**",
  redirectTo: "/page-not-found"
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
        // In order to get anchor / fragment scrolling to work at all, we need to
        // enable it on the router.
        anchorScrolling: "enabled",
        // Once the above is enabled, the fragment link will only work on the
        // first click. This is because, by default, the Router ignores requests
        // to navigate to the SAME URL that is currently rendered. Unfortunately,
        // the fragment scrolling is powered by Navigation Events. As such, we
        // have to tell the Router to re-trigger the Navigation Events even if we
        // are navigating to the same URL.
        onSameUrlNavigation: "reload"
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AppComponent {
  constructor(titleService, metaTagService) {
    this.titleService = titleService;
    this.metaTagService = metaTagService;
    this.title = "Live Resume - Mohamed ali boudich";
  }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([{
      name: "keywords",
      content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, Mohamed ali boudich Live Resume, Mohamed ali boudich Resume, Mohamed ali Boudich CV, Curriculum Mohamed ali boudich"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      name: "author",
      content: "Mohamed Ali Boudich"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "date",
      content: "2020-05-12",
      scheme: "YYYY-MM-DD"
    }, {
      charset: "UTF-8"
    }]);
    this.metaTagService.updateTag({
      name: "description",
      content: "Hello, I'm a Full-stack Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!"
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.module */ 2563);
/* harmony import */ var _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/page-not-found-routing.module */ 9684);
/* harmony import */ var _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/page-not-found.module */ 6565);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.module */ 980);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat */ 8942);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/database */ 608);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ 9032);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ 8581);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/fr */ 5669);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ 9692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);











// Firebase imports









(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__["default"], "en");
(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10__["default"], "fr");
(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__["default"], "pt-BR", _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_12__["default"]);
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__.ResumeModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule, _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
      // Firebase modules - utilisation de la version database
      _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebaseConfig), _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_18__.AngularFireDatabaseModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__.ResumeModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule, _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_18__.AngularFireDatabaseModule]
  });
})();

/***/ }),

/***/ 1665:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactFormComponent: () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ 4842);







const _c0 = a0 => ({
  "is-invalid": a0
});
function ContactFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Merci pour votre message ! Je vous r\u00E9pondrai d\u00E8s que possible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Une erreur s'est produite lors de l'envoi du message. Veuillez r\u00E9essayer plus tard. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_10_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function ContactFormComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "L'email est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuillez fournir un email valide");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_15_div_1_Template, 2, 0, "div", 18)(2, ContactFormComponent_div_15_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function ContactFormComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le sujet est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_20_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("subject")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function ContactFormComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le message est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactFormComponent_div_25_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
class ContactFormComponent {
  constructor(fb, contactService) {
    this.fb = fb;
    this.contactService = contactService;
    this.submitted = false;
    this.success = false;
    this.error = false;
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  onSubmit() {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitted = true;
      if (_this.contactForm.invalid) {
        return;
      }
      try {
        yield _this.contactService.addContact({
          name: _this.contactForm.value.name,
          email: _this.contactForm.value.email,
          subject: _this.contactForm.value.subject,
          message: _this.contactForm.value.message,
          date: new Date()
        });
        _this.success = true;
        _this.contactForm.reset();
        _this.submitted = false;
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          _this.success = false;
        }, 5000);
      } catch (err) {
        console.error('Erreur lors de l\'envoi du message:', err);
        _this.error = true;
        // Réinitialiser le message d'erreur après 5 secondes
        setTimeout(() => {
          _this.error = false;
        }, 5000);
      }
    })();
  }
  static {
    this.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 19,
      consts: [[1, "contact-form-container"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "subject"], ["type", "text", "id", "subject", "formControlName", "subject", 1, "form-control", 3, "ngClass"], ["for", "message"], ["id", "message", "formControlName", "message", "rows", "5", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contactez-moi");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContactFormComponent_div_3_Template, 2, 0, "div", 1)(4, ContactFormComponent_div_4_Template, 2, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ContactFormComponent_div_10_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ContactFormComponent_div_15_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Sujet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ContactFormComponent_div_20_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4)(22, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactFormComponent_div_25_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4)(27, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Envoyer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ((tmp_3_0 = ctx.contactForm.get("name")) == null ? null : tmp_3_0.errors)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_4_0 = ctx.contactForm.get("name")) == null ? null : tmp_4_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ((tmp_5_0 = ctx.contactForm.get("email")) == null ? null : tmp_5_0.errors)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_6_0 = ctx.contactForm.get("email")) == null ? null : tmp_6_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ((tmp_7_0 = ctx.contactForm.get("subject")) == null ? null : tmp_7_0.errors)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_8_0 = ctx.contactForm.get("subject")) == null ? null : tmp_8_0.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ((tmp_9_0 = ctx.contactForm.get("message")) == null ? null : tmp_9_0.errors)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_10_0 = ctx.contactForm.get("message")) == null ? null : tmp_10_0.errors));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".contact-form-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #343a40;\n  text-align: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 4px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFJQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBSUU7RUFDRSwrQ0FBQTtBQUZKIiwiZmlsZSI6ImNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDIge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiAjMzQzYTQwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICB9XG5cbiAgJi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIH1cbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcbiAgICBib3JkZXItY29sb3I6ICMwMDYyY2M7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbiAgfVxufSAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQURGO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLCtDQUFBO0FBRko7QUFFQSw0ckhBQTRySCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDIge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiAjMzQzYTQwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICB9XG5cbiAgJi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIH1cbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcbiAgICBib3JkZXItY29sb3I6ICMwMDYyY2M7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbiAgfVxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.service */ 2240);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);







const _c0 = a0 => ({
  "fade": a0
});
const _c1 = a0 => ({
  "loading": a0
});
function ContactComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.name);
  }
}
function ContactComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faEnvelope);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.email);
  }
}
function ContactComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.phone);
  }
}
function ContactComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faMapMarkerAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.location);
  }
}
function ContactComponent_div_29_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_29_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_29_small_1_Template, 2, 0, "small", 52)(2, ContactComponent_div_29_small_2_Template, 2, 0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.senderName.errors == null ? null : ctx_r1.senderName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.senderName.errors == null ? null : ctx_r1.senderName.errors.pattern);
  }
}
function ContactComponent_div_34_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_34_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_34_small_1_Template, 2, 0, "small", 52)(2, ContactComponent_div_34_small_2_Template, 2, 0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.senderEmail.errors == null ? null : ctx_r1.senderEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.senderEmail.errors == null ? null : ctx_r1.senderEmail.errors.pattern);
  }
}
function ContactComponent_div_39_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_39_small_1_Template, 2, 0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.senderMessage.errors == null ? null : ctx_r1.senderMessage.errors.required);
  }
}
class ContactComponent {
  constructor(contactService) {
    this.contactService = contactService;
    this.isLoading = false;
    this.hasBeenSubmited = false;
    this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("[A-zÀ-ú ]*")]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
  }
  get senderEmail() {
    return this.contactForm.get("email");
  }
  get senderName() {
    return this.contactForm.get("name");
  }
  get senderMessage() {
    return this.contactForm.get("message");
  }
  get options() {
    return this.contactForm.get("options");
  }
  ngOnInit() {
    this.name = "Boudich Mohamed ali";
    this.email = "contact@mohamedaliboudich.fr";
    this.phone = "+33 603754643";
    this.location = "Puteaux, France";
    this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEnvelope;
    this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhone;
    this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMapMarkerAlt;
    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes;
    this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight;
  }
  saveContact(contact) {
    this.contactService.createContact(contact).then(() => {
      console.log("created");
      this.displayUserInterfaceMessage(true);
    }).catch(error => {
      this.displayUserInterfaceMessage(false);
      console.log(error);
    });
  }
  displayUserInterfaceMessage(hasBeenSuccessfuly) {
    this.isLoading = false;
    this.hasBeenSubmited = true;
    this.feedbackStatus = hasBeenSuccessfuly ? "success" : "error";
    this.contactForm.reset();
  }
  closeFeedbackMessage() {
    this.hasBeenSubmited = false;
    this.feedbackStatus = "";
  }
  onSubmit(contactForm) {
    this.isLoading = true;
    const contactValues = {
      name: this.senderName.value,
      email: this.senderEmail.value,
      message: this.senderMessage.value,
      date: new Date()
    };
    this.saveContact(contactValues);
  }
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_0__.ContactService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 43,
      vars: 23,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_0 = goog.getMsg("Mark");
          i18n_0 = MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_0;
        } else {
          i18n_0 = "Jean Dupont";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("mark@gmail.com");
          i18n_1 = MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1;
        } else {
          i18n_1 = "dupont@gmail.com";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_2 = goog.getMsg("Write here your message... I will reply to you soon.");
          i18n_2 = MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_2;
        } else {
          i18n_2 = "\xC9crivez ici votre message ... je vous r\xE9pondrai bient\xF4t.";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3 = goog.getMsg("Send");
          i18n_3 = MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3;
        } else {
          i18n_3 = "Envoyer";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_4 = goog.getMsg("Thank you for contacting me, I'll reply to you very soon.");
          i18n_4 = MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_4;
        } else {
          i18n_4 = "Merci de m'avoir contacter,Je vous r\xE9pondrai tr\xE8s bient\xF4t.";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5 = goog.getMsg("Sorry, there is an instability, try again later, or contact me via email or social media.");
          i18n_5 = MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5;
        } else {
          i18n_5 = "D\xE9sol\xE9, il y a une instabilit\xE9, r\xE9essayez plus tard ou contactez-moi par e-mail ou sur les r\xE9seaux sociaux.";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_6 = goog.getMsg("Contact");
          i18n_6 = MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_6;
        } else {
          i18n_6 = "Contact";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7 = goog.getMsg("Your name:");
          i18n_7 = MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7;
        } else {
          i18n_7 = "Votre nom:";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_8 = goog.getMsg("Email:");
          i18n_8 = MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_8;
        } else {
          i18n_8 = "Email:";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9 = goog.getMsg("Your message:");
          i18n_9 = MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9;
        } else {
          i18n_9 = "Votre message:";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_10 = goog.getMsg("The name is required.");
          i18n_10 = MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_10;
        } else {
          i18n_10 = "le nom est obligatoire.";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_11 = goog.getMsg("Please, provide a valid name.");
          i18n_11 = MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_11;
        } else {
          i18n_11 = "PVeuillez fournir un nom valide.";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12 = goog.getMsg("The email is required.");
          i18n_12 = MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12;
        } else {
          i18n_12 = "L'email est obligatoire.";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_13 = goog.getMsg("Please, provide a valid email address.");
          i18n_13 = MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_13;
        } else {
          i18n_13 = "Veuillez fournir une adresse email valide.";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14 = goog.getMsg("The message is required.");
          i18n_14 = MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14;
        } else {
          i18n_14 = "Le message est obligatoire.";
        }
        return [["contactNgForm", "ngForm"], i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, ["id", "contact", "itemscope", "", "itemtype", "https://schema.org/ContactPage"], [1, "feedback-container", 3, "ngClass"], [1, "success"], ["title", "Close", 1, "icon", 3, "click", "icon"], [1, "error"], [1, "container", 3, "ngClass"], [1, "left-side"], [1, "title"], [1, "top-container"], [1, "picture"], [1, "info"], ["class", "name", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "phone", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "bottom-container"], [3, "ngSubmit", "formGroup", "ngClass"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "placeholder", i18n_0, "formControlName", "name"], ["class", "warnings", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "placeholder", i18n_1, "formControlName", "email", "required", ""], ["for", "message"], ["name", "message", "placeholder", i18n_2, "formControlName", "message", "required", ""], ["type", "submit", "value", i18n_3], [1, "right-side"], [1, "half-circle"], [1, "name"], ["itemprop", "name"], [1, "email"], ["title", "Email", 1, "icon", 3, "icon"], ["itemprop", "email", 3, "href"], [1, "phone"], ["title", "Phone", 1, "icon", 3, "icon"], ["itemprop", "telephone"], [1, "location"], ["title", "City", 1, "icon", 3, "icon"], ["itemprop", "city"], [1, "warnings"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]];
      },
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 12)(1, "div", 13)(2, "p", 14)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fa-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.closeFeedbackMessage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16)(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "fa-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.closeFeedbackMessage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17)(11, "div", 18)(12, "div", 19)(13, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ContactComponent_p_18_Template, 3, 1, "p", 23)(19, ContactComponent_p_19_Template, 4, 4, "p", 24)(20, ContactComponent_p_20_Template, 4, 2, "p", 25)(21, ContactComponent_p_21_Template, 4, 2, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 27)(23, "form", 28, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const contactNgForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(contactNgForm_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 29)(26, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](27, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ContactComponent_div_29_Template, 3, 2, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 29)(31, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](32, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ContactComponent_div_34_Template, 3, 2, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29)(36, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](37, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "textarea", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ContactComponent_div_39_Template, 2, 1, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.feedbackStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faTimes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faTimes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.hasBeenSubmited));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.location);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c1, ctx.isLoading));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.senderName.invalid && ctx.senderName.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.senderName.invalid && ctx.senderName.touched || ctx.senderName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.senderEmail.invalid && ctx.senderEmail.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.senderEmail.invalid && ctx.senderEmail.touched || ctx.senderEmail.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.senderMessage.invalid && ctx.senderMessage.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.senderMessage.invalid && ctx.senderMessage.touched || ctx.senderMessage.dirty);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
      styles: ["#contact[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  justify-content: center;\n  background-color: #d4e7fe;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 1em;\n  border-radius: 15px;\n  z-index: 3;\n  top: 50%;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  margin: 0 1em;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 22px;\n  top: 2px;\n  position: relative;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #656565;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: none;\n  color: #77242c;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n  color: #373837;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #c4e4c6;\n  border: 1px solid #cecece;\n  animation: _ngcontent-%COMP%_fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #e6adb2;\n  border: 1px solid #d49399;\n  animation: _ngcontent-%COMP%_fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 105%;\n  bottom: -1em;\n  right: 0;\n  z-index: 1;\n}\n#contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 450px;\n  background-color: #c1d5ee;\n  border-top-left-radius: 100%;\n  border: 0;\n  border-right: 0;\n  border-bottom: 0;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: -1em;\n  right: 0;\n  z-index: 0;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 85vw;\n  max-width: 1400px;\n  opacity: 1;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  flex-grow: 4;\n  z-index: 2;\n  margin-bottom: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('profile.png');\n  border: 1px solid #d4e7fe;\n  margin-right: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #646d8d;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #646d8d;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222f5c;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n  margin-top: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1em;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #222f5c;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #70c576;\n  font-size: 22px;\n  color: #fff;\n  padding: 1em;\n  border: 0;\n  border-radius: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #2c612f;\n  background-color: #68bd6e;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.ng-invalid[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  flex-grow: 6;\n}\n#contact[_ngcontent-%COMP%]   .container.fade[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_fadeOut 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n.firebase-contact-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n  padding: 15px;\n  background-color: rgba(0, 123, 255, 0.1);\n  border-radius: 8px;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background-color: #007bff;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background-color 0.3s ease;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBSFo7QUFNUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFKWjtBQU1ZO0VBQ0ksZUFBQTtBQUpoQjtBQU9RO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtBQUxaO0FBT1k7RUFDSSxlQUFBO0FBTGhCO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFSUjtBQVdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFUUjtBQVlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQVZSO0FBWVE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBVlo7QUFjZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWnBCO0FBZ0JZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7QUFkaEI7QUFnQmdCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFkcEI7QUFtQm9CO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBakJ4QjtBQW9Cb0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFsQnhCO0FBcUJvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbkJ4QjtBQXNCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFwQnhCO0FBeUJZO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF2QmhCO0FBeUJnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXZCcEI7QUF5Qm9CO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF2QnhCO0FBMkI0QjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQXpCaEM7QUE4Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE1QnhCO0FBK0JvQjtFQUNJLHFDQUFBO0FBN0J4QjtBQWdDb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBOUJ4QjtBQWdDd0I7RUFDSSxxQkFBQTtBQTlCNUI7QUFrQ29CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhDeEI7QUFrQ3dCO0VBQ0kscUJBQUE7QUFoQzVCO0FBbUN3QjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQWpDNUI7QUFxQ29CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBbkN4QjtBQXNDb0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFwQ3hCO0FBeUN3QjtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF2QzVCO0FBOENRO0VBQ0ksWUFBQTtBQTVDWjtBQStDUTtFQUNJLG9CQUFBO0VBRUEscUJBQUE7RUFDQSw2QkFBQTtBQTdDWjs7QUFrREE7RUFDSTtJQUFPLFVBQUE7RUE5Q1Q7RUErQ0U7SUFBSyxVQUFBO0VBNUNQO0FBQ0Y7QUE4Q0E7RUFDSTtJQUFPLFVBQUE7RUEzQ1Q7RUE0Q0U7SUFBSyxZQUFBO0VBekNQO0FBQ0Y7QUEyQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUF6Q0Y7QUEyQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQTFDSjtBQTRDSTtFQUNFLHlCQUFBO0FBMUNOO0FBNkNJO0VBQ0UsZ0JBQUE7QUEzQ04iLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGU3ZmU7XG5cbiAgICAuZmVlZGJhY2stY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzc3MjQyYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzM3MzgzNztcbiAgICAgICAgfVxuXG4gICAgICAgICYuc3VjY2VzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGU0YzY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuXG4gICAgICAgICAgICAuc3VjY2VzcyB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmVycm9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWRiMjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNDkzOTk7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG5cbiAgICAgICAgICAgIC5lcnJvciB7IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTA1JTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWQ1ZWU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwOyAgICAgICAgXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiA4NXZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvcHJvZmlsZS5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZTdmZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NmQ4ZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2ZDhkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLndhcm5pbmdzIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MGM1NzY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyYzYxMmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4YmQ2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg0ODQ4NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgJi5sb2FkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDY7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5mYWRlIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMXM7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgMXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cbiAgICB0byB7IG9wYWNpdHk6IDAuMzsgfVxufVxuXG4uZmlyZWJhc2UtY29udGFjdC1saW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIFxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLmNvbnRhY3QtYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgfVxuICAgIFxuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDWTtFQUNJLGNBQUE7QUFDaEI7QUFHUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUhaO0FBTVE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0FBSlo7QUFNWTtFQUNJLGVBQUE7QUFKaEI7QUFPUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFMWjtBQU9ZO0VBQ0ksZUFBQTtBQUxoQjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBUlI7QUFXSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBVFI7QUFZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFWUjtBQVlRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVZaO0FBY2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVpwQjtBQWdCWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FBZGhCO0FBZ0JnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBZHBCO0FBbUJvQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWpCeEI7QUFvQm9CO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBbEJ4QjtBQXFCb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5CeEI7QUFzQm9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBcEJ4QjtBQXlCWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdkJoQjtBQXlCZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUF2QnBCO0FBeUJvQjtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBdkJ4QjtBQTJCNEI7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUF6QmhDO0FBOEJvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBNUJ4QjtBQStCb0I7RUFDSSxxQ0FBQTtBQTdCeEI7QUFnQ29CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTlCeEI7QUFnQ3dCO0VBQ0kscUJBQUE7QUE5QjVCO0FBa0NvQjtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLHFCQUFBO0FBaEM1QjtBQW1Dd0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFqQzVCO0FBcUNvQjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQW5DeEI7QUFzQ29CO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBcEN4QjtBQXlDd0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdkM1QjtBQThDUTtFQUNJLFlBQUE7QUE1Q1o7QUErQ1E7RUFDSSxvQkFBQTtFQUVBLHFCQUFBO0VBQ0EsNkJBQUE7QUE3Q1o7O0FBa0RBO0VBQ0k7SUFBTyxVQUFBO0VBOUNUO0VBK0NFO0lBQUssVUFBQTtFQTVDUDtBQUNGO0FBOENBO0VBQ0k7SUFBTyxVQUFBO0VBM0NUO0VBNENFO0lBQUssWUFBQTtFQXpDUDtBQUNGO0FBMkNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBekNGO0FBMkNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBekNKO0FBNENFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUExQ0o7QUE0Q0k7RUFDRSx5QkFBQTtBQTFDTjtBQTZDSTtFQUNFLGdCQUFBO0FBM0NOO0FBSkEsNGxkQUE0bGQiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdCB7XG4gICAgdG9wOiAtNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlN2ZlO1xuXG4gICAgLmZlZWRiYWNrLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM3NzI0MmM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzNzM4Mzc7XG4gICAgICAgIH1cblxuICAgICAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlNGM2O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcblxuICAgICAgICAgICAgLnN1Y2Nlc3MgeyBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5lcnJvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmFkYjI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDQ5Mzk5O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xuXG4gICAgICAgICAgICAuZXJyb3IgeyBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwNSU7XG4gICAgICAgIGJvdHRvbTogLTFlbTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmhhbGYtY2lyY2xlIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFkNWVlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDsgICAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0xZW07XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogODV2dztcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L3Byb2ZpbGUucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDZkOGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NmQ4ZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC53YXJuaW5ncyB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjNTc2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmM2MTJmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OGJkNmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICYubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA2O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICYuZmFkZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgdG8geyBvcGFjaXR5OiAwLjM7IH1cbn1cblxuLmZpcmViYXNlLWNvbnRhY3QtbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBcbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5jb250YWN0LWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICAgIH1cbiAgICBcbiAgICAuaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1400px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    flex-grow: 3;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    flex-grow: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 0.7em;\n    justify-content: center;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 370px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxZQUFBO0VBRlY7RUFLTTtJQUNJLFlBQUE7RUFIVjtBQUNGO0FBT0E7RUFJUTtJQUNHLGFBQUE7RUFSVDtFQVdNO0lBQ0ksYUFBQTtFQVRWO0VBY1U7SUFDSSxZQUFBO0VBWmQ7RUFlVTtJQUNJLFlBQUE7RUFiZDtBQUNGO0FBbUJBO0VBTVk7SUFDSSxlQUFBO0VBdEJkO0VBeUJVO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtFQXZCZDtFQXlCYztJQUNJLGFBQUE7RUF2QmxCO0VBNEJrQjtJQUNJLGVBQUE7RUExQnRCO0VBNkJrQjtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQTNCdEI7RUFnQ1U7SUFDSSxjQUFBO0VBOUJkO0VBa0NrQjtJQUNJLG9CQUFBO0VBaEN0QjtFQW1Da0I7SUFDSSxlQUFBO0VBakN0QjtFQW9Da0I7SUFDSSxlQUFBO0VBbEN0QjtFQW9Dc0I7SUFDSSxxQkFBQTtFQWxDMUI7RUFzQ2tCO0lBQ0ksZUFBQTtFQXBDdEI7RUFzQ3NCO0lBQ0kscUJBQUE7RUFwQzFCO0VBd0NrQjtJQUNJLGVBQUE7RUF0Q3RCO0FBQ0Y7QUE4Q0E7RUFNWTtJQUNJLGNBQUE7RUFqRGQ7RUFxRGtCO0lBQ0ksZUFBQTtFQW5EdEI7RUFzRGtCO0lBQ0ksZUFBQTtFQXBEdEI7RUF5RFU7SUFDSSxjQUFBO0VBdkRkO0VBMkRrQjtJQUNJLG9CQUFBO0VBekR0QjtFQTREa0I7SUFDSSxlQUFBO0VBMUR0QjtFQTZEa0I7SUFDSSxlQUFBO0VBM0R0QjtFQThEa0I7SUFDSSxlQUFBO0VBNUR0QjtFQStEa0I7SUFDSSxlQUFBO0VBN0R0QjtBQUNGO0FBb0VBO0VBVW9CO0lBQ0ksZUFBQTtFQTNFdEI7RUE4RWtCO0lBQ0ksZUFBQTtFQTVFdEI7RUFpRlU7SUFDSSxjQUFBO0VBL0VkO0VBa0ZrQjtJQUNJLGVBQUE7RUFoRnRCO0VBbUZrQjtJQUNJLGVBQUE7RUFqRnRCO0VBb0ZrQjtJQUNJLGVBQUE7RUFsRnRCO0VBcUZrQjtJQUNJLGVBQUE7RUFuRnRCO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgI2NvbnRhY3Qge1xuICAgIFxuICAgICAgICAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG5cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRO0lBQ0ksWUFBQTtFQUZWO0VBS007SUFDSSxZQUFBO0VBSFY7QUFDRjtBQU9BO0VBSVE7SUFDRyxhQUFBO0VBUlQ7RUFXTTtJQUNJLGFBQUE7RUFUVjtFQWNVO0lBQ0ksWUFBQTtFQVpkO0VBZVU7SUFDSSxZQUFBO0VBYmQ7QUFDRjtBQW1CQTtFQU1ZO0lBQ0ksZUFBQTtFQXRCZDtFQXlCVTtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7RUF2QmQ7RUF5QmM7SUFDSSxhQUFBO0VBdkJsQjtFQTRCa0I7SUFDSSxlQUFBO0VBMUJ0QjtFQTZCa0I7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUEzQnRCO0VBZ0NVO0lBQ0ksY0FBQTtFQTlCZDtFQWtDa0I7SUFDSSxvQkFBQTtFQWhDdEI7RUFtQ2tCO0lBQ0ksZUFBQTtFQWpDdEI7RUFvQ2tCO0lBQ0ksZUFBQTtFQWxDdEI7RUFvQ3NCO0lBQ0kscUJBQUE7RUFsQzFCO0VBc0NrQjtJQUNJLGVBQUE7RUFwQ3RCO0VBc0NzQjtJQUNJLHFCQUFBO0VBcEMxQjtFQXdDa0I7SUFDSSxlQUFBO0VBdEN0QjtBQUNGO0FBOENBO0VBTVk7SUFDSSxjQUFBO0VBakRkO0VBcURrQjtJQUNJLGVBQUE7RUFuRHRCO0VBc0RrQjtJQUNJLGVBQUE7RUFwRHRCO0VBeURVO0lBQ0ksY0FBQTtFQXZEZDtFQTJEa0I7SUFDSSxvQkFBQTtFQXpEdEI7RUE0RGtCO0lBQ0ksZUFBQTtFQTFEdEI7RUE2RGtCO0lBQ0ksZUFBQTtFQTNEdEI7RUE4RGtCO0lBQ0ksZUFBQTtFQTVEdEI7RUErRGtCO0lBQ0ksZUFBQTtFQTdEdEI7QUFDRjtBQW9FQTtFQVVvQjtJQUNJLGVBQUE7RUEzRXRCO0VBOEVrQjtJQUNJLGVBQUE7RUE1RXRCO0VBaUZVO0lBQ0ksY0FBQTtFQS9FZDtFQWtGa0I7SUFDSSxlQUFBO0VBaEZ0QjtFQW1Ga0I7SUFDSSxlQUFBO0VBakZ0QjtFQW9Ga0I7SUFDSSxlQUFBO0VBbEZ0QjtFQXFGa0I7SUFDSSxlQUFBO0VBbkZ0QjtBQUNGO0FBQ0EsZzRPQUFnNE8iLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgI2NvbnRhY3Qge1xuICAgIFxuICAgICAgICAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaGFsZi1jaXJjbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG5cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 980:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-contact/firebase-contact.component */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






class ContactModule {
  static {
    this.ɵfac = function ContactModule_Factory(t) {
      return new (t || ContactModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_0__.FirebaseContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule],
    exports: [_firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_0__.FirebaseContactComponent]
  });
})();

/***/ }),

/***/ 2240:
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/database */ 608);




class ContactService {
  constructor(db) {
    this.db = db;
    this.contactsPath = 'contacts';
  }
  createContact(contact) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Contact form submission:', contact);
        const contactRef = yield _this.db.list(_this.contactsPath).push({
          ...contact,
          date: new Date().toISOString()
        });
        return Promise.resolve({
          id: contactRef.key
        });
      } catch (error) {
        console.error("Erreur lors de l'ajout du contact:", error);
        return Promise.reject(error);
      }
    })();
  }
  // Pour l'administration éventuelle des contacts
  getAllContacts() {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const query = _this2.db.list(_this2.contactsPath).valueChanges();
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(query);
        return result;
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts:", error);
        return [];
      }
    })();
  }
  static {
    this.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1017:
/*!************************************************************************!*\
  !*** ./src/app/contact/firebase-contact/firebase-contact.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseContactComponent: () => (/* binding */ FirebaseContactComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ 8287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);









const _c0 = a0 => ({
  "loading": a0
});
const _c1 = a0 => ({
  "is-invalid": a0
});
function FirebaseContactComponent_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FirebaseContactComponent_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FirebaseContactComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FirebaseContactComponent_div_21_small_1_Template, 2, 0, "small", 35)(2, FirebaseContactComponent_div_21_small_2_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFormControl.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFormControl.name.errors.pattern);
  }
}
function FirebaseContactComponent_div_26_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FirebaseContactComponent_div_26_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FirebaseContactComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FirebaseContactComponent_div_26_small_1_Template, 2, 0, "small", 35)(2, FirebaseContactComponent_div_26_small_2_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFormControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFormControl.email.errors.pattern);
  }
}
function FirebaseContactComponent_div_35_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FirebaseContactComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FirebaseContactComponent_div_35_small_1_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactFormControl.message.errors.required);
  }
}
class FirebaseContactComponent {
  constructor(fb, firebaseService) {
    this.fb = fb;
    this.firebaseService = firebaseService;
    this.isLoading = false;
    this.feedbackStatus = '';
    this.submitted = false;
    // Font Awesome icons
    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes;
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z0-9 ]*')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      subject: ['']
    });
  }
  onSubmit() {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitted = true;
      if (_this.contactForm.invalid) {
        return;
      }
      _this.isLoading = true;
      try {
        const result = yield _this.firebaseService.sendContactMessage(_this.contactForm.value.name, _this.contactForm.value.email, _this.contactForm.value.message);
        if (result.success) {
          _this.feedbackStatus = 'success';
          _this.contactForm.reset();
          _this.submitted = false;
        } else {
          _this.feedbackStatus = 'error';
        }
      } catch (error) {
        console.error('Erreur:', error);
        _this.feedbackStatus = 'error';
      } finally {
        _this.isLoading = false;
        // Réinitialiser le message de feedback après 5 secondes
        setTimeout(() => {
          _this.feedbackStatus = '';
        }, 5000);
      }
    })();
  }
  closeFeedbackMessage() {
    this.feedbackStatus = '';
  }
  get contactFormControl() {
    return this.contactForm.controls;
  }
  static {
    this.ɵfac = function FirebaseContactComponent_Factory(t) {
      return new (t || FirebaseContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FirebaseContactComponent,
      selectors: [["app-firebase-contact"]],
      decls: 38,
      vars: 19,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_0 = goog.getMsg("Jean Dupont");
          i18n_0 = MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_0;
        } else {
          i18n_0 = "Jean Dupont";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_1 = goog.getMsg("jean.dupont@example.com");
          i18n_1 = MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_1;
        } else {
          i18n_1 = "dupont@gmail.com";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_subjectPlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_2 = goog.getMsg("Sujet de votre message");
          i18n_2 = MSG_EXTERNAL_subjectPlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_2;
        } else {
          i18n_2 = "Sujet de votre message";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_3 = goog.getMsg("\u00C9crivez ici votre message... je vous r\u00E9pondrai bient\u00F4t.");
          i18n_3 = MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_3;
        } else {
          i18n_3 = "\xC9crivez ici votre message ... je vous r\xE9pondrai bient\xF4t.";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_4 = goog.getMsg("Thank you for contacting me, I'll reply to you very soon.");
          i18n_4 = MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_4;
        } else {
          i18n_4 = "Merci de m'avoir contacter,Je vous r\xE9pondrai tr\xE8s bient\xF4t.";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_5 = goog.getMsg("Sorry, there is an instability, try again later, or contact me via email or social media.");
          i18n_5 = MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_5;
        } else {
          i18n_5 = "D\xE9sol\xE9, il y a une instabilit\xE9, r\xE9essayez plus tard ou contactez-moi par e-mail ou sur les r\xE9seaux sociaux.";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_advancedContactForm$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_6 = goog.getMsg("Formulaire de contact avanc\u00E9");
          i18n_6 = MSG_EXTERNAL_advancedContactForm$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_6;
        } else {
          i18n_6 = "Formulaire de contact avanc\xE9";
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_backToResume$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_7 = goog.getMsg("Retour au CV");
          i18n_7 = MSG_EXTERNAL_backToResume$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_7;
        } else {
          i18n_7 = "Retour au CV";
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_name$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_8 = goog.getMsg("Your name:");
          i18n_8 = MSG_EXTERNAL_name$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_8;
        } else {
          i18n_8 = "Votre nom:";
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_email$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_9 = goog.getMsg("Email:");
          i18n_9 = MSG_EXTERNAL_email$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_9;
        } else {
          i18n_9 = "Email:";
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_subject$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_10 = goog.getMsg("Subject (optional):");
          i18n_10 = MSG_EXTERNAL_subject$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_10;
        } else {
          i18n_10 = "Sujet (optionnel):";
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_message$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_11 = goog.getMsg("Your message:");
          i18n_11 = MSG_EXTERNAL_message$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_11;
        } else {
          i18n_11 = "Votre message:";
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_send$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_12 = goog.getMsg("Send");
          i18n_12 = MSG_EXTERNAL_send$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_12;
        } else {
          i18n_12 = "Envoyer";
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_13 = goog.getMsg(" The name is required. ");
          i18n_13 = MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_13;
        } else {
          i18n_13 = "le nom est obligatoire.";
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_14 = goog.getMsg(" Please, provide a valid name. ");
          i18n_14 = MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_14;
        } else {
          i18n_14 = "PVeuillez fournir un nom valide.";
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_15 = goog.getMsg(" The email is required. ");
          i18n_15 = MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_15;
        } else {
          i18n_15 = "L'email est obligatoire.";
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_16 = goog.getMsg(" Please, provide a valid email address. ");
          i18n_16 = MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_16;
        } else {
          i18n_16 = "Veuillez fournir une adresse email valide.";
        }
        let i18n_17;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc contact
           */
          const MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_17 = goog.getMsg(" The message is required. ");
          i18n_17 = MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_FIREBASE_CONTACT_FIREBASE_CONTACT_COMPONENT_TS_17;
        } else {
          i18n_17 = "Le message est obligatoire.";
        }
        return [i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, i18n_11, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_17, [1, "firebase-contact-container"], [1, "feedback-container", 3, "ngClass"], [1, "success"], ["title", "Close", 1, "icon", 3, "click", "icon"], [1, "error"], [1, "title"], ["routerLink", "/", 1, "back-link"], [1, "form-container", 3, "ngClass"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", i18n_0, 3, "ngClass"], ["class", "errors", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", i18n_1, 3, "ngClass"], ["for", "subject"], ["type", "text", "formControlName", "subject", "placeholder", i18n_2], ["for", "message"], ["formControlName", "message", "placeholder", i18n_3, "rows", "5", 3, "ngClass"], ["type", "submit"], [1, "errors"], [4, "ngIf"]];
      },
      template: function FirebaseContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 14)(1, "div", 15)(2, "p", 16)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fa-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FirebaseContactComponent_Template_fa_icon_click_5_listener() {
            return ctx.closeFeedbackMessage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18)(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "fa-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FirebaseContactComponent_Template_fa_icon_click_9_listener() {
            return ctx.closeFeedbackMessage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 19)(11, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](12, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](14, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 21)(16, "form", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FirebaseContactComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 23)(18, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](19, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FirebaseContactComponent_div_21_Template, 3, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 23)(23, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](24, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FirebaseContactComponent_div_26_Template, 3, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 23)(28, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](29, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23)(32, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](33, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "textarea", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, FirebaseContactComponent_div_35_Template, 2, 1, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](37, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.feedbackStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.isLoading));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, ctx.submitted && ctx.contactFormControl.name.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.contactFormControl.name.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c1, ctx.submitted && ctx.contactFormControl.email.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.contactFormControl.email.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c1, ctx.submitted && ctx.contactFormControl.message.errors));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.contactFormControl.message.errors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
      styles: [".firebase-contact-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 50px auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  margin: 0;\n}\n.title[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  font-size: 14px;\n}\n.title[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-container.loading[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.form-group[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.form-group[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n}\n\n.feedback-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: none;\n}\n.feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%], .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin: 0;\n}\n.feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.7;\n}\n.feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLDBCQUFBO0FBQU47O0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7RUFDRSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBT0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQUxOO0FBU0U7RUFDRSxlQUFBO0FBUEo7QUFTSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBUE47O0FBWUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFURjtBQVdFO0VBQ0UseUJBQUE7QUFUSjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVZGO0FBWUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBWko7QUFlRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWRKO0FBZ0JJO0VBQ0UsVUFBQTtBQWROIiwiZmlsZSI6ImZpcmViYXNlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyZWJhc2UtY29udGFjdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYmFjay1saW5rIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICYubG9hZGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxuICAgICYuaXMtaW52YWxpZCB7XG4gICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5lcnJvcnMge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBcbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xuICB9XG59XG5cbi5mZWVkYmFjay1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBcbiAgJi5zdWNjZXNzIC5zdWNjZXNzLFxuICAmLmVycm9yIC5lcnJvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgJi5zdWNjZXNzIC5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gIH1cbiAgXG4gICYuZXJyb3IgLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn0gIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9maXJlYmFzZS1jb250YWN0L2ZpcmViYXNlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLDBCQUFBO0FBQU47O0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7RUFDRSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBT0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQUxOO0FBU0U7RUFDRSxlQUFBO0FBUEo7QUFTSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBUE47O0FBWUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFURjtBQVdFO0VBQ0UseUJBQUE7QUFUSjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVZGO0FBWUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBWko7QUFlRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWRKO0FBZ0JJO0VBQ0UsVUFBQTtBQWROO0FBQ0Esdy9JQUF3L0kiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyZWJhc2UtY29udGFjdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYmFjay1saW5rIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICYubG9hZGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxuICAgICYuaXMtaW52YWxpZCB7XG4gICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5lcnJvcnMge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBcbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xuICB9XG59XG5cbi5mZWVkYmFjay1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBcbiAgJi5zdWNjZXNzIC5zdWNjZXNzLFxuICAmLmVycm9yIC5lcnJvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgJi5zdWNjZXNzIC5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gIH1cbiAgXG4gICYuZXJyb3IgLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 875);
/* harmony import */ var _sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorter.service */ 7366);
/* harmony import */ var _pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe/safari-date-formatter.pipe */ 4235);
/* harmony import */ var _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/localized-date.pipe */ 6171);
/* harmony import */ var _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/internationalization.directive */ 8955);
/* harmony import */ var _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/on-viewport.directive */ 2079);
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/ellipsis.pipe */ 370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);









class CoreModule {
  static {
    this.ɵfac = function CoreModule_Factory(t) {
      return new (t || CoreModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService, _sorter_service__WEBPACK_IMPORTED_MODULE_1__.SorterService],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__.SafariDateFormatterPipe, _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalizedDatePipe, _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_6__.EllipsisPipe, _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_4__.InternationalizationDirective, _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_5__.InViewportDirective],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule],
    exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__.SafariDateFormatterPipe, _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalizedDatePipe, _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_6__.EllipsisPipe, _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_4__.InternationalizationDirective, _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_5__.InViewportDirective]
  });
})();

/***/ }),

/***/ 875:
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class DataService {
  constructor(http) {
    this.http = http;
    this.baseUrl = "assets/data/";
  }
  getExperiences() {
    return this.http.get(this.baseUrl + "experiences.json").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  getAbout() {
    return this.http.get(this.baseUrl + "about.json").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  getPosts() {
    return this.http.get(this.baseUrl + "posts.json").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
  }
  handleError(error) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => errMessage);
      // Use the following instead if using lite-server
      // return throwError(() => err.text() || "backend server error");
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error || "Node.js server error");
  }
  static {
    this.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8955:
/*!******************************************************************!*\
  !*** ./src/app/core/directive/internationalization.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternationalizationDirective: () => (/* binding */ InternationalizationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipe/ellipsis.pipe */ 370);



class InternationalizationDirective {
  get data() {
    return this._data;
  }
  constructor(el, locale) {
    this.el = el;
    this.locale = locale;
    this._data = [];
  }
  set data(value) {
    if (value) {
      this._data = value;
      this.el.nativeElement.innerHTML = this.retrievePropertyValueByLocation();
    }
  }
  ngOnInit() {}
  retrievePropertyValueByLocation() {
    if (this._data) {
      const value = this._data.filter(element => element.language === (this.locale || "en")).map(element => element[this.property]) || [""];
      return this.ellipsis > 0 ? new _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_0__.EllipsisPipe().transform(value[0], this.ellipsis) : value;
    }
  }
  static {
    this.ɵfac = function InternationalizationDirective_Factory(t) {
      return new (t || InternationalizationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: InternationalizationDirective,
      selectors: [["", "internationalization", ""]],
      inputs: {
        property: "property",
        data: "data",
        ellipsis: "ellipsis"
      }
    });
  }
}

/***/ }),

/***/ 2079:
/*!*********************************************************!*\
  !*** ./src/app/core/directive/on-viewport.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InViewportDirective: () => (/* binding */ InViewportDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class InViewportDirective {
  constructor(_el) {
    this._el = _el;
    this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges() {
    this.check();
  }
  ngOnInit() {}
  check(partial = true) {
    const el = this._el.nativeElement;
    const elSize = el.offsetWidth * el.offsetHeight;
    const rec = el.getBoundingClientRect();
    const vp = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const sectionMarging = 370;
    const tViz = rec.top >= 0 && rec.top < vp.height - sectionMarging;
    const bViz = rec.bottom > 0 && rec.bottom <= vp.height - sectionMarging;
    const vVisible = partial ? tViz || bViz : tViz && bViz;
    let event = {
      target: el,
      value: false
    };
    event["value"] = elSize && vVisible;
    if (event["value"]) {
      this.inViewport.emit(event);
    }
  }
  static {
    this.ɵfac = function InViewportDirective_Factory(t) {
      return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InViewportDirective,
      selectors: [["", "in-viewport", ""]],
      inputs: {
        pageYOffset: "pageYOffset"
      },
      outputs: {
        inViewport: "inViewport"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}

/***/ }),

/***/ 370:
/*!********************************************!*\
  !*** ./src/app/core/pipe/ellipsis.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EllipsisPipe: () => (/* binding */ EllipsisPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class EllipsisPipe {
  transform(val, args = 60) {
    if (val.length > args) {
      return val.substring(0, args) + "...";
    }
    return val;
  }
  static {
    this.ɵfac = function EllipsisPipe_Factory(t) {
      return new (t || EllipsisPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ellipsis",
      type: EllipsisPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 6171:
/*!**************************************************!*\
  !*** ./src/app/core/pipe/localized-date.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalizedDatePipe: () => (/* binding */ LocalizedDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class LocalizedDatePipe {
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, pattern = "mediumDate") {
    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe(this.locale);
    // For now, the translation will be manual, further on, the i18n service will be injected to provide such capability...
    return datePipe.transform(value, pattern) || (this.locale === "en" ? "Currently" : "Atualmente");
  }
  static {
    this.ɵfac = function LocalizedDatePipe_Factory(t) {
      return new (t || LocalizedDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "localizedDate",
      type: LocalizedDatePipe,
      pure: false
    });
  }
}

/***/ }),

/***/ 4235:
/*!*********************************************************!*\
  !*** ./src/app/core/pipe/safari-date-formatter.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafariDateFormatterPipe: () => (/* binding */ SafariDateFormatterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SafariDateFormatterPipe {
  transform(value) {
    if (value) {
      return value.replace(/-/g, '/');
    }
    return value;
  }
  static {
    this.ɵfac = function SafariDateFormatterPipe_Factory(t) {
      return new (t || SafariDateFormatterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safariDateFormatter",
      type: SafariDateFormatterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 7366:
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SorterService: () => (/* binding */ SorterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SorterService {
  constructor() {
    this.property = null;
    this.direction = 1;
  }
  sort(key, order = "asc") {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
  static {
    this.ɵfac = function SorterService_Factory(t) {
      return new (t || SorterService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SorterService,
      factory: SorterService.ɵfac
    });
  }
}

/***/ }),

/***/ 7997:
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
function debounce(delay = 300) {
  let interval;
  return function (target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
        original.apply(this, args);
      }, delay);
    };
    return interval;
  };
}

/***/ }),

/***/ 7865:
/*!*********************************************************************************!*\
  !*** ./src/app/experience/experience-timeline/experience-timeline.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceTimelineComponent: () => (/* binding */ ExperienceTimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ 4235);
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ 6171);




const _c0 = ["line"];
class ExperienceTimelineComponent {
  constructor(elRef, renderer, locale) {
    this.elRef = elRef;
    this.renderer = renderer;
    this.locale = locale;
    this._experiences = [];
    this.onTimelineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get currentPosition() {
    return this._currentPosition;
  }
  set currentPosition(value) {
    if (value) {
      this._currentPosition = value;
      this.updateTimelineNavigation();
    }
  }
  get experiences() {
    return this._experiences;
  }
  set experiences(value) {
    if (value) {
      this._experiences = value;
      this.populateExperienceTimeline();
    }
  }
  ngOnInit() {
    this.offsetWidth = this.elRef.nativeElement.offsetWidth;
    this.removeEventListener = this.renderer.listen(this.elRef.nativeElement, "click", event => {
      if (event.target && event.target.getAttribute("id-position")) {
        const targetId = event.target.getAttribute("id-position");
        this.onTimelineChanged.emit(targetId);
      }
    });
  }
  // Cleanup by removing the event listener on destroy
  ngOnDestroy() {
    this.removeEventListener();
  }
  updateTimelineNavigation() {
    const activePreviousElem = this.line.nativeElement.querySelector(".milestone.active.current");
    this.renderer.removeClass(activePreviousElem, "current");
    const targetElem = this.line.nativeElement.querySelector(`div[id-position="${this.currentPosition}"]`);
    this.renderer.addClass(targetElem, "current");
  }
  daysBetween(startDate, endDate) {
    // The .replace() is necessary in order to avoid issues in the Firefox browser.
    const pointA = new Date(startDate.replace(/-/g, '/'));
    const pointB = new Date(endDate.replace(/-/g, '/'));
    return Math.round(Math.abs(+pointA - +pointB) / 8.64e7);
  }
  retrieveTodayDateAsString() {
    const today = new Date();
    return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
  }
  populateExperienceTimeline() {
    let dates = this._experiences.map(experience => experience.startAt);
    // Adding the current day in order to complete the timeline.
    dates.push(this.retrieveTodayDateAsString());
    if (dates && dates.length < 2) {
      this.renderer.setStyle(this.elRef.nativeElement, "visibility", "hidden");
    } else if (dates.length >= 2) {
      const daysBetween = this.daysBetween(dates[0], dates[dates.length - 1]);
      const oneDayInPixels = this.offsetWidth / daysBetween;
      // Draw first date milestone      
      this.renderer.appendChild(this.line.nativeElement, this.createMilestone(1, 0, dates[0]));
      let i;
      const lastFrameLoop = dates.length - 1;
      // Draw the middle date milestones
      for (i = 1; i < lastFrameLoop; i++) {
        const periodInDays = this.daysBetween(dates[0], dates[i]);
        const periodWidth = periodInDays * oneDayInPixels;
        const milestoneElement = this.createMilestone(i + 1, periodWidth, dates[i]);
        if (i == lastFrameLoop - 1) {
          this.renderer.addClass(milestoneElement, "current");
        }
        this.renderer.appendChild(this.line.nativeElement, milestoneElement);
      }
      // Draw last date milestone ( the current frame )
      const lastDataMilestone = this.createCurrentTriangle(i + 1);
      this.renderer.appendChild(this.line.nativeElement, lastDataMilestone);
    }
  }
  calculatePosition(leftPosition, offsetWidth) {
    return leftPosition * 100 / offsetWidth;
  }
  createMilestone(index, left, date) {
    const milestoneElement = this.renderer.createElement("div");
    this.renderer.addClass(milestoneElement, "milestone");
    this.renderer.addClass(milestoneElement, "active");
    const leftPos = this.calculatePosition(left, this.offsetWidth);
    // Uses at most 95% instead of 100% in order to avoid collision to the arrow icon on the right side of the timeline.
    this.renderer.setStyle(milestoneElement, "left", `${Math.min(95, leftPos)}%`);
    this.renderer.setAttribute(milestoneElement, "id-position", index.toString());
    const labelElement = this.createLabelElement(date.toString());
    this.renderer.appendChild(milestoneElement, labelElement);
    return milestoneElement;
  }
  createCurrentTriangle(index) {
    const milestoneElement = this.renderer.createElement("div");
    this.renderer.addClass(milestoneElement, "milestone");
    this.renderer.addClass(milestoneElement, "active");
    this.renderer.addClass(milestoneElement, "future");
    this.renderer.setStyle(milestoneElement, "left", "100%");
    return milestoneElement;
  }
  // Update this function based on the desired date label formatting.
  createLabelElement(date) {
    const safariDateFormatterPipe = new _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_0__.SafariDateFormatterPipe();
    const safariDateFormatterPipeValue = safariDateFormatterPipe.transform(date);
    const localizedDatePipe = new _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalizedDatePipe(this.locale);
    let month = localizedDatePipe.transform(safariDateFormatterPipeValue, "MMM");
    const labelElement = this.renderer.createElement("div");
    this.renderer.addClass(labelElement, "popupSpan");
    const monthSpan = this.renderer.createElement("span");
    this.renderer.addClass(monthSpan, "month");
    this.renderer.appendChild(monthSpan, this.renderer.createText(month));
    const year = localizedDatePipe.transform(safariDateFormatterPipeValue, "yyyy");
    const yearSpan = this.renderer.createElement("span");
    this.renderer.addClass(yearSpan, "year");
    this.renderer.appendChild(yearSpan, this.renderer.createText(year));
    this.renderer.appendChild(labelElement, monthSpan);
    this.renderer.appendChild(labelElement, yearSpan);
    return labelElement; // year, E.g: May. 2020
  }
  static {
    this.ɵfac = function ExperienceTimelineComponent_Factory(t) {
      return new (t || ExperienceTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ExperienceTimelineComponent,
      selectors: [["app-experience-timeline"]],
      viewQuery: function ExperienceTimelineComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
        }
      },
      inputs: {
        currentPosition: "currentPosition",
        experiences: "experiences"
      },
      outputs: {
        onTimelineChanged: "onTimelineChanged"
      },
      decls: 5,
      vars: 0,
      consts: [["line", ""], [1, "bottom-container"], [1, "lineCont"], [1, "line"], [1, "mainCont"]],
      template: function ExperienceTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      styles: [".bottom-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -75px;\n}\n\n.mainCont[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  position: relative;\n  color: white;\n  font-size: 62px;\n  text-align: center;\n  transition: all 0.2s ease-out;\n}\n\n.lineCont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n.lineCont[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  position: relative;\n}\n\n.milestone[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: -6px;\n  border: 3px solid white;\n  cursor: pointer;\n  transition: text-shadow 0.3s linear;\n}\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 10px;\n  white-space: nowrap;\n  color: white;\n  position: absolute;\n  top: 20px;\n  left: -35px;\n  transition: all 0.1s ease-out;\n  pointer-events: none; \n\n}\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n.milestone.current[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: #414c73;\n  top: -8px;\n  font-size: 22px;\n  text-shadow: 0 0 15px white;\n}\n.milestone.active[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  top: -40px;\n  display: block;\n}\n.milestone.active.future[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  border-top: 7px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 13px solid white;\n  background: transparent;\n  border-radius: 0;\n  border-right: 0;\n  pointer-events: none;\n}\n.milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  left: -50px;\n  top: -50px;\n}\n\n@keyframes _ngcontent-%COMP%_grow {\n  0% {\n    transform: scale(0.98);\n  }\n  50% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUEsRUFBQSw2REFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBQU47QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFLRSxzQkFBQTtFQUZGO0VBS0E7SUFLQyxzQkFBQTtFQUhEO0VBTUE7SUFLRyxzQkFBQTtFQUpIO0FBQ0YiLCJmaWxlIjoiZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC03NXB4O1xufVxuXG4ubWFpbkNvbnQge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDYycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5saW5lQ29udCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcblxuICAubGluZSB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLm1pbGVzdG9uZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcblxuICAucG9wdXBTcGFuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0zNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBPbmx5IHRoZSBDaXJjbGVzIGluIHRoZSB0aW1lbGluZSBhcmUgbGlzdGVuZWQgYnkgZXZlbnRzLiAqL1xuXG4gICAgLm1vbnRoIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG4gICYuY3VycmVudCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICM0MTRjNzM7XG4gICAgdG9wOiAtOHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gIH1cbiAgJi5hY3RpdmUgLnBvcHVwU3BhbiB7XG4gICAgdG9wOiAtNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAmLmFjdGl2ZS5mdXR1cmUge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRvcDogLTUwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncm93IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyAgICBcbiAgfVxuICAgXG4gIDUwJSB7XG4gICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICB9XG4gICBcbiAgMTAwJSB7XG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUEsRUFBQSw2REFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBQU47QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFLRSxzQkFBQTtFQUZGO0VBS0E7SUFLQyxzQkFBQTtFQUhEO0VBTUE7SUFLRyxzQkFBQTtFQUpIO0FBQ0Y7QUFYQSw0d0lBQTR3SSIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC03NXB4O1xufVxuXG4ubWFpbkNvbnQge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDYycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5saW5lQ29udCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcblxuICAubGluZSB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLm1pbGVzdG9uZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcblxuICAucG9wdXBTcGFuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0zNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBPbmx5IHRoZSBDaXJjbGVzIGluIHRoZSB0aW1lbGluZSBhcmUgbGlzdGVuZWQgYnkgZXZlbnRzLiAqL1xuXG4gICAgLm1vbnRoIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG4gICYuY3VycmVudCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICM0MTRjNzM7XG4gICAgdG9wOiAtOHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gIH1cbiAgJi5hY3RpdmUgLnBvcHVwU3BhbiB7XG4gICAgdG9wOiAtNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAmLmFjdGl2ZS5mdXR1cmUge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRvcDogLTUwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncm93IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyAgICBcbiAgfVxuICAgXG4gIDUwJSB7XG4gICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICB9XG4gICBcbiAgMTAwJSB7XG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -90px;\n  }\n  .milestone[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n    top: -6px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: 15px;\n  }\n  .milestone.current[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -8px;\n  }\n  .milestone.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    top: -45px;\n    left: -40px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -60px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -20px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGFBQUE7RUFBTjtFQUdFO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBRE47RUFHTTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBRFY7RUFHTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQURWO0VBR1U7SUFDSSxlQUFBO0VBRGQ7RUFJTTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRlY7QUFDRjtBQU1BO0VBRUk7SUFDSSxhQUFBO0VBTE47RUFTTTtJQUNJLFdBQUE7RUFQVjtFQVNVO0lBQ0ksYUFBQTtFQVBkO0VBVU07SUFDSSxXQUFBO0VBUlY7QUFDRjtBQVlBO0VBQ0k7SUFDSSxhQUFBO0VBVk47QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIGJvdHRvbTogLTkwcHg7XG4gICAgfVxuICAgICAgXG4gICAgLm1pbGVzdG9uZSB7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIFxuICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYuY3VycmVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHRvcDogLThweDtcbiAgICBcbiAgICAgICAgICAgIC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBib3R0b206IC02MHB4O1xuICAgIH1cbiAgICBcbiAgICAubWlsZXN0b25lIHsgICAgICAgIFxuICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuXG4gICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGFBQUE7RUFBTjtFQUdFO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBRE47RUFHTTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBRFY7RUFHTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQURWO0VBR1U7SUFDSSxlQUFBO0VBRGQ7RUFJTTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRlY7QUFDRjtBQU1BO0VBRUk7SUFDSSxhQUFBO0VBTE47RUFTTTtJQUNJLFdBQUE7RUFQVjtFQVNVO0lBQ0ksYUFBQTtFQVBkO0VBVU07SUFDSSxXQUFBO0VBUlY7QUFDRjtBQVlBO0VBQ0k7SUFDSSxhQUFBO0VBVk47QUFDRjtBQUNBLGdpRUFBZ2lFIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIGJvdHRvbTogLTkwcHg7XG4gICAgfVxuICAgICAgXG4gICAgLm1pbGVzdG9uZSB7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIFxuICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYuY3VycmVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHRvcDogLThweDtcbiAgICBcbiAgICAgICAgICAgIC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBib3R0b206IC02MHB4O1xuICAgIH1cbiAgICBcbiAgICAubWlsZXN0b25lIHsgICAgICAgIFxuICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuXG4gICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8474:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 6327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data.service */ 875);
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sorter.service */ 7366);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ 8955);
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ 7865);
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/pipe/safari-date-formatter.pipe */ 4235);
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pipe/localized-date.pipe */ 6171);











const _c0 = ["orderedList"];
const _c1 = a0 => ({
  "disabled": a0
});
const _c2 = () => ["fas", "chevron-left"];
const _c3 = () => ["fas", "chevron-right"];
const _c4 = a0 => ({
  "selected": a0
});
const _c5 = a0 => ["fab", a0];
function ExperienceComponent_li_39_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const technology_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](technology_r2);
  }
}
function ExperienceComponent_li_39_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const media_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", media_r3.http, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", media_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c5, media_r3.icon));
  }
}
function ExperienceComponent_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 25)(1, "div", 26)(2, "div", 27)(3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 30)(6, "div", 31)(7, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 33)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 34)(23, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ExperienceComponent_li_39_span_32_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ExperienceComponent_li_39_a_34_Template, 2, 5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exp_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", exp_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c4, i_r5 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", exp_r4.website, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", exp_r4.logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", exp_r4.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", exp_r4.website, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exp_r4.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", exp_r4.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 15, exp_r4.startAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](21, 22, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 20, exp_r4.endAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", exp_r4.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", exp_r4.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", exp_r4.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", exp_r4.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", exp_r4.medias);
  }
}
class ExperienceComponent {
  constructor(dataService, sortService, renderer, library) {
    this.dataService = dataService;
    this.sortService = sortService;
    this.renderer = renderer;
    this.library = library;
    this.SELECTED_CLASS = "selected";
    this.LEAVE_RIGHT_CLASS = "leave-right";
    this.ENTER_RIGHT_CLASS = "enter-right";
    this.LEAVE_LEFT_CLASS = "leave-left";
    this.ENTER_LEFT_CLASS = "enter-left";
    this.TRANSITION_TIME = 400;
    this.experiencesOrdered = [];
    library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.fab);
  }
  ngOnInit() {
    // Fetch the Experiences from the Data Service
    this.dataService.getExperiences().subscribe(experiences => {
      this.currentPosition = experiences.length;
      this.experiences = experiences;
      this.experiencesOrdered = [...experiences];
      this.experiencesOrdered.sort(this.sortService.sort("position", "desc"));
      this.backgroundUrl = this.retrieveBackgroundUrl();
      this.updateMobileNavigationView();
      this.preloadBounderyImages(experiences.map(xp => xp.backgroundUrl));
    });
  }
  // Preloads the boundaries images related to the current position in order to avoid the "blinking" of the background while navigating.
  preloadBounderyImages(images) {
    images.forEach(function (image, i) {
      const preloadImages = new Array();
      preloadImages[i] = new Image();
      preloadImages[i].src = image;
    });
  }
  createListSelector(position) {
    return `li[id="${position}"]`;
  }
  onClickPrevious(targetPos) {
    const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
    this.renderer.removeClass(currElem, this.SELECTED_CLASS);
    this.renderer.addClass(currElem, this.LEAVE_RIGHT_CLASS);
    setTimeout(() => {
      this.renderer.removeClass(currElem, this.LEAVE_RIGHT_CLASS);
    }, this.TRANSITION_TIME);
    // Subtracts one to the current position in order to move backwards in the timeline.
    this.currentPosition = targetPos ? +targetPos : this.currentPosition - 1;
    this.backgroundUrl = this.retrieveBackgroundUrl();
    const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
    this.renderer.addClass(targetElem, this.SELECTED_CLASS);
    this.renderer.addClass(targetElem, this.ENTER_LEFT_CLASS);
    setTimeout(() => {
      this.renderer.removeClass(targetElem, this.ENTER_LEFT_CLASS);
    }, this.TRANSITION_TIME);
    this.updateMobileNavigationView();
  }
  onClickNext(targetPos) {
    const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
    this.renderer.removeClass(currElem, this.SELECTED_CLASS);
    this.renderer.addClass(currElem, this.LEAVE_LEFT_CLASS);
    setTimeout(() => {
      this.renderer.removeClass(currElem, this.LEAVE_LEFT_CLASS);
    }, this.TRANSITION_TIME);
    // Sums one to the current position in order to move further in the timeline.
    this.currentPosition = targetPos ? +targetPos : this.currentPosition + 1;
    this.backgroundUrl = this.retrieveBackgroundUrl();
    const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
    this.renderer.addClass(targetElem, this.SELECTED_CLASS);
    this.renderer.addClass(targetElem, this.ENTER_RIGHT_CLASS);
    setTimeout(() => {
      this.renderer.removeClass(targetElem, this.ENTER_RIGHT_CLASS);
    }, this.TRANSITION_TIME);
    this.updateMobileNavigationView();
  }
  updateNavigation(targetPos) {
    // in case of == nothing to do here
    if (targetPos > this.currentPosition) {
      this.onClickNext(targetPos);
    } else if (targetPos < this.currentPosition) {
      this.onClickPrevious(targetPos);
    }
  }
  retrieveBackgroundUrl() {
    return this.experiences[this.currentPosition - 1].backgroundUrl;
  }
  updateMobileNavigationView() {
    this.previousYear = this.experiences[this.currentPosition - 2]?.startAt || this.experiences[this.currentPosition - 1].startAt;
    this.currentYear = this.experiences[this.currentPosition - 1].startAt;
    this.nextYear = this.experiences[this.currentPosition]?.startAt || this.experiences[this.currentPosition - 1].startAt;
  }
  static {
    this.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_1__.SorterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconLibrary));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      viewQuery: function ExperienceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.orderedList = _t.first);
        }
      },
      decls: 41,
      vars: 43,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_0 = goog.getMsg("Previous");
          i18n_0 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_0;
        } else {
          i18n_0 = "Pr\xE9c\xE9dent";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_1 = goog.getMsg("Next");
          i18n_1 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_1;
        } else {
          i18n_1 = "suivant";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2 = goog.getMsg("Previous");
          i18n_2 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2;
        } else {
          i18n_2 = "Pr\xE9c\xE9dent";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_3 = goog.getMsg("Next");
          i18n_3 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_3;
        } else {
          i18n_3 = "suivant";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4 = goog.getMsg("Experiences");
          i18n_4 = MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4;
        } else {
          i18n_4 = "Exp\xE9riences";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_5 = goog.getMsg("Previous");
          i18n_5 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_5;
        } else {
          i18n_5 = "Pr\xE9c\xE9dent";
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_6 = goog.getMsg("Next");
          i18n_6 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_6;
        } else {
          i18n_6 = "suivant";
        }
        return [["orderedList", ""], i18n_4, i18n_5, i18n_6, ["id", "experience", 1, "landscape"], [1, "overlay"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "click", "ngClass"], ["title", i18n_0, 1, "icon", 3, "icon"], [1, "devider"], ["href", "javascript:void(0)", 1, "next", 3, "click", "ngClass"], ["title", i18n_1, 1, "icon", 3, "icon"], [1, "navigation-mobile"], [1, "molding"], [3, "innerHtml"], ["title", i18n_2, 1, "icon", 3, "icon"], [1, "current"], ["title", i18n_3, 1, "icon", 3, "icon"], [1, "middle-container"], [1, "events-content"], [3, "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "onTimelineChanged", "experiences", "currentPosition"], [3, "ngClass", "id"], [1, "header-block"], [1, "logo-block"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "info-block"], [1, "company-name"], ["internationalization", "", "property", "role", 1, "role", 3, "data"], [1, "period"], [1, "location"], ["internationalization", "", "property", "city", 1, "city", 3, "data"], ["internationalization", "", "property", "country", 1, "country", 3, "data"], ["internationalization", "", "property", "description", 1, "description", 3, "data"], [1, "technologies"], ["class", "hashtag", 4, "ngFor", "ngForOf"], [1, "social-media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "hashtag"], [1, "icon", 3, "icon", "title"]];
      },
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 9)(8, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onClickPrevious());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "fa-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](11, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "|");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onClickNext());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](16, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15)(19, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onClickPrevious());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "safariDateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "localizedDate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "fa-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "safariDateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "localizedDate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onClickNext());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "fa-icon", 20)(32, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "safariDateFormatter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "localizedDate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 21)(36, "div", 22)(37, "ol", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ExperienceComponent_li_39_Template, 35, 27, "li", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "app-experience-timeline", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTimelineChanged", function ExperienceComponent_Template_app_experience_timeline_onTimelineChanged_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.updateNavigation($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + ctx.backgroundUrl + ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](31, _c1, ctx.currentPosition == 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](33, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c1, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](37, _c1, ctx.currentPosition == 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](23, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 16, ctx.previousYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](39, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 21, ctx.currentYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](40, _c1, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](42, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](34, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 26, ctx.nextYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.experiencesOrdered);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("experiences", ctx.experiences)("currentPosition", ctx.currentPosition);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_2__.InternationalizationDirective, _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceTimelineComponent, _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__.SafariDateFormatterPipe, _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizedDatePipe],
      styles: [".overlay[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.6418942577) 0%, rgba(0, 0, 0, 0.7735469188) 25%, rgba(0, 0, 0, 0.9079726891) 75%, rgba(0, 0, 0, 0.9924264706) 100%);\n  width: 100%;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-top: 4em;\n  padding-bottom: 8em;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  background-size: cover;\n  top: -4em;\n  position: relative;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 1400px;\n  align-self: center;\n  width: 85vw;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  flex-wrap: wrap;\n}\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n}\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n  transition: text-shadow 0.3s linear;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.middle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  color: #fff;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.4s;\n  min-height: 570px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 50px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 1em;\n  font-style: italic;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: capitalize;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  line-height: 1.5em;\n  font-size: 20px;\n  font-weight: normal;\n  text-align: left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transform: translateX(-100%);\n  animation-duration: 0.4s;\n  animation-timing-function: ease-in-out;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  transform: translateX(0);\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_cd-enter-right;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-left[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_cd-enter-left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  animation-direction: reverse;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1em;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n  padding: 2px 5px 2px 5px;\n  background-color: #414c73;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%]:before {\n  content: \"#\";\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1em;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n@keyframes _ngcontent-%COMP%_cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFISSxhQUFBO0VBTUEseUJBQUE7RUFDQSx3S0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBSUksc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQU9BLDZDQUFBO0FBTko7O0FBU0E7RUF0Q0ksYUFBQTtFQXlDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjtBQUtJO0VBQ0ksWUFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQVFJO0VBQ0ksYUFBQTtBQU5SO0FBUVE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFOWjtBQVVJO0VBdkVBLGFBQUE7RUEwRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU9RO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBTFo7QUFRUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFLQSxtQ0FBQTtBQU5aO0FBUVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTmhCO0FBU1k7RUFDSSwyQkFBQTtBQVBoQjtBQVdRO0VBQ0ksWUFBQTtBQVRaO0FBWVE7RUFDSSxZQUFBO0FBVlo7QUFhUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFLQSxtQ0FBQTtBQVhaO0FBYVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBWGhCO0FBYVk7RUFDSSwyQkFBQTtBQVhoQjs7QUFpQkE7RUF4SUksYUFBQTtFQTJJQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBYUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUdBLHVCQUFBO0VBQ0EsaUJBQUE7QUFYUjtBQWFRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFYWjtBQWFZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBWGhCO0FBYWdCO0VBQ0ksWUFBQTtBQVhwQjtBQWVZO0VBQ0ksWUFBQTtBQWJoQjtBQWlCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZlo7QUFpQlk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFmaEI7QUFtQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFqQlo7QUFvQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQlo7QUFvQlk7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFsQmhCO0FBc0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFyQlo7QUF3QlE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBdEJaO0FBd0JZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBS0EsNEJBQUE7RUFHQSx3QkFBQTtFQUdBLHNDQUFBO0FBdEJoQjtBQXlCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFLQSx3QkFBQTtBQXZCaEI7QUEyQlk7RUFHSSw4QkFBQTtBQXpCaEI7QUE0Qlk7RUFHSSw2QkFBQTtBQTFCaEI7QUE2Qlk7RUFHSSw0QkFBQTtBQTNCaEI7QUErQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTdCWjtBQStCWTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3QmhCO0FBK0JnQjtFQUNJLFlBQUE7QUE3QnBCO0FBa0NRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBaENaO0FBa0NZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBaENoQjtBQWtDZ0I7RUFDSSxlQUFBO0FBaENwQjtBQWtDZ0I7RUFDSSxjQUFBO0FBaENwQjs7QUF1Q0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQ0FBQTtFQXBDTjtFQXNDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQXBDTjtBQUNGO0FBa0RBO0VBQ0k7SUFDSSxVQUFBO0lBS0EsMkJBQUE7RUF0Q047RUF3Q0U7SUFDSSxVQUFBO0lBS0EseUJBQUE7RUF0Q047QUFDRjtBQXlDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0VBdkNOO0VBeUNFO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VBdkNOO0FBQ0Y7QUFxREE7RUFDSTtJQUNJLFVBQUE7SUFLQSw0QkFBQTtFQXpDTjtFQTJDRTtJQUNJLFVBQUE7SUFLQSx5QkFBQTtFQXpDTjtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm92ZXJsYXkge1xuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyLCAwLCAzNiwgMC42NDE4OTQyNTc3MDMwODEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjc3MzU0NjkxODc2NzUwNykgMjUlLCByZ2JhKDAsIDAsIDAsIDAuOTA3OTcyNjg5MDc1NjMwMykgNzUlLCByZ2JhKDAsIDAsIDAsIDAuOTkyNDI2NDcwNTg4MjM1MykgMTAwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xufVxuXG4ubGFuZHNjYXBlIHtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICBcbiAgICAvLyBUaGlzIGlzIHN1cHBvcnRlZCBuYXRpdmVseSBieSBDaHJvbWUsIE9wZXJhIGFuZCBTYWZhcmkuIEZpcmVmb3ggYW5kIElFIGhhc24ndCBpbXBsZW1lbnRlZCBpdCB5ZXQgKGJ1Z3ppbC5sYSkuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogODV2dztcbn1cblxuLnRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuXG4gICAgICAgICYgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGVkIGZvciBkZXNrdG9wIHJlc29sdXRpb25zIG9yIGhpZ2hlci5cbiAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJldmlvdXMge1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICBcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpZGVyIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pZGRsZS1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgbWluLWhlaWdodDogNTcwcHg7XG5cbiAgICAgICAgLmhlYWRlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAubG9nby1ibG9jayB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5mby1ibG9jayB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZWZpbmVzIHRoZSBhbmltYXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIG9yZGVyZWQgbGlzdC5cbiAgICAgICAgICAgIGxpLmVudGVyLXJpZ2h0LCBsaS5sZWF2ZS1yaWdodCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaS5lbnRlci1sZWZ0LCBsaS5sZWF2ZS1sZWZ0IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpLmxlYXZlLXJpZ2h0LCBsaS5sZWF2ZS1sZWZ0IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVjaG5vbG9naWVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuXG4gICAgICAgICAgICBzcGFuLmhhc2h0YWcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0YzczO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4N2ExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBSEksYUFBQTtFQU1BLHlCQUFBO0VBQ0Esd0tBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUlJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFPQSw2Q0FBQTtBQU5KOztBQVNBO0VBdENJLGFBQUE7RUF5Q0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFo7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVFRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBTlo7QUFVSTtFQXZFQSxhQUFBO0VBMEVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUxaO0FBUVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBS0EsbUNBQUE7QUFOWjtBQVFZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5oQjtBQVNZO0VBQ0ksMkJBQUE7QUFQaEI7QUFXUTtFQUNJLFlBQUE7QUFUWjtBQVlRO0VBQ0ksWUFBQTtBQVZaO0FBYVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBS0EsbUNBQUE7QUFYWjtBQWFZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVhoQjtBQWFZO0VBQ0ksMkJBQUE7QUFYaEI7O0FBaUJBO0VBeElJLGFBQUE7RUEySUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFHQSx1QkFBQTtFQUNBLGlCQUFBO0FBWFI7QUFhUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBWFo7QUFhWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVhoQjtBQWFnQjtFQUNJLFlBQUE7QUFYcEI7QUFlWTtFQUNJLFlBQUE7QUFiaEI7QUFpQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZaO0FBaUJZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBZmhCO0FBbUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJaO0FBb0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBbEJaO0FBb0JZO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBbEJoQjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXVCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBckJaO0FBd0JRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXRCWjtBQXdCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUtBLDRCQUFBO0VBR0Esd0JBQUE7RUFHQSxzQ0FBQTtBQXRCaEI7QUF5Qlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBS0Esd0JBQUE7QUF2QmhCO0FBMkJZO0VBR0ksOEJBQUE7QUF6QmhCO0FBNEJZO0VBR0ksNkJBQUE7QUExQmhCO0FBNkJZO0VBR0ksNEJBQUE7QUEzQmhCO0FBK0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE3Qlo7QUErQlk7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBN0JoQjtBQStCZ0I7RUFDSSxZQUFBO0FBN0JwQjtBQWtDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQWhDWjtBQWtDWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWhDaEI7QUFrQ2dCO0VBQ0ksZUFBQTtBQWhDcEI7QUFrQ2dCO0VBQ0ksY0FBQTtBQWhDcEI7O0FBdUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUFwQ047RUFzQ0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUFwQ047QUFDRjtBQWtEQTtFQUNJO0lBQ0ksVUFBQTtJQUtBLDJCQUFBO0VBdENOO0VBd0NFO0lBQ0ksVUFBQTtJQUtBLHlCQUFBO0VBdENOO0FBQ0Y7QUF5Q0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtFQXZDTjtFQXlDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQXZDTjtBQUNGO0FBcURBO0VBQ0k7SUFDSSxVQUFBO0lBS0EsNEJBQUE7RUF6Q047RUEyQ0U7SUFDSSxVQUFBO0lBS0EseUJBQUE7RUF6Q047QUFDRjtBQXRGQSxvZ2hCQUFvZ2hCIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5vdmVybGF5IHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgMCwgMzYpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNjQxODk0MjU3NzAzMDgxMykgMCUsIHJnYmEoMCwgMCwgMCwgMC43NzM1NDY5MTg3Njc1MDcpIDI1JSwgcmdiYSgwLCAwLCAwLCAwLjkwNzk3MjY4OTA3NTYzMDMpIDc1JSwgcmdiYSgwLCAwLCAwLCAwLjk5MjQyNjQ3MDU4ODIzNTMpIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbn1cblxuLmxhbmRzY2FwZSB7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdG9wOiAtNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgXG4gICAgLy8gVGhpcyBpcyBzdXBwb3J0ZWQgbmF0aXZlbHkgYnkgQ2hyb21lLCBPcGVyYSBhbmQgU2FmYXJpLiBGaXJlZm94IGFuZCBJRSBoYXNuJ3QgaW1wbGVtZW50ZWQgaXQgeWV0IChidWd6aWwubGEpLlxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDg1dnc7XG59XG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogNDtcblxuICAgICAgICAmIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlZCBmb3IgZGVza3RvcCByZXNvbHV0aW9ucyBvciBoaWdoZXIuXG4gICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWRlciB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU3MHB4O1xuXG4gICAgICAgIC5oZWFkZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgLmxvZ28tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmluZm8tYmxvY2sge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucm9sZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRGVmaW5lcyB0aGUgYW5pbWF0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBvcmRlcmVkIGxpc3QuXG4gICAgICAgICAgICBsaS5lbnRlci1yaWdodCwgbGkubGVhdmUtcmlnaHQge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkuZW50ZXItbGVmdCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaS5sZWF2ZS1yaWdodCwgbGkubGVhdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2hub2xvZ2llcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGM3MztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 1024px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .landscape[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n@media screen and (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n    padding-top: 6em;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-align: center;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #fff;\n    display: inline-block;\n    padding: 10px 1em 10px 1em;\n    border-radius: 10px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    align-self: center;\n    font-size: 35px;\n    font-weight: 600;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 2em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 6px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFJUTtJQUNJLGVBQUE7RUFWVjtFQWFNO0lBQ0ksZUFBQTtFQVhWO0VBbUJVO0lBQ0ksZUFBQTtFQWpCZDtFQW9CVTtJQUNJLGVBQUE7RUFsQmQ7RUFxQlU7SUFDSSxlQUFBO0VBbkJkO0VBdUJNO0lBQ0ksZUFBQTtFQXJCVjtFQXdCTTtJQUNJLGVBQUE7RUF0QlY7RUEwQkU7SUFDSSw2QkFBQTtFQXhCTjtBQUNGO0FBMkJBO0VBRUk7SUFDSSxzQkFBQTtFQTFCTjtFQTRCTTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUExQlY7RUE4QkU7SUFDSSxnQkFBQTtFQTVCTjtFQThCTTtJQUNJLGVBQUE7RUE1QlY7QUFDRjtBQWdDQTtFQUVJO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQS9CTjtFQW9DTTtJQTVFSixhQUFBO0lBK0VRLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQS9CVjtFQWlDVTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSwwQkFBQTtJQUNBLG1CQUFBO0VBL0JkO0VBaUNjO0lBQ0ksV0FBQTtFQS9CbEI7RUFtQ1U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQWpDZDtFQW1DYztJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUFqQ2xCO0VBb0NjO0lBQ0ksMkJBQUE7RUFsQ2xCO0VBc0NVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBcENkO0VBdUNVO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFyQ2Q7RUF1Q2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VBckNsQjtFQXVDYztJQUNJLDJCQUFBO0VBckNsQjtFQTJDTTtJQUNJLGFBQUE7RUF6Q1Y7RUFpRFU7SUFDSSxlQUFBO0VBL0NkO0VBa0RVO0lBQ0ksdUJBQUE7RUFoRGQ7RUFtRFU7SUFDSSxrQkFBQTtFQWpEZDtFQW9EVTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQWxEZDtFQW9EYztJQUNJLGVBQUE7RUFsRGxCO0FBQ0Y7QUF3REE7RUFJUTtJQUNJLGVBQUE7RUF6RFY7RUE4RFU7SUFDSSxlQUFBO0VBNURkO0VBK0RVO0lBQ0ksMEJBQUE7RUE3RGQ7RUFzRVU7SUFDSSxZQUFBO0VBcEVkO0VBdUVVO0lBQ0ksZUFBQTtFQXJFZDtFQXdFVTtJQUNJLGVBQUE7RUF0RWQ7RUF5RVU7SUFDSSxlQUFBO0VBdkVkO0VBeUVjO0lBQ0ksZUFBQTtFQXZFbEI7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvbGUsIC5wZXJpb2QsIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhbmRzY2FwZSB7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgXG4gICAgLm92ZXJsYXkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogNmVtO1xuICAgIH1cbiAgICBcbiAgICAudG9wLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxZW0gMTBweCAxZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmV2aW91cyB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGlzYWJsZWQgZm9yIG1vYmlsZSByZXNvbHV0aW9ucy5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUsIC5yb2xlLCAucGVyaW9kLCAubG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcblxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAudGl0bGUgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgICBcbiAgICAgICAgICAgIC5jdXJyZW50IHsgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLm1vbGRpbmcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNnB4OyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZWNobm9sb2dpZXMgc3Bhbi5oYXNodGFnIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBSVE7SUFDSSxlQUFBO0VBVlY7RUFhTTtJQUNJLGVBQUE7RUFYVjtFQW1CVTtJQUNJLGVBQUE7RUFqQmQ7RUFvQlU7SUFDSSxlQUFBO0VBbEJkO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtFQXVCTTtJQUNJLGVBQUE7RUFyQlY7RUF3Qk07SUFDSSxlQUFBO0VBdEJWO0VBMEJFO0lBQ0ksNkJBQUE7RUF4Qk47QUFDRjtBQTJCQTtFQUVJO0lBQ0ksc0JBQUE7RUExQk47RUE0Qk07SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0VBMUJWO0VBOEJFO0lBQ0ksZ0JBQUE7RUE1Qk47RUE4Qk07SUFDSSxlQUFBO0VBNUJWO0FBQ0Y7QUFnQ0E7RUFFSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUEvQk47RUFvQ007SUE1RUosYUFBQTtJQStFUSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUEvQlY7RUFpQ1U7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMEJBQUE7SUFDQSxtQkFBQTtFQS9CZDtFQWlDYztJQUNJLFdBQUE7RUEvQmxCO0VBbUNVO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFqQ2Q7RUFtQ2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VBakNsQjtFQW9DYztJQUNJLDJCQUFBO0VBbENsQjtFQXNDVTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXBDZDtFQXVDVTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBckNkO0VBdUNjO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQXJDbEI7RUF1Q2M7SUFDSSwyQkFBQTtFQXJDbEI7RUEyQ007SUFDSSxhQUFBO0VBekNWO0VBaURVO0lBQ0ksZUFBQTtFQS9DZDtFQWtEVTtJQUNJLHVCQUFBO0VBaERkO0VBbURVO0lBQ0ksa0JBQUE7RUFqRGQ7RUFvRFU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFsRGQ7RUFvRGM7SUFDSSxlQUFBO0VBbERsQjtBQUNGO0FBd0RBO0VBSVE7SUFDSSxlQUFBO0VBekRWO0VBOERVO0lBQ0ksZUFBQTtFQTVEZDtFQStEVTtJQUNJLDBCQUFBO0VBN0RkO0VBc0VVO0lBQ0ksWUFBQTtFQXBFZDtFQXVFVTtJQUNJLGVBQUE7RUFyRWQ7RUF3RVU7SUFDSSxlQUFBO0VBdEVkO0VBeUVVO0lBQ0ksZUFBQTtFQXZFZDtFQXlFYztJQUNJLGVBQUE7RUF2RWxCO0FBQ0Y7QUFIQSw0NE9BQTQ0TyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBkaXNwbGF5LWZsZXgge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBcbiAgICAudG9wLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLnRpdGxlIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcblxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgICAgICAuY29tcGFueS1uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb2xlLCAucGVyaW9kLCAubG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYW5kc2NhcGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnRpdGxlIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgIFxuICAgIC5vdmVybGF5IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDZlbTtcbiAgICB9XG4gICAgXG4gICAgLnRvcC1jb250YWluZXIge1xuXG4gICAgICAgIC5uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XG5cbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgLm1vbGRpbmcge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMWVtIDEwcHggMWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERpc2FibGVkIGZvciBtb2JpbGUgcmVzb2x1dGlvbnMuXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgICAgICAuY29tcGFueS1uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29tcGFueS1uYW1lLCAucm9sZSwgLnBlcmlvZCwgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG5cbiAgICAudG9wLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLnRpdGxlIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgXG4gICAgICAgICAgICAuY3VycmVudCB7ICAgICAgICBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5tb2xkaW5nIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDZweDsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgICAgIC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2893:
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceModule: () => (/* binding */ ExperienceModule)
/* harmony export */ });
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience.component */ 8474);
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ 7865);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ 8423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class ExperienceModule {
  static {
    this.ɵfac = function ExperienceModule_Factory(t) {
      return new (t || ExperienceModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ExperienceModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExperienceModule, {
    declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceComponent, _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceTimelineComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule],
    exports: [_experience_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceComponent]
  });
})();

/***/ }),

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 6327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




class FooterComponent {
  constructor() {}
  ngOnInit() {
    this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithubSquare;
    this.year = new Date();
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 9,
      vars: 5,
      consts: [["itemscope", "", "itemtype", "https://schema.org/WPFooter"], [1, "fork-github"], ["href", "https://github.com/allalaspace", "target", "_blank"], [1, "icon", 3, "icon"], [1, "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "p", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fork on GitHub");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGithubSquare);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 2, ctx.year, "yyyy"), " \u00A9 Copyright");
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["footer[_ngcontent-%COMP%] {\n    background-color: #3a5f8e;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.fork-github[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: none;\n}\n\n.fork-github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #fff;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #fff;\n    font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9yay1naXRodWIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mb3JrLWdpdGh1YiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JrLWdpdGh1YiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mb3JrLWdpdGh1YiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0EsZ3lDQUFneUMiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JrLWdpdGh1YiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvcmstZ2l0aHViIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvcmstZ2l0aHViIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLmZvcmstZ2l0aHViIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMWVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 500px) {\n\n    .copyright[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n}\n\n@media screen and (max-width: 370px) {\n\n    .fork-github[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        flex-grow: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcblxuICAgIC5mb3JrLWdpdGh1YiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0Esb3NCQUFvc0IiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG5cbiAgICAuZm9yay1naXRodWIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-navigator-share */ 8071);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);






const _c0 = ["nav"];
const _c1 = ["shareBtn"];
class HeaderComponent {
  constructor(locale, renderer, ngNavigatorShareService) {
    this.locale = locale;
    this.renderer = renderer;
    this.ngNavigatorShareService = ngNavigatorShareService;
  }
  // use getter setter to define the properties
  get activeSection() {
    return this._activeSection;
  }
  get pageXOffset() {
    return this._pageXOffset;
  }
  set pageXOffset(value) {
    this._pageXOffset = value;
    this.onDetectScreenSize();
  }
  set activeSection(value) {
    this._activeSection = value;
    this.updateNavigation();
  }
  ngAfterViewInit() {
    // Share button available only for browsers that do support it.
    if (this.ngNavigatorShareService.canShare()) {
      this.shareBtn.nativeElement.style.display = "block";
    }
  }
  ngOnInit() {
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBars;
    this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShareAlt;
    this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCloudDownloadAlt;
  }
  updateNavigation() {
    if (this._activeSection && this.renderer) {
      // Remove any selected anchor
      const activePreviousElem = this.nav.nativeElement.querySelector("a.active");
      if (activePreviousElem) {
        this.renderer.removeClass(activePreviousElem, "active");
      }
      const targetElem = this.nav.nativeElement.querySelector(`a[href^="#${this._activeSection}"]`);
      if (targetElem) {
        this.renderer.addClass(targetElem, "active");
      }
    }
  }
  /*
   * For media types such as tablets and mobile devices, the nav-bar navigation should be
   * collapsed by default.
  */
  onDetectScreenSize() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }
  onToggleBar() {
    this.hasMenuToggled = !this.hasMenuToggled;
  }
  resetMenu() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }
  share() {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.ngNavigatorShareService.share({
          title: "Live Resume - Mohamed ali boudich ",
          text: "Hello, I'm a Full-stack Java Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!",
          url: "https://mohamedaliboudich.fr"
        });
      } catch (error) {
        console.log("You app is not shared, reason: ", error);
      }
    })();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__.NgNavigatorShareService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
        }
      },
      inputs: {
        pageXOffset: "pageXOffset",
        activeSection: "activeSection"
      },
      decls: 31,
      vars: 4,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_0 = goog.getMsg("Open Resume as PDF");
          i18n_0 = MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_0;
        } else {
          i18n_0 = "Ouvrir le CV au format PDF";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_1 = goog.getMsg("{$startTagSpan}About me{$closeTagSpan}", {
            "closeTagSpan": "\uFFFD/#12\uFFFD",
            "startTagSpan": "\uFFFD#12\uFFFD"
          }, {
            original_code: {
              "closeTagSpan": "</span>",
              "startTagSpan": "<span itemprop=\"name\">"
            }
          });
          i18n_1 = MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_1;
        } else {
          i18n_1 = "A propos";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_2 = goog.getMsg("{$startTagSpan}Experiences{$closeTagSpan}", {
            "closeTagSpan": "\uFFFD/#16\uFFFD",
            "startTagSpan": "\uFFFD#16\uFFFD"
          }, {
            original_code: {
              "closeTagSpan": "</span>",
              "startTagSpan": "<span itemprop=\"name\">"
            }
          });
          i18n_2 = MSG_EXTERNAL_experiences$$SRC_APP_HEADER_HEADER_COMPONENT_TS_2;
        } else {
          i18n_2 = "Exp\xE9riences";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_posts$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("{$startTagSpan}Posts{$closeTagSpan}", {
            "closeTagSpan": "\uFFFD/#20\uFFFD",
            "startTagSpan": "\uFFFD#20\uFFFD"
          }, {
            original_code: {
              "closeTagSpan": "</span>",
              "startTagSpan": "<span itemprop=\"name\">"
            }
          });
          i18n_3 = MSG_EXTERNAL_posts$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3;
        } else {
          i18n_3 = "Posts";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_4 = goog.getMsg("{$startTagSpan}Contact{$closeTagSpan}", {
            "closeTagSpan": "\uFFFD/#24\uFFFD",
            "startTagSpan": "\uFFFD#24\uFFFD"
          }, {
            original_code: {
              "closeTagSpan": "</span>",
              "startTagSpan": "<span itemprop=\"name\">"
            }
          });
          i18n_4 = MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_4;
        } else {
          i18n_4 = "Contact";
        }
        return [["nav", ""], ["shareBtn", ""], i18n_1, i18n_2, i18n_3, i18n_4, ["itemscope", "", "itemtype", "https://schema.org/WPHeader"], [1, "child", "navbar-toggle"], [1, "bar-icon", 3, "click", "icon"], ["itemprop", "brand", "itemscope", "", "itemtype", "https://schema.org/Brand", 1, "child", "logo-container"], ["href", "#", "itemprop", "name", "itemprop", "logo", 1, "logo", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/SiteNavigationElement", 1, "child", "nav-container", 3, "hidden"], ["href", "#about", "itemprop", "url", 3, "click"], ["itemprop", "name"], ["href", "#experience", "itemprop", "url", 3, "click"], ["href", "#posts", "itemprop", "url", 3, "click"], ["href", "#contact", "itemprop", "url", 3, "click"], ["href", "https://assets.guilhermeborgesbastos.com/live-resume/cv-english-guilherme-bastos-v2.0.pdf", "title", i18n_0, "target", "_blank", 3, "click"], [1, "bar-icon", 3, "icon"], [1, "child", "share-container"], ["alt", "share", "itemprop", "share", 1, "icon", 3, "click", "icon"]];
      },
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 6)(1, "div", 7)(2, "fa-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onToggleBar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "maboudich");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11, 0)(8, "ul")(9, "li")(10, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](11, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](15, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](19, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](23, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "fa-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19, 1)(30, "fa-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.share());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faBars);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.hasMenuToggled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faShareAlt);
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
      styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  background: transparent;\n  flex-flow: row wrap;\n  max-width: 1400px;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 125px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 35px;\n  font-weight: 700;\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n  flex-grow: 5;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  align-items: center;\n  height: 52px;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 1em;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c;\n  padding: 14px;\n  border-radius: 15px;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #fff;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 52px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: inline-block;\n  height: 25px;\n  margin: 14px 0 0 0;\n  border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: rgba(34, 47, 92, 0.3490196078);\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\u202F\u202D\";\n}\nheader[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: none;\n  justify-content: center;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  background-color: #fff;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #4e5562;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRVI7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFHZ0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRHBCO0FBR29CO0VBQ0ksc0JBQUE7RUFFQSwrQ0FBQTtBQUR4QjtBQUtnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSHBCO0FBV1E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSwrQ0FBQTtBQVRaO0FBV1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFUaEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtBQVRwQjtBQVdvQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksY0FBQTtBQVQ1QjtBQWFvQjtFQUNJLGNBQUE7QUFYeEI7QUFjb0I7RUFDSSxrQkFBQTtBQVp4QjtBQWdCZ0I7RUFDSSxhQUFBO0FBZHBCO0FBb0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFsQlI7QUFxQkk7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtBQXBCUjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBcEJaO0FBc0JZO0VBQ0ksY0FBQTtBQXBCaEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZ3JvdzogNTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTJweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuXG4gICAgICAgIC5mcmFtZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM1OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXDIwMmZcXDIwMmRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgLy8gdmlzaWJsZSBvbmx5IGZvciBtb2JpbGUgYnJvd3NlcnMgdGhhdCBhY2NlcHQgc2hhcmUgaW50ZW50LlxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRlNTU2MjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRVI7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFHZ0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRHBCO0FBR29CO0VBQ0ksc0JBQUE7RUFFQSwrQ0FBQTtBQUR4QjtBQUtnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSHBCO0FBV1E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSwrQ0FBQTtBQVRaO0FBV1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFUaEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtBQVRwQjtBQVdvQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksY0FBQTtBQVQ1QjtBQWFvQjtFQUNJLGNBQUE7QUFYeEI7QUFjb0I7RUFDSSxrQkFBQTtBQVp4QjtBQWdCZ0I7RUFDSSxhQUFBO0FBZHBCO0FBb0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFsQlI7QUFxQkk7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtBQXBCUjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBcEJaO0FBc0JZO0VBQ0ksY0FBQTtBQXBCaEI7QUFEQSxnbk5BQWduTiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcblxuICAgICAgICAuZnJhbWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjNTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMDJmXFwyMDJkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgIC8vIHZpc2libGUgb25seSBmb3IgbW9iaWxlIGJyb3dzZXJzIHRoYXQgYWNjZXB0IHNoYXJlIGludGVudC5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZTU1NjI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@charset \"UTF-8\";\n@media screen and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n}\n@media screen and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    flex-grow: 4;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n    order: 5;\n    border-top: 2px solid rgba(191, 191, 191, 0.1019607843);\n    padding-top: 1em;\n    flex-basis: 100%;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-flow: column;\n    height: inherit;\n    align-items: flex-start;\n    line-height: 35px;\n    padding-left: 1em;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: rgba(94, 129, 171, 0.7411764706);\n    padding-left: 25px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #222f5c;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: \"\u2022\";\n    font-size: 50px;\n    position: absolute;\n    color: rgba(94, 129, 171, 0.7411764706);\n    margin-top: -4px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    flex-grow: initial;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 21px;\n    margin: 15px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 460px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n}\n@media screen and (max-width: 380px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 0;\n    border-radius: 0;\n    margin-right: 5px;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBSVE7SUFDSSxrQkFBQTtFQURWO0VBSU07SUFDSSxrQkFBQTtFQUZWO0VBS007SUFDSSxpQkFBQTtFQUhWO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSw0QkFBQTtJQUVBLCtDQUFBO0lBQ0EsYUFBQTtFQU5OO0VBUU07SUFDSSxZQUFBO0VBTlY7RUFTTTtJQUNJLFFBQUE7SUFDQSx1REFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFQVjtFQVNVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBUGQ7RUFXa0I7SUFDSSxlQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQkFBQTtFQVR0QjtFQVdzQjtJQUNJLGNBQUE7SUFHQSxnQkFBQTtFQVQxQjtFQVlzQjtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQVYxQjtFQWFzQjtJQUNJLGdCQUFBO0VBWDFCO0VBZWtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHVDQUFBO0lBQ0EsZ0JBQUE7RUFidEI7RUFla0I7SUFDSSxjQUFBO0VBYnRCO0VBbUJNO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBakJWO0VBbUJVO0lBQ0ksNkJBQUE7SUFHQSxnQkFBQTtFQWpCZDtFQXFCTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBbkJWO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtBQUNGO0FBd0JBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXZCTjtFQXlCTTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBdkJWO0VBNEJVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esd0RBQUE7RUExQmQ7RUE0QmM7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQTFCbEI7RUErQk07SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUE3QlY7RUErQlU7SUFDSSxlQUFBO0VBN0JkO0FBQ0Y7QUFtQ0E7RUFJUTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBcENWO0VBdUNNO0lBQ0ksZUFBQTtFQXJDVjtFQXdDTTtJQUNJLGVBQUE7RUF0Q1Y7RUF5Q007SUFDSSxZQUFBO0VBdkNWO0VBeUNVO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0Esd0RBQUE7RUF2Q2Q7RUF5Q2M7SUFDSSxlQUFBO0lBQ0EsYUFBQTtFQXZDbEI7QUFDRjtBQThDQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLG1EQUFBO0lBQ0EsMEJBQUE7RUEvQ1Y7RUFrRE07SUFDSSxlQUFBO0VBaERWO0VBbURNO0lBQ0ksZUFBQTtFQWpEVjtFQW9ETTtJQUNJLFlBQUE7RUFsRFY7RUFvRFU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx3REFBQTtFQWxEZDtFQW9EYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VBbERsQjtFQXVETTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFyRFY7RUF1RFU7SUFDSSxlQUFBO0VBckRkO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuXG4gICAgaGVhZGVyIHtcblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7IFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgb3JkZXI6IDU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JmYmZiZjFhO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG5cbiAgICAgICAgICAgICAgICBsaSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlODFhYmJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IGluaXRpYWw7XG5cbiAgICAgICAgICAgIC5mcmFtZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmJhci1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcblxuICAgICAgICAgICAgLmZyYW1lIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgICBcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIFxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBSVE7SUFDSSxrQkFBQTtFQURWO0VBSU07SUFDSSxrQkFBQTtFQUZWO0VBS007SUFDSSxpQkFBQTtFQUhWO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSw0QkFBQTtJQUVBLCtDQUFBO0lBQ0EsYUFBQTtFQU5OO0VBUU07SUFDSSxZQUFBO0VBTlY7RUFTTTtJQUNJLFFBQUE7SUFDQSx1REFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFQVjtFQVNVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBUGQ7RUFXa0I7SUFDSSxlQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQkFBQTtFQVR0QjtFQVdzQjtJQUNJLGNBQUE7SUFHQSxnQkFBQTtFQVQxQjtFQVlzQjtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQVYxQjtFQWFzQjtJQUNJLGdCQUFBO0VBWDFCO0VBZWtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHVDQUFBO0lBQ0EsZ0JBQUE7RUFidEI7RUFla0I7SUFDSSxjQUFBO0VBYnRCO0VBbUJNO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBakJWO0VBbUJVO0lBQ0ksNkJBQUE7SUFHQSxnQkFBQTtFQWpCZDtFQXFCTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBbkJWO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtBQUNGO0FBd0JBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXZCTjtFQXlCTTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBdkJWO0VBNEJVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esd0RBQUE7RUExQmQ7RUE0QmM7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQTFCbEI7RUErQk07SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUE3QlY7RUErQlU7SUFDSSxlQUFBO0VBN0JkO0FBQ0Y7QUFtQ0E7RUFJUTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBcENWO0VBdUNNO0lBQ0ksZUFBQTtFQXJDVjtFQXdDTTtJQUNJLGVBQUE7RUF0Q1Y7RUF5Q007SUFDSSxZQUFBO0VBdkNWO0VBeUNVO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0Esd0RBQUE7RUF2Q2Q7RUF5Q2M7SUFDSSxlQUFBO0lBQ0EsYUFBQTtFQXZDbEI7QUFDRjtBQThDQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLG1EQUFBO0lBQ0EsMEJBQUE7RUEvQ1Y7RUFrRE07SUFDSSxlQUFBO0VBaERWO0VBbURNO0lBQ0ksZUFBQTtFQWpEVjtFQW9ETTtJQUNJLFlBQUE7RUFsRFY7RUFvRFU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx3REFBQTtFQWxEZDtFQW9EYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VBbERsQjtFQXVETTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFyRFY7RUF1RFU7SUFDSSxlQUFBO0VBckRkO0FBQ0Y7QUFKQSxnaFNBQWdoUyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuXG4gICAgaGVhZGVyIHtcblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7IFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgb3JkZXI6IDU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JmYmZiZjFhO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG5cbiAgICAgICAgICAgICAgICBsaSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlODFhYmJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IGluaXRpYWw7XG5cbiAgICAgICAgICAgIC5mcmFtZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmJhci1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcblxuICAgICAgICAgICAgLmZyYW1lIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgICBcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIFxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5310:
/*!******************************************************************!*\
  !*** ./src/app/posts/posts-carousel/posts-carousel.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsCarouselComponent: () => (/* binding */ PostsCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils */ 7997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/directive/internationalization.directive */ 8955);
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ 4235);
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ 6171);









const _c0 = a0 => ({
  "partial": a0
});
function PostsCarouselComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 14)(1, "div", 15)(2, "a", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "meta", 18)(5, "meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "meta", 22)(12, "meta", 23)(13, "meta", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](19, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", post_r1.http, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + post_r1.thumbnail + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, post_r1.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
  }
}
class PostsCarouselComponent {
  constructor(elRef) {
    this.elRef = elRef;
    this._posts = [];
    this._originalPosts = [];
    this.onResultsPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(value) {
    if (value) {
      this._currentPage = value;
      this.populateCarousel();
    }
  }
  get posts() {
    return this._posts;
  }
  set posts(value) {
    if (value) {
      this._originalPosts = value;
      this.onResizeElement();
    }
  }
  ngOnInit() {}
  onResize() {
    this.onResizeElement();
  }
  onResizeElement() {
    this.elWidth = this.elRef.nativeElement.clientWidth;
    this.resultsPerPage = Math.ceil(this.elWidth / 465);
    this.populateCarousel();
  }
  populateCarousel() {
    if (this._currentPage && this._posts) {
      this.start = (this._currentPage - 1) * this.resultsPerPage;
      this.end = this._currentPage * this.resultsPerPage;
      this._posts = this._originalPosts.slice(this.start, this.end);
      this._posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      this.onResultsPerPageChanged.emit(this.resultsPerPage);
    }
  }
  static {
    this.ɵfac = function PostsCarouselComponent_Factory(t) {
      return new (t || PostsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PostsCarouselComponent,
      selectors: [["app-posts-carousel"]],
      hostBindings: function PostsCarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function PostsCarouselComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        currentPage: "currentPage",
        posts: "posts"
      },
      outputs: {
        onResultsPerPageChanged: "onResultsPerPageChanged"
      },
      decls: 19,
      vars: 7,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc posts
           */
          const MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_0 = goog.getMsg("of");
          i18n_0 = MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_0;
        } else {
          i18n_0 = "de";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_1 = goog.getMsg("posts");
          i18n_1 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_1;
        } else {
          i18n_1 = "Posts";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc posts
           */
          const MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_2 = goog.getMsg("Read more");
          i18n_2 = MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_2;
        } else {
          i18n_2 = "Lire la suite";
        }
        return [i18n_0, i18n_1, i18n_2, ["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"], ["itemprop", "publisher", "content", "Mohamed ali boudich"], ["itemprop", "author", "content", "Mohamed ali boudich"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "author", "content", "Mohamed Ali Boudich"], ["itemprop", "creator", "content", "Mohamed Ali Boudich"], ["itemprop", "publisher", "content", "Mohamed Ali Boudich"], ["internationalization", "", "property", "title", "itemprop", "name", "itemprop", "headline", 1, "title", 3, "data"], ["internationalization", "", "property", "description", "ellipsis", "275", "itemprop", "description", 1, "description", 3, "data"], [1, "read-more"]];
      },
      template: function PostsCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "meta", 4)(2, "meta", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ol", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PostsCarouselComponent_li_4_Template, 20, 14, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 8)(6, "span", 9)(7, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx._posts.length < 3 && ctx.currentPage >= ctx._originalPosts.length / ctx.resultsPerPage));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._posts);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.start + 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.end > (ctx._originalPosts == null ? null : ctx._originalPosts.length) ? ctx._originalPosts == null ? null : ctx._originalPosts.length : ctx.end);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._originalPosts == null ? null : ctx._originalPosts.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__.InternationalizationDirective, _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__.SafariDateFormatterPipe, _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalizedDatePipe],
      styles: [".events-content[_ngcontent-%COMP%] {\n  flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid rgba(200, 202, 213, 0.2784313725);\n  transition: all 0.2s ease-in-out;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 170px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 245px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNSO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ1o7QUFDWTtFQUNJLGVBQUE7QUFDaEI7QUFHUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtREFBQTtFQUNBLGdDQUFBO0FBRFo7QUFHWTtFQUNJLHFCQUFBO0FBRGhCO0FBSVk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFGaEI7QUFJZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZwQjtBQU1ZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBSmhCO0FBTWdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpwQjtBQU9nQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTHBCO0FBU1k7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBUGhCO0FBU2dCO0VBQ0kseUJBQUE7QUFQcEI7QUFXWTtFQUNJLHVCQUFBO0FBVGhCO0FBWVE7RUFDSSxzQkFBQTtBQVZaO0FBWVk7RUFDSSxnQkFBQTtBQVZoQjtBQWVJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBYlo7QUFnQlE7RUFDSSxnQkFBQTtBQWRaO0FBaUJRO0VBQ0kseUJBQUE7QUFmWiIsImZpbGUiOiJwb3N0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHMtY29udGVudCB7XG4gICAgZmxleC1ncm93OiA0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcblxuICAgIG9sIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgyNDAsIDIyMywgMjIzLCAwLjE2KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDU0NztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkYztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNDVweDtcblxuICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzVlNjc4ODtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLnJlYWQtbW9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNkNDg3MDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMTVweCAwO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnBhcnRpYWwge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUNZO0VBQ0ksZUFBQTtBQUNoQjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7QUFEWjtBQUdZO0VBQ0kscUJBQUE7QUFEaEI7QUFJWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUZoQjtBQUlnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRnBCO0FBTVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFNZ0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSnBCO0FBT2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMcEI7QUFTWTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFQaEI7QUFTZ0I7RUFDSSx5QkFBQTtBQVBwQjtBQVdZO0VBQ0ksdUJBQUE7QUFUaEI7QUFZUTtFQUNJLHNCQUFBO0FBVlo7QUFZWTtFQUNJLGdCQUFBO0FBVmhCO0FBZUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWJSO0FBZVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFiWjtBQWdCUTtFQUNJLGdCQUFBO0FBZFo7QUFpQlE7RUFDSSx5QkFBQTtBQWZaO0FBQ0EsdzNMQUF3M0wiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnRzLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogNDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG5cbiAgICBvbCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMjQwLCAyMjMsIDIyMywgMC4xNik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQ1NDc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWM3ZGM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjQ1cHg7XG5cbiAgICAgICAgICAgICAgICBoMi50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbi5yZWFkLW1vcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzZDQ4NzA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5wYXJ0aWFsIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnBhZ2luYXRvciB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksbUJBQUE7RUFBTjtBQUNGO0FBR0E7RUFRZ0I7SUFDSSxhQUFBO0VBUmxCO0VBV2M7SUFDSSxjQUFBO0VBVGxCO0VBV2tCO0lBQ0ksZUFBQTtFQVR0QjtFQVlrQjtJQUNJLGVBQUE7RUFWdEI7RUFha0I7SUFDSSxtQkFBQTtJQUNBLGVBQUE7RUFYdEI7QUFDRjtBQWtCQTtFQVFnQjtJQUNJLGFBQUE7RUF2QmxCO0VBNEJrQjtJQUNJLGVBQUE7RUExQnRCO0VBNkJrQjtJQUNJLGVBQUE7RUEzQnRCO0VBb0NjO0lBQ0ksYUFBQTtFQWxDbEI7QUFDRjtBQXdDQTtFQUlRO0lBQ0ksa0JBQUE7RUF6Q1Y7QUFDRiIsImZpbGUiOiJwb3N0cy1jYXJvdXNlbC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcbiAgICBcbiAgICAgICAgb2wge1xuICAgIFxuICAgICAgICAgICAgLmNhcmQge1xuICAgIFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBoMi50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlYWQtbW9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICBvbCB7XG4gICAgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgXG4gICAgICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhZ2luYXRvciB7XG5cbiAgICAgICAgICAgIC5yYW5nZSB7XG4gICAgICAgICAgICAgICAgLnN0YXJ0LCAuZGV2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxtQkFBQTtFQUFOO0FBQ0Y7QUFHQTtFQVFnQjtJQUNJLGFBQUE7RUFSbEI7RUFXYztJQUNJLGNBQUE7RUFUbEI7RUFXa0I7SUFDSSxlQUFBO0VBVHRCO0VBWWtCO0lBQ0ksZUFBQTtFQVZ0QjtFQWFrQjtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQVh0QjtBQUNGO0FBa0JBO0VBUWdCO0lBQ0ksYUFBQTtFQXZCbEI7RUE0QmtCO0lBQ0ksZUFBQTtFQTFCdEI7RUE2QmtCO0lBQ0ksZUFBQTtFQTNCdEI7RUFvQ2M7SUFDSSxhQUFBO0VBbENsQjtBQUNGO0FBd0NBO0VBSVE7SUFDSSxrQkFBQTtFQXpDVjtBQUNGO0FBQ0Esb3lGQUFveUYiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcbiAgICBcbiAgICAgICAgb2wge1xuICAgIFxuICAgICAgICAgICAgLmNhcmQge1xuICAgIFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBoMi50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlYWQtbW9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICBvbCB7XG4gICAgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgXG4gICAgICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhZ2luYXRvciB7XG5cbiAgICAgICAgICAgIC5yYW5nZSB7XG4gICAgICAgICAgICAgICAgLnN0YXJ0LCAuZGV2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)("fadeInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)("void", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          opacity: 0
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)("void <=> *", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(300))])]
      }
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(25)], PostsCarouselComponent.prototype, "onResize", null);

/***/ }),

/***/ 6824:
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsComponent: () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data.service */ 875);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ 5310);






const _c0 = a0 => ({
  "disabled": a0
});
class PostsComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.currentPage = 1;
    this.posts = [];
  }
  ngOnInit() {
    this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronLeft;
    this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronRight;
    // Fetch the Posts from the Data Service
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  ceil(val) {
    return Math.ceil(val);
  }
  onClickPrevious() {
    this.currentPage--;
  }
  onClickNext() {
    this.currentPage++;
  }
  updateNavigation(resultsPerPage) {
    this.resultsPerPage = resultsPerPage;
  }
  static {
    this.ɵfac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PostsComponent,
      selectors: [["app-posts"]],
      decls: 23,
      vars: 10,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_0 = goog.getMsg("Previous");
          i18n_0 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Pr\xE9c\xE9dent";
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1 = goog.getMsg("Next");
          i18n_1 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1;
        } else {
          i18n_1 = "suivant";
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc nav
           */
          const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_2 = goog.getMsg("Posts");
          i18n_2 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_2;
        } else {
          i18n_2 = "Posts";
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_3 = goog.getMsg("Previous");
          i18n_3 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS_3;
        } else {
          i18n_3 = "Pr\xE9c\xE9dent";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc exp.nav
           */
          const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_4 = goog.getMsg("Next");
          i18n_4 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS_4;
        } else {
          i18n_4 = "suivant";
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc posts
           */
          const MSG_EXTERNAL_synopsis$$SRC_APP_POSTS_POSTS_COMPONENT_TS_5 = goog.getMsg("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sagittis velit, eget scelerisque arcu semper finibus.");
          i18n_5 = MSG_EXTERNAL_synopsis$$SRC_APP_POSTS_POSTS_COMPONENT_TS_5;
        } else {
          i18n_5 = "Dans d'innombrables fois, un article ou une simple information m'a fait gagner des heures de recherche, alors chaque fois que c'est possible, j'essaye de faire mes humbles contributions:";
        }
        return [i18n_2, i18n_3, i18n_4, i18n_5, ["id", "posts"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "click", "ngClass"], [1, "molding"], ["title", i18n_0, 1, "icon", 3, "icon"], [1, "divider"], ["href", "javascript:void(0)", 1, "next", 3, "click", "ngClass"], ["title", i18n_1, 1, "icon", 3, "icon"], [1, "synopsis"], [1, "middle-container"], [3, "onResultsPerPageChanged", "posts", "currentPage"]];
      },
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostsComponent_Template_a_click_7_listener() {
            return ctx.onClickPrevious();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "fa-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "|");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostsComponent_Template_a_click_14_listener() {
            return ctx.onClickNext();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](17, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](20, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16)(22, "app-posts-carousel", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onResultsPerPageChanged", function PostsComponent_Template_app_posts_carousel_onResultsPerPageChanged_22_listener($event) {
            return ctx.updateNavigation($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.currentPage === 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faChevronLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.currentPage === ctx.ceil((ctx.posts == null ? null : ctx.posts.length) / ctx.resultsPerPage)));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faChevronRight);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("posts", ctx.posts)("currentPage", ctx.currentPage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__.PostsCarouselComponent],
      styles: ["#posts[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  justify-content: center;\n  background-color: #fbfafa;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-posts-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0ksWUFBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRlo7QUFJWTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUZoQjtBQUtZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FBSGhCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhwQjtBQU9ZO0VBQ0ksWUFBQTtBQUxoQjtBQVFZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5oQjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFOcEI7QUFRZ0I7RUFDSSwyQkFBQTtBQU5wQjtBQVVZO0VBQ0ksWUFBQTtBQVJoQjtBQWFJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FBWFI7QUFhUTtFQUNJLFdBQUE7QUFYWiIsImZpbGUiOiJwb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N0cyB7XG4gICAgdG9wOiAtNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYWZhO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgfVxuXG4gICAgcC5zeW5vcHNpcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM1ZTY3ODg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTsgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGFwcC1wb3N0cy1jYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURSO0FBR1E7RUFDSSxZQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUlZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBRmhCO0FBS1k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFIaEI7QUFLZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSHBCO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBUVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5wQjtBQVFnQjtFQUNJLDJCQUFBO0FBTnBCO0FBVVk7RUFDSSxZQUFBO0FBUmhCO0FBYUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFYUjtBQWFRO0VBQ0ksV0FBQTtBQVhaO0FBQ0EsZzFIQUFnMUgiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9zdHMge1xuICAgIHRvcDogLTRlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmFmYTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgIH1cblxuICAgIHAuc3lub3BzaXMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICBcbiAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmV2aW91cyB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyOyAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07ICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBhcHAtcG9zdHMtY2Fyb3VzZWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRO0lBQ0ksZUFBQTtFQUZWO0VBS007SUFDSSxlQUFBO0VBSFY7RUFRVTtJQUNJLGVBQUE7RUFOZDtBQUNGO0FBV0E7RUFJUTtJQUNJLGVBQUE7RUFaVjtFQWVNO0lBQ0ksZUFBQTtFQWJWO0VBa0JVO0lBQ0ksZUFBQTtFQWhCZDtFQWtCYztJQUNJLFdBQUE7RUFoQmxCO0VBcUJNO0lBQ0ksbUJBQUE7RUFuQlY7QUFDRjtBQXVCQTtFQUlRO0lBQ0ksZ0JBQUE7RUF4QlY7RUEyQk07SUFDSSxhQUFBO0VBekJWO0VBOEJVO0lBQ0ksZUFBQTtFQTVCZDtFQThCYztJQUNJLFdBQUE7RUE1QmxCO0VBK0JjO0lBQ0ksYUFBQTtFQTdCbEI7RUFnQ2M7SUFDSSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQTlCbEI7RUFnQ2tCO0lBQ0ksZUFBQTtFQTlCdEI7RUFpQ2tCO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUEvQnRCO0FBQ0Y7QUFzQ0E7RUFFSTtJQUNJLGFBQUE7RUFyQ047QUFDRiIsImZpbGUiOiJwb3N0cy5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuXG4gICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC42NWVtIDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tb2xkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQxNGM3MztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweCA1cHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxlQUFBO0VBRlY7RUFLTTtJQUNJLGVBQUE7RUFIVjtFQVFVO0lBQ0ksZUFBQTtFQU5kO0FBQ0Y7QUFXQTtFQUlRO0lBQ0ksZUFBQTtFQVpWO0VBZU07SUFDSSxlQUFBO0VBYlY7RUFrQlU7SUFDSSxlQUFBO0VBaEJkO0VBa0JjO0lBQ0ksV0FBQTtFQWhCbEI7RUFxQk07SUFDSSxtQkFBQTtFQW5CVjtBQUNGO0FBdUJBO0VBSVE7SUFDSSxnQkFBQTtFQXhCVjtFQTJCTTtJQUNJLGFBQUE7RUF6QlY7RUE4QlU7SUFDSSxlQUFBO0VBNUJkO0VBOEJjO0lBQ0ksV0FBQTtFQTVCbEI7RUErQmM7SUFDSSxhQUFBO0VBN0JsQjtFQWdDYztJQUNJLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBOUJsQjtFQWdDa0I7SUFDSSxlQUFBO0VBOUJ0QjtFQWlDa0I7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQS9CdEI7QUFDRjtBQXNDQTtFQUVJO0lBQ0ksYUFBQTtFQXJDTjtBQUNGO0FBQ0Esb3pHQUFvekciLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xuXG4gICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC42NWVtIDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1jb250YWluZXIge1xuICAgIFxuICAgICAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tb2xkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQxNGM3MztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweCA1cHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9263:
/*!***************************************!*\
  !*** ./src/app/posts/posts.molule.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsModule: () => (/* binding */ PostsModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component */ 6824);
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ 5310);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ 8423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







class PostsModule {
  static {
    this.ɵfac = function PostsModule_Factory(t) {
      return new (t || PostsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PostsModule, {
    declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent, _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__.PostsCarouselComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule],
    exports: [_posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent]
  });
})();

/***/ }),

/***/ 3972:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ 7997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/directive/on-viewport.directive */ 2079);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome/welcome.component */ 9747);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience/experience.component */ 8474);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/posts.component */ 6824);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ 2152);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.component */ 2912);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.component */ 8712);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ 708);












const _c0 = a0 => ({
  "sticky": a0
});
class ResumeComponent {
  constructor() {
    this.isSticky = false;
    this.pageYOffset = 0;
    this.checkResize();
  }
  checkScroll() {
    this.pageYOffset = window.pageYOffset;
    this.isSticky = pageYOffset >= 250;
  }
  checkResize() {
    this.pageXOffset = window.innerWidth;
  }
  ngOnInit() {}
  onViewport(isOnViewPort, element) {
    this.activeSection = element;
  }
  static {
    this.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      hostBindings: function ResumeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function ResumeComponent_scroll_HostBindingHandler() {
            return ctx.checkScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"])("resize", function ResumeComponent_resize_HostBindingHandler() {
            return ctx.checkResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 10,
      consts: [[3, "activeSection", "pageXOffset", "ngClass"], ["in-viewport", "", 3, "inViewport", "pageYOffset"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-welcome", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_welcome_inViewport_1_listener($event) {
            return ctx.onViewport($event.value, "welcome");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-about", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_about_inViewport_2_listener($event) {
            return ctx.onViewport($event.value, "about");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-experience", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_experience_inViewport_3_listener($event) {
            return ctx.onViewport($event.value, "experience");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "app-posts", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_posts_inViewport_4_listener($event) {
            return ctx.onViewport($event.value, "posts");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-contact", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_contact_inViewport_5_listener($event) {
            return ctx.onViewport($event.value, "contact");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("activeSection", ctx.activeSection)("pageXOffset", ctx.pageXOffset)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c0, ctx.isSticky));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_1__.InViewportDirective, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent, _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__.PostsComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
      styles: ["app-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    z-index: 1001;\n    width: 100%;\n    padding: 1em 0;\n    transition: 0.3s;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: #fff;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.43);\n}\n\napp-footer[_ngcontent-%COMP%] {\n    position: relative;\n    top: -3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InJlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQzKTtcbn1cblxuYXBwLWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0EsbzVCQUFvNUIiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuNDMpO1xufVxuXG5hcHAtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtM2VtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n\n    app-header[_ngcontent-%COMP%] { padding: 0; }\n\n    .sticky[_ngcontent-%COMP%] {\n        background-color: transparent;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICBhcHAtaGVhZGVyIHsgcGFkZGluZzogMDsgfVxuXG4gICAgLnN0aWNreSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQSx3akJBQXdqQiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgYXBwLWhlYWRlciB7IHBhZGRpbmc6IDA7IH1cblxuICAgIC5zdGlja3kge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)()], ResumeComponent.prototype, "checkScroll", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(25)], ResumeComponent.prototype, "checkResize", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(150)], ResumeComponent.prototype, "onViewport", null);

/***/ }),

/***/ 2563:
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeModule: () => (/* binding */ ResumeModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resume/resume.component */ 3972);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 2152);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ 2912);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ 8712);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../welcome/welcome.molule */ 135);
/* harmony import */ var _experience_experience_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../experience/experience.module */ 2893);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ 8423);
/* harmony import */ var _posts_posts_molule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../posts/posts.molule */ 9263);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ 708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);













class ResumeModule {
  static {
    this.ɵfac = function ResumeModule_Factory(t) {
      return new (t || ResumeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: ResumeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule, _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_4__.WelcomeModule, _experience_experience_module__WEBPACK_IMPORTED_MODULE_5__.ExperienceModule, _posts_posts_molule__WEBPACK_IMPORTED_MODULE_7__.PostsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ResumeModule, {
    declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule, _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_4__.WelcomeModule, _experience_experience_module__WEBPACK_IMPORTED_MODULE_5__.ExperienceModule, _posts_posts_molule__WEBPACK_IMPORTED_MODULE_7__.PostsModule],
    exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent]
  });
})();

/***/ }),

/***/ 4842:
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/database */ 608);




class ContactService {
  constructor(db) {
    this.db = db;
    this.contactsPath = 'contacts';
  }
  // Ajouter un nouveau contact
  addContact(contact) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contactRef = yield _this.db.list(_this.contactsPath).push({
        ...contact,
        date: new Date().toISOString()
      });
      return contactRef.key;
    })();
  }
  // Récupérer tous les contacts
  getContacts() {
    return this.db.list(this.contactsPath).snapshotChanges().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(changes => changes.map(c => ({
      id: c.payload.key,
      ...c.payload.val()
    }))));
  }
  // Supprimer un contact
  deleteContact(id) {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.db.object(`${_this2.contactsPath}/${id}`).remove();
    })();
  }
  // Mettre à jour un contact
  updateContact(id, contact) {
    var _this3 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.db.object(`${_this3.contactsPath}/${id}`).update(contact);
    })();
  }
  static {
    this.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8287:
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseService: () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/database */ 608);




class FirebaseService {
  constructor(db) {
    this.db = db;
  }
  // Méthode pour envoyer un message de contact
  sendContactMessage(name, email, message) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const contactRef = yield _this.db.list('contacts').push({
          name: name,
          email: email,
          message: message,
          date: new Date().toISOString(),
          read: false
        });
        return {
          success: true,
          id: contactRef.key
        };
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        return {
          success: false,
          error: error
        };
      }
    })();
  }
  // Méthode pour vérifier si un email existe déjà
  checkEmailExists(email) {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const query = _this2.db.list('contacts', ref => ref.orderByChild('email').equalTo(email).limitToFirst(1)).valueChanges();
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(query);
        return result && result.length > 0;
      } catch (error) {
        console.error("Erreur lors de la vérification de l'email:", error);
        return false;
      }
    })();
  }
  static {
    this.ɵfac = function FirebaseService_Factory(t) {
      return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: FirebaseService,
      factory: FirebaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3227:
/*!****************************************************************************!*\
  !*** ./src/app/welcome/welcome-background/welcome-background.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeBackgroundComponent: () => (/* binding */ WelcomeBackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class WelcomeBackgroundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function WelcomeBackgroundComponent_Factory(t) {
      return new (t || WelcomeBackgroundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeBackgroundComponent,
      selectors: [["app-welcome-background"]],
      decls: 11,
      vars: 0,
      consts: [[1, "skills"], ["loading", "lazy", "src", "assets/template/welcome/illustration-back.png", "alt", "Background circle", 1, "background"], ["loading", "lazy", "src", "assets/template/welcome/icons/docker.svg", "alt", "Docker", 1, "skill-icon", "first"], ["loading", "lazy", "src", "assets/template/welcome/icons/css3.svg", "alt", "CSS3", 1, "skill-icon", "second"], ["loading", "lazy", "src", "assets/template/welcome/icons/git.svg", "alt", "Git", 1, "skill-icon", "third"], ["loading", "lazy", "src", "assets/template/welcome/icons/html5.svg", "alt", "HTML5", 1, "skill-icon", "fourth"], ["loading", "lazy", "src", "assets/template/welcome/icons/sql.svg", "alt", "SQL", 1, "skill-icon", "fifth"], ["loading", "lazy", "src", "assets/template/welcome/icons/php.svg", "alt", "PHP", 1, "skill-icon", "sixth"], ["loading", "lazy", "src", "assets/template/welcome/icons/java.svg", "alt", "JAVA", 1, "skill-icon", "seventh"], ["loading", "lazy", "src", "assets/template/welcome/icons/bitbucket.svg", "alt", "BitBucket", 1, "skill-icon", "eighth"], ["loading", "lazy", "src", "assets/template/welcome/icons/android.svg", "alt", "Android", 1, "skill-icon", "ninth"]],
      template: function WelcomeBackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2)(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8)(9, "img", 9)(10, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 5px;\n  z-index: 0;\n}\n.skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n  width: 535px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  animation-name: _ngcontent-%COMP%_floating-icons;\n  -webkit-animation-name: _ngcontent-%COMP%_floating-icons;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-duration: 4s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%]:nth-child(2n+3) {\n  animation-duration: 5s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n  top: 385px;\n  left: -35px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n  top: 300px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n  top: 205px;\n  left: -85px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n  top: 120px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n  top: 40px;\n  left: -20px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n  top: -20px;\n  right: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n  bottom: 110px;\n  right: -30px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n  bottom: 40px;\n  right: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtYmFja2dyb3VuZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNILFVBQUE7QUFDRDtBQUNDO0VBQ0MsWUFBQTtBQUNGO0FBRUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFHQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtBQUZGO0FBS0U7RUFDQyxzQkFBQTtBQUhIO0FBT0U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQUxIO0FBUUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQU5IO0FBU0U7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQVBIO0FBVUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQVJIO0FBV0U7RUFDQyxTQUFBO0VBQ0EsV0FBQTtBQVRIO0FBWUU7RUFDQyxVQUFBO0VBQ0EsVUFBQTtBQVZIO0FBYUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQVhIO0FBY0U7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQVpIO0FBZUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQWJIOztBQWtCQTtFQUNDO0lBQUssNEJBQUE7RUFkSjtFQWVEO0lBQU0sNkJBQUE7RUFaTDtFQWFEO0lBQU0sNkJBQUE7RUFWTDtFQVdEO0lBQU0sNkJBQUE7RUFSTDtFQVNEO0lBQU8sNEJBQUE7RUFOTjtBQUNGIiwiZmlsZSI6IndlbGNvbWUtYmFja2dyb3VuZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgbGVmdDogNXB4O1xuXHR6LWluZGV4OiAwO1xuXHRcblx0aW1nLmJhY2tncm91bmQge1xuXHRcdHdpZHRoOiA1MzVweDtcblx0fVxuXG5cdC5za2lsbC1pY29uIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDUwcHg7XG5cblx0XHQvLyBEZWZpbmUgdGhlIGFuaW1hdGlvbnMgZm9yIHRoZSBpY29uc1xuXHRcdGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcblxuXHRcdC8vIE9kZCBpY29ucyBoYXZlIGRpZmZlcmVudCBhbmltYXRpb24gZnJhbWUuXG5cdFx0JjpudGgtY2hpbGQoMm4rMykge1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcblx0XHR9XG5cblx0XHQvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nXG5cdFx0Ji5maXJzdCB7XG5cdFx0XHR0b3A6IDM4NXB4O1xuXHRcdFx0bGVmdDogLTM1cHg7XG5cdFx0fVxuXG5cdFx0Ji5zZWNvbmQge1xuXHRcdFx0dG9wOiAzMDBweDtcblx0XHRcdGxlZnQ6IC02NXB4O1xuXHRcdH1cblxuXHRcdCYudGhpcmQge1xuXHRcdFx0dG9wOiAyMDVweDtcblx0XHRcdGxlZnQ6IC04NXB4O1xuXHRcdH1cblxuXHRcdCYuZm91cnRoIHtcblx0XHRcdHRvcDogMTIwcHg7XG5cdFx0XHRsZWZ0OiAtNjVweDtcblx0XHR9XG5cblx0XHQmLmZpZnRoIHtcblx0XHRcdHRvcDogNDBweDtcblx0XHRcdGxlZnQ6IC0yMHB4O1xuXHRcdH1cblxuXHRcdCYuc2l4dGgge1xuXHRcdFx0dG9wOiAtMjBweDtcblx0XHRcdGxlZnQ6IDUwcHg7XG5cdFx0fVxuXG5cdFx0Ji5zZXZlbnRoIHtcblx0XHRcdHRvcDogLTIwcHg7XG5cdFx0XHRyaWdodDogNTBweDtcblx0XHR9XG5cblx0XHQmLmVpZ2h0aCB7XG5cdFx0XHRib3R0b206IDExMHB4O1xuXHRcdFx0cmlnaHQ6IC0zMHB4O1xuXHRcdH1cblxuXHRcdCYubmludGgge1xuXHRcdFx0Ym90dG9tOiA0MHB4O1xuXHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0fVxuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXRpbmctaWNvbnMge1xuXHQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7IH1cblx0MjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDE1JSk7IH1cdFxuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDUlKTsgfVx0XG5cdDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNSUpOyB9XHRcblx0MTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7IH1cdFx0XHRcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0gsVUFBQTtBQUNEO0FBQ0M7RUFDQyxZQUFBO0FBQ0Y7QUFFQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0FBRkY7QUFLRTtFQUNDLHNCQUFBO0FBSEg7QUFPRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBTEg7QUFRRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBTkg7QUFTRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBUEg7QUFVRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBUkg7QUFXRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0FBVEg7QUFZRTtFQUNDLFVBQUE7RUFDQSxVQUFBO0FBVkg7QUFhRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBWEg7QUFjRTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FBWkg7QUFlRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBYkg7O0FBa0JBO0VBQ0M7SUFBSyw0QkFBQTtFQWRKO0VBZUQ7SUFBTSw2QkFBQTtFQVpMO0VBYUQ7SUFBTSw2QkFBQTtFQVZMO0VBV0Q7SUFBTSw2QkFBQTtFQVJMO0VBU0Q7SUFBTyw0QkFBQTtFQU5OO0FBQ0Y7QUFDQSx3L0ZBQXcvRiIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDVweDtcblx0ei1pbmRleDogMDtcblx0XG5cdGltZy5iYWNrZ3JvdW5kIHtcblx0XHR3aWR0aDogNTM1cHg7XG5cdH1cblxuXHQuc2tpbGwtaWNvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiA1MHB4O1xuXG5cdFx0Ly8gRGVmaW5lIHRoZSBhbmltYXRpb25zIGZvciB0aGUgaWNvbnNcblx0XHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG5cblx0XHQvLyBPZGQgaWNvbnMgaGF2ZSBkaWZmZXJlbnQgYW5pbWF0aW9uIGZyYW1lLlxuXHRcdCY6bnRoLWNoaWxkKDJuKzMpIHtcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG5cdFx0fVxuXG5cdFx0Ly8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZ1xuXHRcdCYuZmlyc3Qge1xuXHRcdFx0dG9wOiAzODVweDtcblx0XHRcdGxlZnQ6IC0zNXB4O1xuXHRcdH1cblxuXHRcdCYuc2Vjb25kIHtcblx0XHRcdHRvcDogMzAwcHg7XG5cdFx0XHRsZWZ0OiAtNjVweDtcblx0XHR9XG5cblx0XHQmLnRoaXJkIHtcblx0XHRcdHRvcDogMjA1cHg7XG5cdFx0XHRsZWZ0OiAtODVweDtcblx0XHR9XG5cblx0XHQmLmZvdXJ0aCB7XG5cdFx0XHR0b3A6IDEyMHB4O1xuXHRcdFx0bGVmdDogLTY1cHg7XG5cdFx0fVxuXG5cdFx0Ji5maWZ0aCB7XG5cdFx0XHR0b3A6IDQwcHg7XG5cdFx0XHRsZWZ0OiAtMjBweDtcblx0XHR9XG5cblx0XHQmLnNpeHRoIHtcblx0XHRcdHRvcDogLTIwcHg7XG5cdFx0XHRsZWZ0OiA1MHB4O1xuXHRcdH1cblxuXHRcdCYuc2V2ZW50aCB7XG5cdFx0XHR0b3A6IC0yMHB4O1xuXHRcdFx0cmlnaHQ6IDUwcHg7XG5cdFx0fVxuXG5cdFx0Ji5laWdodGgge1xuXHRcdFx0Ym90dG9tOiAxMTBweDtcblx0XHRcdHJpZ2h0OiAtMzBweDtcblx0XHR9XG5cblx0XHQmLm5pbnRoIHtcblx0XHRcdGJvdHRvbTogNDBweDtcblx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLWljb25zIHtcblx0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XG5cdDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxNSUpOyB9XHRcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAlLCA1JSk7IH1cdFxuXHQ3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUlKTsgfVx0XG5cdDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XHRcdFx0XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 1024px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 140px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 310px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 250px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 175px;\n    left: -60px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 100px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -10px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -20px;\n    right: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 80px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 220px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 170px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 60px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -30px;\n    left: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -30px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 45px;\n    right: -15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 165px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 130px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 90px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 50px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: -5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 50px;\n    right: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 22px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 135px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 105px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 70px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 35px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: -3px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 40px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 70px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -10px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 55px;\n    right: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: -10px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 110px;\n    left: -13px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 35px;\n    right: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtYmFja2dyb3VuZC5yZXBvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxVQUFBO0VBQU47RUFFTTtJQUNJLFlBQUE7RUFBVjtFQUdNO0lBQ0ksV0FBQTtFQURWO0VBSVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQUZkO0VBS1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQUhkO0VBTVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQUpkO0VBT1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQUxkO0VBUVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQU5kO0VBU1U7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQVBkO0VBVVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQVJkO0VBV1U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQVRkO0VBWVU7SUFDSSxZQUFBO0lBQ0EsUUFBQTtFQVZkO0FBQ0Y7QUFlQTtFQUlRO0lBQ0ksWUFBQTtFQWhCVjtFQW1CTTtJQUNJLFdBQUE7RUFqQlY7RUFvQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQWxCZDtFQXFCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbkJkO0VBc0JVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFwQmQ7RUF1QlU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQXJCZDtFQXdCVTtJQUNJLFNBQUE7SUFDQSxPQUFBO0VBdEJkO0VBeUJVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUF2QmQ7RUEwQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQXhCZDtFQTJCVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBekJkO0VBNEJVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUExQmQ7QUFDRjtBQStCQTtFQUlRO0lBQ0ksWUFBQTtFQWhDVjtFQW1DTTtJQUNJLFdBQUE7RUFqQ1Y7RUFvQ1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQWxDZDtFQXFDVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbkNkO0VBc0NVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFwQ2Q7RUF1Q1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQXJDZDtFQXdDVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBdENkO0VBeUNVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUF2Q2Q7RUEwQ1U7SUFDSSxNQUFBO0lBQ0EsUUFBQTtFQXhDZDtFQTJDVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBekNkO0VBNENVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUExQ2Q7QUFDRjtBQStDQTtFQUVJO0lBQ0ksVUFBQTtFQTlDTjtFQWdETTtJQUNJLFlBQUE7RUE5Q1Y7RUFpRE07SUFDSSxXQUFBO0VBL0NWO0VBa0RVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFoRGQ7RUFtRFU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQWpEZDtFQW9EVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBbERkO0VBcURVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFuRGQ7RUFzRFU7SUFDSSxRQUFBO0lBQ0EsVUFBQTtFQXBEZDtFQXVEVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBckRkO0VBd0RVO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUF0RGQ7RUF5RFU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQXZEZDtFQTBEVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBeERkO0FBQ0Y7QUE2REE7RUFFSTtJQUNJLFNBQUE7RUE1RE47RUE4RE07SUFDSSxZQUFBO0VBNURWO0VBK0RNO0lBQ0ksV0FBQTtFQTdEVjtFQWdFVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBOURkO0VBaUVVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUEvRGQ7RUFrRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQWhFZDtFQW1FVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBakVkO0VBb0VVO0lBQ0ksUUFBQTtJQUNBLE9BQUE7RUFsRWQ7RUFxRVU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQW5FZDtFQXNFVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBcEVkO0VBdUVVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFyRWQ7RUF3RVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQXRFZDtBQUNGO0FBMkVBO0VBRUk7SUFDSSxTQUFBO0VBMUVOO0VBNEVNO0lBQ0ksWUFBQTtFQTFFVjtFQTZFTTtJQUNJLFdBQUE7RUEzRVY7RUE4RVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQTVFZDtFQStFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBN0VkO0VBZ0ZVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUE5RWQ7RUFpRlU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQS9FZDtFQWtGVTtJQUNJLFFBQUE7SUFDQSxPQUFBO0VBaEZkO0VBbUZVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUFqRmQ7RUFvRlU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQWxGZDtFQXFGVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBbkZkO0VBc0ZVO0lBQ0ksWUFBQTtJQUNBLFFBQUE7RUFwRmQ7QUFDRiIsImZpbGUiOiJ3ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogMTQwcHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDM5MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDMxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDgwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMjIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDExNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDg1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuXG4gICAgLnNraWxscyB7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiAxMDBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiA3MHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogODVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogNTBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogODVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLFVBQUE7RUFBTjtFQUVNO0lBQ0ksWUFBQTtFQUFWO0VBR007SUFDSSxXQUFBO0VBRFY7RUFJVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRmQ7RUFLVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBSGQ7RUFNVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBSmQ7RUFPVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBTGQ7RUFRVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBTmQ7RUFTVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBUGQ7RUFVVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBUmQ7RUFXVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBVGQ7RUFZVTtJQUNJLFlBQUE7SUFDQSxRQUFBO0VBVmQ7QUFDRjtBQWVBO0VBSVE7SUFDSSxZQUFBO0VBaEJWO0VBbUJNO0lBQ0ksV0FBQTtFQWpCVjtFQW9CVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbEJkO0VBcUJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFuQmQ7RUFzQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQXBCZDtFQXVCVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBckJkO0VBd0JVO0lBQ0ksU0FBQTtJQUNBLE9BQUE7RUF0QmQ7RUF5QlU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXZCZDtFQTBCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBeEJkO0VBMkJVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF6QmQ7RUE0QlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTFCZDtBQUNGO0FBK0JBO0VBSVE7SUFDSSxZQUFBO0VBaENWO0VBbUNNO0lBQ0ksV0FBQTtFQWpDVjtFQW9DVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbENkO0VBcUNVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFuQ2Q7RUFzQ1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQXBDZDtFQXVDVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBckNkO0VBd0NVO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUF0Q2Q7RUF5Q1U7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXZDZDtFQTBDVTtJQUNJLE1BQUE7SUFDQSxRQUFBO0VBeENkO0VBMkNVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF6Q2Q7RUE0Q1U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTFDZDtBQUNGO0FBK0NBO0VBRUk7SUFDSSxVQUFBO0VBOUNOO0VBZ0RNO0lBQ0ksWUFBQTtFQTlDVjtFQWlETTtJQUNJLFdBQUE7RUEvQ1Y7RUFrRFU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQWhEZDtFQW1EVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBakRkO0VBb0RVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFsRGQ7RUFxRFU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQW5EZDtFQXNEVTtJQUNJLFFBQUE7SUFDQSxVQUFBO0VBcERkO0VBdURVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUFyRGQ7RUF3RFU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQXREZDtFQXlEVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBdkRkO0VBMERVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF4RGQ7QUFDRjtBQTZEQTtFQUVJO0lBQ0ksU0FBQTtFQTVETjtFQThETTtJQUNJLFlBQUE7RUE1RFY7RUErRE07SUFDSSxXQUFBO0VBN0RWO0VBZ0VVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUE5RGQ7RUFpRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQS9EZDtFQWtFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBaEVkO0VBbUVVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFqRWQ7RUFvRVU7SUFDSSxRQUFBO0lBQ0EsT0FBQTtFQWxFZDtFQXFFVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBbkVkO0VBc0VVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFwRWQ7RUF1RVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQXJFZDtFQXdFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBdEVkO0FBQ0Y7QUEyRUE7RUFFSTtJQUNJLFNBQUE7RUExRU47RUE0RU07SUFDSSxZQUFBO0VBMUVWO0VBNkVNO0lBQ0ksV0FBQTtFQTNFVjtFQThFVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBNUVkO0VBK0VVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUE3RWQ7RUFnRlU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQTlFZDtFQWlGVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBL0VkO0VBa0ZVO0lBQ0ksUUFBQTtJQUNBLE9BQUE7RUFoRmQ7RUFtRlU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQWpGZDtFQW9GVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBbEZkO0VBcUZVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFuRmQ7RUFzRlU7SUFDSSxZQUFBO0lBQ0EsUUFBQTtFQXBGZDtBQUNGO0FBQ0EsZ3FZQUFncVkiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDE0MHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAzOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMjUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTc1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgLnNraWxscyB7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcblxuICAgIC5za2lsbHMge1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxNjVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogOTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDg1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogMTAwcHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEzNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpZnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDcwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnNraWxscyB7XG4gICAgICAgIHRvcDogNzBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTE1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDg1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDU1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5pbnRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuIFxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDUwcHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDg1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8015:
/*!***********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Typed: () => (/* binding */ Typed)
/* harmony export */ });
class Typed {
  constructor(element, options, phrases) {
    const defaults = {
      typeSpeed: 250,
      startDelay: 2000,
      phrasePeriod: 200
    };
    this.text = "";
    this.isDeleting = false;
    this.loopNum = 0;
    this.element = element;
    this.options = {
      ...defaults,
      ...options
    };
    this.phrases = phrases;
    this.appendAnimationCss();
  }
  begin() {
    this.timeout = setTimeout(() => {
      this.typewrite();
    }, this.options.startDelay);
  }
  insertSpan(text) {
    this.element.innerHTML = `<span class="wrap">${text}</span>`;
  }
  typewrite() {
    let i = this.loopNum % this.phrases.length;
    let fullTxt = this.phrases[i];
    if (this.isDeleting) {
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      this.text = fullTxt.substring(0, this.text.length + 1);
    }
    this.insertSpan(this.text);
    let that = this;
    let delta = this.options.typeSpeed - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.text === fullTxt) {
      delta = this.options.phrasePeriod;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.typewrite();
    }, delta);
  }
  appendAnimationCss() {
    let css = document.createElement("style");
    css.type = "text/css";
    css.id = "typing";
    const innerCss = `
            .txt-rotate > .wrap::after {
                content: "|";
                opacity: 1;
                animation: typedBlink 0.7s infinite;
                -webkit-animation: typedBlink 0.7s infinite;
                animation: typedBlink 0.7s infinite;
            }
            @keyframes typedBlink{
                50% { opacity: 0.0; }
            }
            @-webkit-keyframes typedBlink{
                0% { opacity: 1; }
                50% { opacity: 0.0; }
                100% { opacity: 1; }
            }
        `;
    css.innerHTML = innerCss;
    document.head.appendChild(css);
  }
}

/***/ }),

/***/ 3768:
/*!********************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypingAnimationDirective: () => (/* binding */ TypingAnimationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed */ 8015);



class TypingAnimationDirective {
  constructor(elRef, locale) {
    this.elRef = elRef;
    this.locale = locale;
    this.phrases = [];
    this._flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), []);
  }
  ngOnInit() {
    const nestedArr = this.data.filter(el => el.language === (this.locale || "en"));
    this.phrases = this._flatMap(el => el.phrases, nestedArr);
    if (this.checkContent()) {
      this.createTyped();
    }
  }
  checkContent() {
    return this.phrases.length > 0;
  }
  createTyped() {
    this.typed = new _typed__WEBPACK_IMPORTED_MODULE_0__.Typed(this.elRef.nativeElement, {
      typeSpeed: this.typeSpeed,
      startDelay: this.startDelay,
      phrasePeriod: this.phrasePeriod
    }, this.phrases);
    this.typed.begin();
  }
  static {
    this.ɵfac = function TypingAnimationDirective_Factory(t) {
      return new (t || TypingAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: TypingAnimationDirective,
      selectors: [["", "typingAnimation", ""]],
      inputs: {
        phrasePeriod: "phrasePeriod",
        typeSpeed: "typeSpeed",
        startDelay: "startDelay",
        data: "data"
      }
    });
  }
}

/***/ }),

/***/ 5837:
/*!*****************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypingAnimationModule: () => (/* binding */ TypingAnimationModule)
/* harmony export */ });
/* harmony import */ var _typing_animation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typing-animation.directive */ 3768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class TypingAnimationModule {
  static {
    this.ɵfac = function TypingAnimationModule_Factory(t) {
      return new (t || TypingAnimationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TypingAnimationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TypingAnimationModule, {
    declarations: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_0__.TypingAnimationDirective],
    exports: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_0__.TypingAnimationDirective]
  });
})();

/***/ }),

/***/ 4139:
/*!********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeDialogComponent: () => (/* binding */ WelcomeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-dialog-typing/typing-animation.directive */ 3768);


const _c0 = () => ["My name is Mohamed Ali.", "Welcome to my online resume.", "Down below, you will know me better... :)"];
const _c1 = a0 => ({
  "language": "en",
  "phrases": a0
});
const _c2 = () => ["Je me nomme Mohamed Ali.", "Bienvenue sur mon portfolio.", "Ci-dessous, vous apprendrez \u00E0 mieux me conna\u00EEtre... :)"];
const _c3 = a0 => ({
  "language": "fr",
  "phrases": a0
});
const _c4 = (a0, a1) => [a0, a1];
class WelcomeDialogComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function WelcomeDialogComponent_Factory(t) {
      return new (t || WelcomeDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WelcomeDialogComponent,
      selectors: [["app-welcome-dialog"]],
      decls: 6,
      vars: 13,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc dialog
           */
          const MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_0 = goog.getMsg("Salut!");
          i18n_0 = MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_0;
        } else {
          i18n_0 = "Salut!";
        }
        return [i18n_0, [1, "dialog-container"], ["loading", "lazy", "src", "assets/template/welcome/bubble-frame.png", "alt", "Welcome Speech Bobble"], [1, "console"], [1, "hello"], ["typingAnimation", "", 1, "txt-rotate", 3, "phrasePeriod", "startDelay", "typeSpeed", "data"]];
      },
      template: function WelcomeDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3)(3, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("phrasePeriod", 2000)("startDelay", 1500)("typeSpeed", 200)("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2))));
        }
      },
      dependencies: [_welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_0__.TypingAnimationDirective],
      styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n\tz-index: 2;\n\tmargin-top: 5em;\n\tanimation: _ngcontent-%COMP%_float-dialog 6s ease-in-out infinite;\n}\n\n.dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 580px;\n    margin-left: -7em;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n\tposition: absolute;\n    top: 7em;\n    left: -5px;\n    width: 380px;\n\ttext-align: center;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tmargin: 0;\n    padding: 0;\n    text-align: center;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n\tfont-size: 60px;\n    font-weight: 600;\n    color: #222f5c;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n\tfont-size: 40px;\n    color: #576183;\n\tfont-weight: 600;\n\tmargin-top: 10px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCO0FBQ3JCO0NBQ0MsVUFBVTtDQUNWLGVBQWU7Q0FDZiwrQ0FBK0M7QUFDaEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsU0FBUztJQUNOLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osY0FBYztDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEIiwiZmlsZSI6IndlbGNvbWUtZGlhbG9nLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogRGlhbG9nIGNvbnRhaW5lciAqL1xuLmRpYWxvZy1jb250YWluZXIge1xuXHR6LWluZGV4OiAyO1xuXHRtYXJnaW4tdG9wOiA1ZW07XG5cdGFuaW1hdGlvbjogZmxvYXQtZGlhbG9nIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA1ODBweDtcbiAgICBtYXJnaW4tbGVmdDogLTdlbTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3ZW07XG4gICAgbGVmdDogLTVweDtcbiAgICB3aWR0aDogMzgwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgcCB7XG5cdG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcblx0Zm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyMjJmNWM7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcblx0Zm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjNTc2MTgzO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4vKiBEaWFsb2cgY29udGFpbmVyIGFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBmbG9hdC1kaWFsb2cge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuXHR9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsK0NBQStDO0FBQ2hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7SUFDTixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGNBQWM7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQSwrQkFBK0I7QUFDL0I7Q0FDQztFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQywwQkFBMEI7Q0FDM0I7QUFDRDtBQUNBLHczREFBdzNEIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBEaWFsb2cgY29udGFpbmVyICovXG4uZGlhbG9nLWNvbnRhaW5lciB7XG5cdHotaW5kZXg6IDI7XG5cdG1hcmdpbi10b3A6IDVlbTtcblx0YW5pbWF0aW9uOiBmbG9hdC1kaWFsb2cgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDU4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtN2VtO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdlbTtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHdpZHRoOiAzODBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSBwIHtcblx0bWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuXHRmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzIyMmY1Yztcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuXHRmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICM1NzYxODM7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qIERpYWxvZyBjb250YWluZXIgYW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIGZsb2F0LWRpYWxvZyB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcblx0fVxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMjBweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 1024px) {\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 435px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 6em;\n        width: 280px;\n        left: -2em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 25px;\n    }\n\n}\n\n@media screen and (max-width: 880px) {\n    \n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 325px;\n        margin-left: -5em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n        left: -1em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 310px;\n        margin-left: -4em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 220px;\n        margin-left: -3em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 40px;\n        width: 130px;\n        left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n         \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 11px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n\n@media screen and (max-width: 320px) {\n       \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtZGlhbG9nLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoid2VsY29tZS1kaWFsb2cucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQzNXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA2ZW07XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgbGVmdDogLTJlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIGxlZnQ6IC0xZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00ZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDRlbTtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIFxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtM2VtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgIFxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKO0FBQ0EsNHZLQUE0dksiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MzVweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNmVtO1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIGxlZnQ6IC0yZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAgIFxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01ZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDRlbTtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBsZWZ0OiAtMWVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgIFxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMzEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNGVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA0ZW07XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTNlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgIFxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9747:
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ 3227);
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ 4139);



class WelcomeComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 6,
      vars: 0,
      consts: [["id", "welcome"], [1, "layer_one"], [1, "avatar-container"], ["loading", "lazy", "src", "assets/template/welcome/boudich-preview.png", "alt", "Boudiche Mohamed Ali", 1, "illustration"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3)(4, "app-welcome-background");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-welcome-dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeBackgroundComponent, _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeDialogComponent],
      styles: ["#welcome[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: 780px;\n    padding-top: 5em;\n}\n\n.layer_one[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    height: 780px;\n    z-index: 1;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dlbGNvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA3ODBweDtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xufVxuXG4ubGF5ZXJfb25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICBoZWlnaHQ6IDc4MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0EsZzhCQUFnOEIiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDc4MHB4O1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG59XG5cbi5sYXllcl9vbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgIGhlaWdodDogNzgwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 1024px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n}\n\n@media screen and (max-width: 880px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 290px;\n    } \n}\n\n@media screen and (max-width: 500px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 250px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 250px;\n    } \n}\n\n@media screen and (max-width: 320px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 220px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 220px;\n    } \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtY29tcG9uZW50LnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6IndlbGNvbWUtY29tcG9uZW50LnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiA1ODVweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiA1ODVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDQ2NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDQ2NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAjd2VsY29tZSB7XG4gICAgICAgIGhlaWdodDogMzg1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIGhlaWdodDogMzg1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICB9IFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9IFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICB9IFxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQSw0a0VBQTRrRSIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICAjd2VsY29tZSB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH0gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 135:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.molule.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeModule: () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ 9747);
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ 3227);
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ 4139);
/* harmony import */ var _welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog-typing/typing-animation.module */ 5837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class WelcomeModule {
  static {
    this.ɵfac = function WelcomeModule_Factory(t) {
      return new (t || WelcomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: WelcomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_3__.TypingAnimationModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WelcomeModule, {
    declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeBackgroundComponent, _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeDialogComponent],
    imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_3__.TypingAnimationModule],
    exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "dummy",
    authDomain: "dummy",
    databaseURL: "dummy",
    projectId: "dummy",
    storageBucket: "dummy",
    messagingSenderId: "dummy",
    appId: "dummy",
    measurementId: "dummy"
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map