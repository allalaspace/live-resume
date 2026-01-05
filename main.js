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
      styles: ["a[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: 12em;\n  background-color: #3a5f8e;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: #2a3c52;\n}\n\n\n\n.page-not-found-text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(42, 60, 82, 0.1);\n  font-size: 30em;\n  text-align: center;\n  top: 40%;\n  height: 400px;\n}\n.page-not-found-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: 300px;\n  width: 500px;\n}\n.container[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(42, 60, 82, 0.1);\n  border-radius: 12px;\n  bottom: 40px;\n  height: 12px;\n  left: 80px;\n  width: 350px;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.1s;\n}\n\n\n\n.caveman[_ngcontent-%COMP%] {\n  height: 300px;\n  position: absolute;\n  width: 250px;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1) {\n  right: 20px;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20px;\n  transform: rotateY(180deg);\n}\n\n.head[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2a3c52;\n  border-radius: 50px;\n  height: 140px;\n  left: 60px;\n  top: 25px;\n  width: 65px;\n}\n.head[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 10px;\n  height: 20px;\n  width: 7px;\n}\n.head[_ngcontent-%COMP%]:after {\n  left: 35px;\n  top: -8px;\n  transform: rotate(20deg);\n}\n.head[_ngcontent-%COMP%]:before {\n  left: 30px;\n  top: -8px;\n  transform: rotate(-20deg);\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #e2af90;\n  border-radius: 50px;\n  height: 16px;\n  left: 45%;\n  top: 40px;\n  width: 48px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 50%;\n  height: 5px;\n  width: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after {\n  left: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  right: 9px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #d6a486;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 35px;\n  left: 45%;\n  top: 12px;\n  width: 15px;\n}\n\n.shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  height: 140px;\n  overflow: hidden;\n  top: 70px;\n  width: 140px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after {\n  left: 50px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  left: 60px;\n  top: 45px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  left: -12px;\n  top: 80px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10px;\n  top: 0;\n  transform: rotate(90deg);\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):after {\n  left: 65px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):before {\n  display: none;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3f5571;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3a5f8e;\n}\n\n.arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e2af90;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 50px;\n  box-sizing: border-box;\n  height: 180px;\n  left: 135px;\n  top: 80px;\n  transform-origin: 30px 30px;\n  width: 60px;\n  z-index: 1;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 110px solid #601513;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  height: 0;\n  left: -60px;\n  top: 120px;\n  transform: rotate(70deg);\n  width: 20px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after, .arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #601513;\n  border-radius: 50%;\n  left: 0;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after {\n  height: 20px;\n  width: 20px;\n  top: -10px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  height: 40px;\n  width: 40px;\n  left: -10px;\n  top: 90px;\n}\n\n.leg[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  height: 55px;\n  top: 200px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 10px;\n  left: -5px;\n  top: 15px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 25px 25px 0 0;\n  height: 25px;\n  left: -38px;\n  top: 30px;\n  width: 50px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%], .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #e2af90;\n  border-radius: 50%;\n  bottom: 0;\n  height: 15px;\n  transform-origin: bottom;\n  width: 15px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after {\n  left: -6px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before {\n  left: 8px;\n  transform: scale(0.6);\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%] {\n  left: 15px;\n  transform: scale(0.6);\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  left: 11px;\n  content: \"\";\n}\n\n.leg[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #bf9176;\n  left: 95px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%] {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:before {\n  display: none;\n}\n\n.leg[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #d6a486;\n  left: 115px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #d6a486;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2)   .foot[_ngcontent-%COMP%] {\n  background-color: #d6a486;\n}\n\n\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .arm-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .arm-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .head[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .head[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:before {\n  animation: _ngcontent-%COMP%_eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:before {\n  animation: _ngcontent-%COMP%_eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  animation-delay: 0.6s;\n}\n\n@keyframes _ngcontent-%COMP%_eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@keyframes _ngcontent-%COMP%_shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQU5FLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQU1FLGdCQUFBO0VBQ0EseUJBaENXO0VBaUNYLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBM0JKO0FBNkJJO0VBQ0kseUJBQUE7QUEzQlI7O0FBK0JBLGNBQUE7QUFDQTtFQTNCRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUEyQkEsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQTFCRjtBQTRCRTtFQUNJLFNBQUE7QUExQk47O0FBOEJBO0VBekNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQXlDQSxhQUFBO0VBQ0EsWUFBQTtBQXpCRjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EscUJBQUE7QUF4Qko7O0FBNEJBLFlBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF6QkY7O0FBNEJBO0VBQXdCLFdBQUE7QUF4QnhCOztBQXlCQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLHlCQTVGVztFQTZGWCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFyQkY7QUFzQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkE1R1U7RUE2R1YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXBCSjtBQXNCRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFwQko7QUFzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBcEJKO0FBc0JFO0VBekdBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBMEdFLHlCQTFIVztFQTJIWCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFuQko7QUFvQkk7RUF4SEYsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUF5SEksV0FBQTtFQUNBLHlCQXhJUTtFQXlJUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBakJOO0FBbUJJO0VBQ0UsU0FBQTtBQWpCTjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47QUFtQkk7RUEzSEYsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBMkhJLHlCQWpKUztFQWtKVCw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBZk47O0FBb0JBO0VBaEpFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBaUpBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFoQkY7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFmSjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkTjtBQWdCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBZE47QUFnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWROO0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFmSjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7QUFoQko7QUFpQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWZOO0FBaUJJO0VBQ0UsYUFBQTtBQWZOOztBQW9CQTtFQUNFLHlCQWpOYTtBQWdNZjtBQW1CRTtFQUNFLHlCQW5OVztBQWtNZjtBQWtCSTtFQUFvQix5QkFwTlQ7QUFxTWY7O0FBbUJBO0VBQ0UseUJBek5hO0FBeU1mO0FBaUJFO0VBQ0kseUJBNU5TO0FBNk1mO0FBZ0JNO0VBQW9CLHlCQTdOWDtBQWdOZjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLHlCQWpPYTtFQWtPYiw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZEY7QUFnQkU7RUFDRSxrQkFBQTtFQUNELGtDQUFBO0VBQ0MsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQWRKO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdFBTO0VBdVBULGtCQUFBO0VBQ0EsT0FBQTtBQWROO0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZE47QUFnQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZE47O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWhCRjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFoQko7QUFpQkk7RUFDRSxrQkFBQTtFQUNBLHlCQXJTUztFQXNTVCxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBZk47QUFpQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQWZOO0FBaUJJO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBaEJOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFoQk47O0FBcUJBO0VBQ0UseUJBaFVhO0VBaVViLFVBQUE7QUFsQkY7QUFtQkU7RUFBVSx5QkFsVUc7QUFrVGY7QUFpQkU7RUFDRSx5QkFwVVc7QUFxVGY7QUFnQkk7RUFBVSx5QkFyVUM7QUF3VGY7QUFjSTtFQUFXLGFBQUE7QUFYZjs7QUFlQTtFQUNFLHlCQTVVYTtFQTZVYixXQUFBO0FBWkY7QUFhRTtFQUFVLHlCQTlVRztBQW9VZjtBQVdFO0VBQVEseUJBL1VLO0FBdVVmOztBQVdBLGNBQUE7QUFDQTtFQUNFLHVFQUFBO0FBUkY7O0FBV0E7RUFDRSx1RUFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUFLLG9CQUFBO0VBUEw7RUFRQTtJQUFPLDBCQUFBO0VBTFA7QUFDRjtBQU9BO0VBQ0Usd0VBQUE7QUFMRjs7QUFRQTtFQUNFLHdFQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQUssU0FBQTtFQUpMO0VBS0E7SUFBTSxTQUFBO0VBRk47RUFHQTtJQUFNLFNBQUE7RUFBTjtFQUNBO0lBQU8sU0FBQTtFQUVQO0FBQ0Y7QUFBQTs7RUFFRSx1RUFBQTtBQUVGOztBQUNBOztFQUVFLHVFQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQUssV0FBQTtFQUdMO0VBRkE7SUFBTSxXQUFBO0VBS047RUFKQTtJQUFNLFdBQUE7RUFPTjtFQU5BO0lBQU8sV0FBQTtFQVNQO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUFTRjtFQVBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFTRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJsYWNrOiAjMmEzYzUyO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsdWUtMTogIzNhNWY4ZTtcbiRjb2xvci1ibHVlLTI6ICMzZjU1NzE7XG4kY29sb3Itc2tpbi0xOiAjZTJhZjkwO1xuJGNvbG9yLXNraW4tMjogI2Q2YTQ4NjtcbiRjb2xvci1za2luLTM6ICNiZjkxNzY7XG4kY29sb3ItaGFpcjogIzJhM2M1MjtcbiRjb2xvci13b29kLTE6ICM2MDE1MTM7XG4kY29sb3Itd29vZC0yOiAjNDEwYTA5O1xuXG5AbWl4aW4gdG9wNTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiBsZWZ0NTAge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyZWQge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5hIHtcbiAgICBAaW5jbHVkZSBjZW50ZXJlZDtcblxuICAgIG1hcmdpbi10b3A6IDEyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gICAgfVxufVxuXG4vKiBUaGUgc2NlbmUgKi9cbi5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XG5cbiAgY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xuICBmb250LXNpemU6IDMwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA0MCU7XG4gIGhlaWdodDogNDAwcHg7XG5cbiAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxufVxuXG4vKiBjYXZlbWFuICovXG4uY2F2ZW1hbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgeyByaWdodDogMjBweDsgfVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhhaXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogMjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgbGVmdDogMzVweDtcbiAgICB0b3A6IC04cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIC5leWUge1xuICAgIEBpbmNsdWRlIGxlZnQ1MDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGVmdDogNDUlO1xuICAgIHRvcDogNDBweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSB0b3A1MDtcbiAgICAgIFxuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDVweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIHJpZ2h0OiA5cHg7XG4gICAgfVxuICAgIC5ub3NlIHtcbiAgICAgIEBpbmNsdWRlIGNlbnRlcmVkO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yO1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKCRjb2xvci1ibGFjaywgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbGVmdDogNDUlO1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5zaGFwZSB7XG4gIEBpbmNsdWRlIGxlZnQ1MDsgXG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDcwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMjBweDsgICAgICBcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICB0b3A6IDQ1cHg7XG4gICAgfVxuICB9XG4gIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiAtMTJweDtcbiAgICB0b3A6IDgwcHg7XG4gIH1cblxuICAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDY1cHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuc2hhcGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xO1xuXG4gIC5jaXJjbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0yOyBcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IH1cbiAgfVxufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjtcbiAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xOyBcbiAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTsgfVxuICB9XG59XG5cbi5hcm0tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTgwcHg7XG4gIGxlZnQ6IDEzNXB4OyBcbiAgdG9wOiA4MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMHB4IDMwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICB6LWluZGV4OiAxO1xuXG4gIC5jbHViIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm9yZGVyLWJvdHRvbTogMTEwcHggc29saWQgJGNvbG9yLXdvb2QtMTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IC02MHB4O1xuICAgIHRvcDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpO1xuICAgIHdpZHRoOiAyMHB4O1xuXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13b29kLTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIHRvcDogOTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxlZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA1NXB4OyAgXG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IC01cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgLmZvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiAtMzhweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUsIC5maW5nZXJzLCAuZmluZ2VyczphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogLTZweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuXG4gICAgLmZpbmdlcnMge1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG4gICAgLmZpbmdlcnM6YWZ0ZXIge1xuICAgICAgbGVmdDogMTFweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDEpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7XG4gIGxlZnQ6IDk1cHg7XG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyB9XG4gIC5mb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0zOyBcbiAgICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMzsgfVxuICAgICY6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG59XG5cbi5sZWc6bnRoLWNoaWxkKDIpIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XG4gIGxlZnQ6IDExNXB4OyAgIFxuICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMjsgfVxuICAuZm9vdCB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7IH1cbn1cblxuLyogYW5pbWF0aW9uICovXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLmFybS1yaWdodCB7XG4gIGFuaW1hdGlvbjogYXJtLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgYXJtLWFuaW1hIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IH1cbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5oZWFkIHtcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBoZWFkLWFuaW1hIHtcbiAgMCUgeyB0b3A6IDI1cHg7IH1cbiAgNDIlIHsgdG9wOiAyNXB4OyB9XG4gIDQ1JSB7IHRvcDogNTBweDsgfVxuICAxMDAlIHsgdG9wOiAyNXB4OyB9XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLCBcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTphZnRlciwgXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTpiZWZvcmUge1xuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGV5ZS1hbmltYSB7XG4gIDAlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDIlIHsgaGVpZ2h0OiA1cHg7IH1cbiAgNDUlIHsgaGVpZ2h0OiAxcHg7IH1cbiAgMTAwJSB7IGhlaWdodDogNXB4OyB9XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93LWFuaW1hIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 990px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 23em;\n  }\n}\n@media screen and (max-width: 790px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 20em;\n  }\n}\n@media screen and (max-width: 690px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 18em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 14em;\n  }\n}\n@media screen and (max-width: 500px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksZUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUVJO0lBQ0ksZUFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUVJO0lBQ0ksZUFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZUFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUVJO0lBQ0ksZUFBQTtFQVJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIzZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIwZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE4ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEwZW07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: ["#about[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(0deg, #fff 44.44%, #d4e7fe 44.44%, #d4e7fe 0%, #fff 0%, #fff 94.44%, #d4e7fe 94.44%, #d4e7fe 100%);\n  background-size: 10px 1220px;\n}\n\n.about-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  width: 85vw;\n  z-index: 2;\n  padding: 2em;\n  max-width: 1400px;\n}\n.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  font-size: 22px;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  color: #222f5c;\n  margin: 5px 0 0 0;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 10px;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n  color: #b2b6c6;\n  font-size: 18px;\n  font-style: italic;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  min-height: 220px;\n  line-height: 1.5em;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #555f81;\n  margin-right: 1em;\n  transition: 0.3s;\n}\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: 450px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('profile.png');\n  border: 3px solid #d4e7fe;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #414c73;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0lBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQVo7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQU9ZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUxoQjtBQVFZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5oQjtBQVVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUlo7QUFVWTtFQUNJLGNBQUE7QUFSaEI7QUFhSTtFQUNJLFlBQUE7QUFYUjtBQWFRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBR0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBWFo7QUFjUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQVpaO0FBY1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7QUFjZ0I7RUFDSSxjQUFBO0FBWnBCIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmYgNDQuNDQlLCAjZDRlN2ZlIDQ0LjQ0JSwgI2Q0ZTdmZSAwJSwgI2ZmZiAwJSwgI2ZmZiA5NC40NCUsICNkNGU3ZmUgOTQuNDQlLCAjZDRlN2ZlIDEwMCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMjIwcHg7XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5maXJzdC1jb2x1bW4ge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwIHtcbiAgICBcbiAgICAgICAgICAgICYueWVhcnMtb2xkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2IyYjZjNjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVlNjc4ODtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzU1NWY4MTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4N2ExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zZWNvbmQtY29sdW1uIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIFxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTllbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9wcm9maWxlLnBuZycpO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2Q0ZTdmZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4N2ExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 1280px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 380px;\n    height: 380px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 370px;\n    height: 370px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    flex-wrap: wrap;\n  }\n  .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .first-column[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .second-column[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2em;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    align-self: center;\n  }\n}\n@media screen and (max-width: 880px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1350px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 0;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n  }\n}\n@media screen and (max-width: 600px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1600px;\n  }\n  .about-container[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n}\n@media screen and (max-width: 460px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 10px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    padding: 15px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1E7SUFDSSxlQUFBO0VBRFY7RUFJTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBRlY7QUFDRjtBQU1BO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUxOO0FBQ0Y7QUFRQTtFQUVJO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUFQTjtFQVlNO0lBQ0ksZUFBQTtFQVZWO0VBYU07SUFDSSxlQUFBO0VBWFY7RUFjTTtJQUNJLGVBQUE7RUFaVjtFQWVNO0lBQ0ksa0JBQUE7RUFiVjtFQWlCRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUFmTjtFQWlCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFmVjtBQUNGO0FBbUJBO0VBRUk7SUFDSSw0QkFBQTtFQWxCTjtFQXlCVTtJQUNJLGVBQUE7RUF2QmQ7RUEwQlU7SUFDSSxZQUFBO0VBeEJkO0VBMkJVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUF6QmQ7RUE2Qk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTNCVjtBQUNGO0FBK0JBO0VBRUk7SUFDSSw0QkFBQTtFQTlCTjtFQWlDRTtJQUNJLFdBQUE7RUEvQk47RUFtQ1U7SUFDSSxlQUFBO0VBakNkO0VBb0NVO0lBQ0ksYUFBQTtFQWxDZDtBQUNGO0FBdUNBO0VBTVk7SUFDSSxlQUFBO0VBMUNkO0VBNkNVO0lBQ0ksZUFBQTtFQTNDZDtFQWdEYztJQUNJLGVBQUE7RUE5Q2xCO0VBaURjO0lBQ0ksZUFBQTtFQS9DbEI7RUFtRFU7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQWpEZDtFQXdETTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBdERWO0VBd0RVO0lBQ0ksZUFBQTtFQXREZDtBQUNGO0FBMkRBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQTFETjtBQUNGO0FBNkRBO0VBRUk7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQTVETjtFQWdFVTtJQUNJLGVBQUE7RUE5RGQ7RUFvRVU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQWxFZDtFQXFFVTtJQUNJLGVBQUE7RUFuRWQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuZmlyc3QtY29sdW1uIHtcbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAueWVhcnMtb2xkIHsgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9iYmllcyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kLWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcblxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XG5cbiAgICAjYWJvdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTM1MHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1jb250YWluZXIge1xuXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuICAgIFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5pY29uIHsgXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcC50ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDM0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgfSAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAjYWJvdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTYwMHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuXG4gICAgICAgICAgICAgICAgJi55ZWFycy1vbGQgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY29uZC1jb2x1bW4ge1xuXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcblxuICAgIC5hYm91dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmQtY29sdW1uIHtcbiAgICBcbiAgICAgICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume/resume.component */ 3972);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 1665);
/* harmony import */ var _contact_firebase_contact_firebase_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/firebase-contact/firebase-contact.component */ 1017);
/* harmony import */ var _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-detail/post-detail.component */ 4296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







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
},
// Route spécifique avant la route générique
{
  path: "posts/:id",
  component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__.PostDetailComponent
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
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
        // In order to get anchor / fragment scrolling to work at all, we need to
        // enable it on the router.
        anchorScrolling: "enabled",
        // Once the above is enabled, the fragment link will only work on the
        // first click. This is because, by default, the Router ignores requests
        // to navigate to the SAME URL that is currently rendered. Unfortunately,
        // the fragment scrolling is powered by Navigation Events. As such, we
        // have to tell the Router to re-trigger the Navigation Events even if we
        // are navigating to the same URL.
        // Changé en "ignore" pour éviter les boucles infinies
        onSameUrlNavigation: "ignore"
      }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
    // Enregistrer le service worker pour PWA
    this.registerServiceWorker();
  }
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      // Enregistrer le service worker simple
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('Service Worker enregistré avec succès:', registration.scope);
        // Vérifier les mises à jour
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nouvelle version disponible
                if (confirm('Une nouvelle version est disponible. Voulez-vous recharger la page ?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      }).catch(error => {
        console.log('Erreur lors de l\'enregistrement du Service Worker:', error);
      });
      // Écouter les messages du service worker
      navigator.serviceWorker.addEventListener('message', event => {
        console.log('Message du Service Worker:', event.data);
      });
    }
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
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.module */ 2563);
/* harmony import */ var _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/page-not-found-routing.module */ 9684);
/* harmony import */ var _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/page-not-found.module */ 6565);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.module */ 8599);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/en */ 9032);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ 8581);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/fr */ 5669);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ 7311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
















(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__["default"], "en");
(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__["default"], "fr");
(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__["default"], "pt-BR", _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__["default"]);
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__.ResumeModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule, _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _resume_resume_module__WEBPACK_IMPORTED_MODULE_2__.ResumeModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule, _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
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
      styles: [".contact-form-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #343a40;\n  text-align: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 4px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQURGO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLCtDQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgfVxuXG4gICYuaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICB9XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgY29sb3I6ICMxNTU3MjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5ZDk7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2MmNjO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuNSk7XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
      styles: ["#contact[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  justify-content: center;\n  background-color: #d4e7fe;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 1em;\n  border-radius: 15px;\n  z-index: 3;\n  top: 50%;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  margin: 0 1em;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 22px;\n  top: 2px;\n  position: relative;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #656565;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: none;\n  color: #77242c;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n  color: #373837;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #c4e4c6;\n  border: 1px solid #cecece;\n  animation: _ngcontent-%COMP%_fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #e6adb2;\n  border: 1px solid #d49399;\n  animation: _ngcontent-%COMP%_fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 105%;\n  bottom: -1em;\n  right: 0;\n  z-index: 1;\n}\n#contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 450px;\n  background-color: #c1d5ee;\n  border-top-left-radius: 100%;\n  border: 0;\n  border-right: 0;\n  border-bottom: 0;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: -1em;\n  right: 0;\n  z-index: 0;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 85vw;\n  max-width: 1400px;\n  opacity: 1;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  flex-grow: 4;\n  z-index: 2;\n  margin-bottom: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('profile.png');\n  border: 1px solid #d4e7fe;\n  margin-right: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #646d8d;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #646d8d;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222f5c;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n  margin-top: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1em;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #222f5c;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #70c576;\n  font-size: 22px;\n  color: #fff;\n  padding: 1em;\n  border: 0;\n  border-radius: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #2c612f;\n  background-color: #68bd6e;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.ng-invalid[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  flex-grow: 6;\n}\n#contact[_ngcontent-%COMP%]   .container.fade[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_fadeOut 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n.firebase-contact-link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n  padding: 15px;\n  background-color: rgba(0, 123, 255, 0.1);\n  border-radius: 8px;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background-color: #007bff;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background-color 0.3s ease;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.firebase-contact-link[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDWTtFQUNJLGNBQUE7QUFDaEI7QUFHUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUhaO0FBTVE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0FBSlo7QUFNWTtFQUNJLGVBQUE7QUFKaEI7QUFPUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFMWjtBQU9ZO0VBQ0ksZUFBQTtBQUxoQjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBUlI7QUFXSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBVFI7QUFZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFWUjtBQVlRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVZaO0FBY2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVpwQjtBQWdCWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FBZGhCO0FBZ0JnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBZHBCO0FBbUJvQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWpCeEI7QUFvQm9CO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBbEJ4QjtBQXFCb0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5CeEI7QUFzQm9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBcEJ4QjtBQXlCWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdkJoQjtBQXlCZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUF2QnBCO0FBeUJvQjtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBdkJ4QjtBQTJCNEI7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUF6QmhDO0FBOEJvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBNUJ4QjtBQStCb0I7RUFDSSxxQ0FBQTtBQTdCeEI7QUFnQ29CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTlCeEI7QUFnQ3dCO0VBQ0kscUJBQUE7QUE5QjVCO0FBa0NvQjtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLHFCQUFBO0FBaEM1QjtBQW1Dd0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFqQzVCO0FBcUNvQjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQW5DeEI7QUFzQ29CO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBcEN4QjtBQXlDd0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdkM1QjtBQThDUTtFQUNJLFlBQUE7QUE1Q1o7QUErQ1E7RUFDSSxvQkFBQTtFQUVBLHFCQUFBO0VBQ0EsNkJBQUE7QUE3Q1o7O0FBa0RBO0VBQ0k7SUFBTyxVQUFBO0VBOUNUO0VBK0NFO0lBQUssVUFBQTtFQTVDUDtBQUNGO0FBOENBO0VBQ0k7SUFBTyxVQUFBO0VBM0NUO0VBNENFO0lBQUssWUFBQTtFQXpDUDtBQUNGO0FBMkNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBekNGO0FBMkNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBekNKO0FBNENFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUExQ0o7QUE0Q0k7RUFDRSx5QkFBQTtBQTFDTjtBQTZDSTtFQUNFLGdCQUFBO0FBM0NOIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3Qge1xuICAgIHRvcDogLTRlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTdmZTtcblxuICAgIC5mZWVkYmFjay1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICBtYXJnaW46IDAgMWVtO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNzcyNDJjO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzczODM3O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0ZTRjNjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG5cbiAgICAgICAgICAgIC5zdWNjZXNzIHsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhZGIyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0OTM5OTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcblxuICAgICAgICAgICAgLmVycm9yIHsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDUlO1xuICAgICAgICBib3R0b206IC0xZW07XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5oYWxmLWNpcmNsZSB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxZDVlZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7ICAgICAgICBcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IDg1dnc7XG4gICAgICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgXG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OWVtO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy90ZW1wbGF0ZS9hYm91dC9wcm9maWxlLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRlN2ZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2ZDhkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDZkOGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAud2FybmluZ3Mge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg0ODQ4NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwYzU3NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJjNjEyZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhiZDZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAmLmxvYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogNjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmLmZhZGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMTsgfVxuICAgIHRvIHsgb3BhY2l0eTogMC4zOyB9XG59XG5cbi5maXJlYmFzZS1jb250YWN0LWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICAuY29udGFjdC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB9XG4gICAgXG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 1400px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    flex-grow: 3;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    flex-grow: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 0.7em;\n    justify-content: center;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 370px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRO0lBQ0ksWUFBQTtFQUZWO0VBS007SUFDSSxZQUFBO0VBSFY7QUFDRjtBQU9BO0VBSVE7SUFDRyxhQUFBO0VBUlQ7RUFXTTtJQUNJLGFBQUE7RUFUVjtFQWNVO0lBQ0ksWUFBQTtFQVpkO0VBZVU7SUFDSSxZQUFBO0VBYmQ7QUFDRjtBQW1CQTtFQU1ZO0lBQ0ksZUFBQTtFQXRCZDtFQXlCVTtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7RUF2QmQ7RUF5QmM7SUFDSSxhQUFBO0VBdkJsQjtFQTRCa0I7SUFDSSxlQUFBO0VBMUJ0QjtFQTZCa0I7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUEzQnRCO0VBZ0NVO0lBQ0ksY0FBQTtFQTlCZDtFQWtDa0I7SUFDSSxvQkFBQTtFQWhDdEI7RUFtQ2tCO0lBQ0ksZUFBQTtFQWpDdEI7RUFvQ2tCO0lBQ0ksZUFBQTtFQWxDdEI7RUFvQ3NCO0lBQ0kscUJBQUE7RUFsQzFCO0VBc0NrQjtJQUNJLGVBQUE7RUFwQ3RCO0VBc0NzQjtJQUNJLHFCQUFBO0VBcEMxQjtFQXdDa0I7SUFDSSxlQUFBO0VBdEN0QjtBQUNGO0FBOENBO0VBTVk7SUFDSSxjQUFBO0VBakRkO0VBcURrQjtJQUNJLGVBQUE7RUFuRHRCO0VBc0RrQjtJQUNJLGVBQUE7RUFwRHRCO0VBeURVO0lBQ0ksY0FBQTtFQXZEZDtFQTJEa0I7SUFDSSxvQkFBQTtFQXpEdEI7RUE0RGtCO0lBQ0ksZUFBQTtFQTFEdEI7RUE2RGtCO0lBQ0ksZUFBQTtFQTNEdEI7RUE4RGtCO0lBQ0ksZUFBQTtFQTVEdEI7RUErRGtCO0lBQ0ksZUFBQTtFQTdEdEI7QUFDRjtBQW9FQTtFQVVvQjtJQUNJLGVBQUE7RUEzRXRCO0VBOEVrQjtJQUNJLGVBQUE7RUE1RXRCO0VBaUZVO0lBQ0ksY0FBQTtFQS9FZDtFQWtGa0I7SUFDSSxlQUFBO0VBaEZ0QjtFQW1Ga0I7SUFDSSxlQUFBO0VBakZ0QjtFQW9Ga0I7SUFDSSxlQUFBO0VBbEZ0QjtFQXFGa0I7SUFDSSxlQUFBO0VBbkZ0QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuICAgICNjb250YWN0IHtcbiAgICBcbiAgICAgICAgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmhhbGYtY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtO1xuXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcbiAgICAgICAgXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcblxuICAgICNjb250YWN0IC5jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8599:
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/supabase-client.service */ 8548);



class ContactService {
  constructor(supabaseClientService) {
    this.supabaseClientService = supabaseClientService;
  }
  get supabase() {
    return this.supabaseClientService.client;
  }
  createContact(contact) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Contact form submission:', contact);
        const {
          data,
          error
        } = yield _this.supabase.from('contacts').insert([{
          name: contact.name,
          email: contact.email,
          message: contact.message,
          subject: contact.subject || '',
          date: contact.date ? new Date(contact.date).toISOString() : new Date().toISOString(),
          read: false
        }]).select();
        if (error) {
          throw error;
        }
        return Promise.resolve({
          id: data?.[0]?.id
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
        const {
          data,
          error
        } = yield _this2.supabase.from('contacts').select('*').order('date', {
          ascending: false
        });
        if (error) {
          throw error;
        }
        return (data || []).map(item => ({
          id: item.id,
          name: item.name,
          email: item.email,
          subject: item.subject || '',
          message: item.message,
          date: new Date(item.date)
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts:", error);
        return [];
      }
    })();
  }
  static {
    this.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseClientService));
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
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
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
  constructor(fb, supabaseService) {
    this.fb = fb;
    this.supabaseService = supabaseService;
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
        const result = yield _this.supabaseService.sendContactMessage(_this.contactForm.value.name, _this.contactForm.value.email, _this.contactForm.value.message);
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
      return new (t || FirebaseContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService));
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
      styles: [".firebase-contact-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 50px auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  margin: 0;\n}\n.title[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  font-size: 14px;\n}\n.title[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-container.loading[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.form-group[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.form-group[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n}\n\n.feedback-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: none;\n}\n.feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%], .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin: 0;\n}\n.feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.7;\n}\n.feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9maXJlYmFzZS1jb250YWN0L2ZpcmViYXNlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLDBCQUFBO0FBQU47O0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7RUFDRSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBT0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQUxOO0FBU0U7RUFDRSxlQUFBO0FBUEo7QUFTSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBUE47O0FBWUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFURjtBQVdFO0VBQ0UseUJBQUE7QUFUSjs7QUFhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVZGO0FBWUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBWko7QUFlRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWRKO0FBZ0JJO0VBQ0UsVUFBQTtBQWROIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcmViYXNlLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJhY2stbGluayB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAmLmxvYWRpbmc6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBcbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgIH1cbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gICAgfVxuICB9XG4gIFxuICAuZXJyb3JzIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgXG4gICAgc21hbGwge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcbiAgfVxufVxuXG4uZmVlZGJhY2stY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgXG4gICYuc3VjY2VzcyAuc3VjY2VzcyxcbiAgJi5lcnJvciAuZXJyb3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICYuc3VjY2VzcyAuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuICB9XG4gIFxuICAmLmVycm9yIC5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuICB9XG4gIFxuICAuaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/posts.service */ 7989);





class DataService {
  constructor(http, postsService) {
    this.http = http;
    this.postsService = postsService;
    this.baseUrl = "assets/data/";
  }
  getExperiences() {
    return this.http.get(this.baseUrl + "experiences.json").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  getAbout() {
    return this.http.get(this.baseUrl + "about.json").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  getPosts() {
    // Utiliser Supabase pour récupérer les posts dynamiquement
    return this.postsService.getPosts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  handleError(error) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errMessage);
      // Use the following instead if using lite-server
      // return throwError(() => err.text() || "backend server error");
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error || "Node.js server error");
  }
  static {
    this.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_0__.PostsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
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
    return datePipe.transform(value, pattern) || (this.locale === "en" ? "Currently" : "Actuellement");
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
      styles: [".bottom-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -75px;\n}\n\n.mainCont[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  position: relative;\n  color: white;\n  font-size: 62px;\n  text-align: center;\n  transition: all 0.2s ease-out;\n}\n\n.lineCont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n.lineCont[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  position: relative;\n}\n\n.milestone[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: -6px;\n  border: 3px solid white;\n  cursor: pointer;\n  transition: text-shadow 0.3s linear;\n}\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 10px;\n  white-space: nowrap;\n  color: white;\n  position: absolute;\n  top: 20px;\n  left: -35px;\n  transition: all 0.1s ease-out;\n  pointer-events: none; \n\n}\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n.milestone.current[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: #414c73;\n  top: -8px;\n  font-size: 22px;\n  text-shadow: 0 0 15px white;\n}\n.milestone.active[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  top: -40px;\n  display: block;\n}\n.milestone.active.future[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  border-top: 7px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 13px solid white;\n  background: transparent;\n  border-radius: 0;\n  border-right: 0;\n  pointer-events: none;\n}\n.milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  left: -50px;\n  top: -50px;\n}\n\n@keyframes _ngcontent-%COMP%_grow {\n  0% {\n    transform: scale(0.98);\n  }\n  50% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUEsRUFBQSw2REFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBQU47QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBREo7QUFHRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0U7SUFLRSxzQkFBQTtFQUZGO0VBS0E7SUFLQyxzQkFBQTtFQUhEO0VBTUE7SUFLRyxzQkFBQTtFQUpIO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNzVweDtcbn1cblxuLm1haW5Db250IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubGluZUNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG5cbiAgLmxpbmUge1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5taWxlc3RvbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG5cbiAgLnBvcHVwU3BhbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogT25seSB0aGUgQ2lyY2xlcyBpbiB0aGUgdGltZWxpbmUgYXJlIGxpc3RlbmVkIGJ5IGV2ZW50cy4gKi9cblxuICAgIC5tb250aCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuICAmLmN1cnJlbnQge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0YzczO1xuICAgIHRvcDogLThweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICB9XG4gICYuYWN0aXZlIC5wb3B1cFNwYW4ge1xuICAgIHRvcDogLTQwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJi5hY3RpdmUuZnV0dXJlIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICB0b3A6IC01MHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ3JvdyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgICAgXG4gIH1cbiAgIFxuICA1MCUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgfVxuICAgXG4gIDEwMCUge1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 1024px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -90px;\n  }\n  .milestone[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n    top: -6px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: 15px;\n  }\n  .milestone.current[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -8px;\n  }\n  .milestone.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    top: -45px;\n    left: -40px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -60px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -20px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGFBQUE7RUFBTjtFQUdFO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBRE47RUFHTTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBRFY7RUFHTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQURWO0VBR1U7SUFDSSxlQUFBO0VBRGQ7RUFJTTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRlY7QUFDRjtBQU1BO0VBRUk7SUFDSSxhQUFBO0VBTE47RUFTTTtJQUNJLFdBQUE7RUFQVjtFQVNVO0lBQ0ksYUFBQTtFQVBkO0VBVU07SUFDSSxXQUFBO0VBUlY7QUFDRjtBQVlBO0VBQ0k7SUFDSSxhQUFBO0VBVk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBib3R0b206IC05MHB4O1xuICAgIH1cbiAgICAgIFxuICAgIC5taWxlc3RvbmUge1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICBcbiAgICAgICAgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAmLmN1cnJlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgXG4gICAgICAgICAgICAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgYm90dG9tOiAtNjBweDtcbiAgICB9XG4gICAgXG4gICAgLm1pbGVzdG9uZSB7ICAgICAgICBcbiAgICAgICAgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtMjBweDtcblxuICAgICAgICAgICAgLm1vbnRoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: [".overlay[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.6418942577) 0%, rgba(0, 0, 0, 0.7735469188) 25%, rgba(0, 0, 0, 0.9079726891) 75%, rgba(0, 0, 0, 0.9924264706) 100%);\n  width: 100%;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-top: 4em;\n  padding-bottom: 8em;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  background-size: cover;\n  top: -4em;\n  position: relative;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 1400px;\n  align-self: center;\n  width: 85vw;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  flex-wrap: wrap;\n}\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n}\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n  transition: text-shadow 0.3s linear;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.middle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  color: #fff;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.4s;\n  min-height: 570px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 50px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 1em;\n  font-style: italic;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: capitalize;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  line-height: 1.5em;\n  font-size: 20px;\n  font-weight: normal;\n  text-align: left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transform: translateX(-100%);\n  animation-duration: 0.4s;\n  animation-timing-function: ease-in-out;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  transform: translateX(0);\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_cd-enter-right;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-left[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_cd-enter-left;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  animation-direction: reverse;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1em;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n  padding: 2px 5px 2px 5px;\n  background-color: #414c73;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%]:before {\n  content: \"#\";\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1em;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n@keyframes _ngcontent-%COMP%_cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-right {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cd-enter-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBSEksYUFBQTtFQU1BLHlCQUFBO0VBQ0Esd0tBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUlJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFPQSw2Q0FBQTtBQU5KOztBQVNBO0VBdENJLGFBQUE7RUF5Q0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFo7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVFRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBTlo7QUFVSTtFQXZFQSxhQUFBO0VBMEVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUxaO0FBUVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBS0EsbUNBQUE7QUFOWjtBQVFZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5oQjtBQVNZO0VBQ0ksMkJBQUE7QUFQaEI7QUFXUTtFQUNJLFlBQUE7QUFUWjtBQVlRO0VBQ0ksWUFBQTtBQVZaO0FBYVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBS0EsbUNBQUE7QUFYWjtBQWFZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVhoQjtBQWFZO0VBQ0ksMkJBQUE7QUFYaEI7O0FBaUJBO0VBeElJLGFBQUE7RUEySUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFHQSx1QkFBQTtFQUNBLGlCQUFBO0FBWFI7QUFhUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBWFo7QUFhWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVhoQjtBQWFnQjtFQUNJLFlBQUE7QUFYcEI7QUFlWTtFQUNJLFlBQUE7QUFiaEI7QUFpQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZaO0FBaUJZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBZmhCO0FBbUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJaO0FBb0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBbEJaO0FBb0JZO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBbEJoQjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXVCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBckJaO0FBd0JRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXRCWjtBQXdCWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUtBLDRCQUFBO0VBR0Esd0JBQUE7RUFHQSxzQ0FBQTtBQXRCaEI7QUF5Qlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBS0Esd0JBQUE7QUF2QmhCO0FBMkJZO0VBR0ksOEJBQUE7QUF6QmhCO0FBNEJZO0VBR0ksNkJBQUE7QUExQmhCO0FBNkJZO0VBR0ksNEJBQUE7QUEzQmhCO0FBK0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE3Qlo7QUErQlk7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBN0JoQjtBQStCZ0I7RUFDSSxZQUFBO0FBN0JwQjtBQWtDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQWhDWjtBQWtDWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWhDaEI7QUFrQ2dCO0VBQ0ksZUFBQTtBQWhDcEI7QUFrQ2dCO0VBQ0ksY0FBQTtBQWhDcEI7O0FBdUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUFwQ047RUFzQ0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUFwQ047QUFDRjtBQWtEQTtFQUNJO0lBQ0ksVUFBQTtJQUtBLDJCQUFBO0VBdENOO0VBd0NFO0lBQ0ksVUFBQTtJQUtBLHlCQUFBO0VBdENOO0FBQ0Y7QUF5Q0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtFQXZDTjtFQXlDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQXZDTjtBQUNGO0FBcURBO0VBQ0k7SUFDSSxVQUFBO0lBS0EsNEJBQUE7RUF6Q047RUEyQ0U7SUFDSSxVQUFBO0lBS0EseUJBQUE7RUF6Q047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBkaXNwbGF5LWZsZXgge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3ZlcmxheSB7XG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDAsIDM2KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsIDAsIDM2LCAwLjY0MTg5NDI1NzcwMzA4MTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNzczNTQ2OTE4NzY3NTA3KSAyNSUsIHJnYmEoMCwgMCwgMCwgMC45MDc5NzI2ODkwNzU2MzAzKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC45OTI0MjY0NzA1ODgyMzUzKSAxMDAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG59XG5cbi5sYW5kc2NhcGUge1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRvcDogLTRlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY2xpcDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgIFxuICAgIC8vIFRoaXMgaXMgc3VwcG9ydGVkIG5hdGl2ZWx5IGJ5IENocm9tZSwgT3BlcmEgYW5kIFNhZmFyaS4gRmlyZWZveCBhbmQgSUUgaGFzbid0IGltcGxlbWVudGVkIGl0IHlldCAoYnVnemlsLmxhKS5cbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA4NXZ3O1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmbGV4LWdyb3c6IDQ7XG5cbiAgICAgICAgJiBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZWQgZm9yIGRlc2t0b3AgcmVzb2x1dGlvbnMgb3IgaGlnaGVyLlxuICAgIC5uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXktZmxleDtcblxuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcmV2aW91cyB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgIFxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmlkZXIge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5uZXh0IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICAgICAgICBtaW4taGVpZ2h0OiA1NzBweDtcblxuICAgICAgICAuaGVhZGVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgIC5sb2dvLWJsb2NrIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFueS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJvbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgb2wge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERlZmluZXMgdGhlIGFuaW1hdGlvbnMgb2YgdGhlIG5hdmlnYXRpb24gb3JkZXJlZCBsaXN0LlxuICAgICAgICAgICAgbGkuZW50ZXItcmlnaHQsIGxpLmxlYXZlLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpLmVudGVyLWxlZnQsIGxpLmxlYXZlLWxlZnQge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkubGVhdmUtcmlnaHQsIGxpLmxlYXZlLWxlZnQge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNobm9sb2dpZXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG5cbiAgICAgICAgICAgIHNwYW4uaGFzaHRhZyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnIyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDg3YTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .landscape[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n@media screen and (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n    padding-top: 6em;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-align: center;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #fff;\n    display: inline-block;\n    padding: 10px 1em 10px 1em;\n    border-radius: 10px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    align-self: center;\n    font-size: 35px;\n    font-weight: 600;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 2em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 6px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBSVE7SUFDSSxlQUFBO0VBVlY7RUFhTTtJQUNJLGVBQUE7RUFYVjtFQW1CVTtJQUNJLGVBQUE7RUFqQmQ7RUFvQlU7SUFDSSxlQUFBO0VBbEJkO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtFQXVCTTtJQUNJLGVBQUE7RUFyQlY7RUF3Qk07SUFDSSxlQUFBO0VBdEJWO0VBMEJFO0lBQ0ksNkJBQUE7RUF4Qk47QUFDRjtBQTJCQTtFQUVJO0lBQ0ksc0JBQUE7RUExQk47RUE0Qk07SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0VBMUJWO0VBOEJFO0lBQ0ksZ0JBQUE7RUE1Qk47RUE4Qk07SUFDSSxlQUFBO0VBNUJWO0FBQ0Y7QUFnQ0E7RUFFSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUEvQk47RUFvQ007SUE1RUosYUFBQTtJQStFUSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUEvQlY7RUFpQ1U7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMEJBQUE7SUFDQSxtQkFBQTtFQS9CZDtFQWlDYztJQUNJLFdBQUE7RUEvQmxCO0VBbUNVO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFqQ2Q7RUFtQ2M7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VBakNsQjtFQW9DYztJQUNJLDJCQUFBO0VBbENsQjtFQXNDVTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXBDZDtFQXVDVTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBckNkO0VBdUNjO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQXJDbEI7RUF1Q2M7SUFDSSwyQkFBQTtFQXJDbEI7RUEyQ007SUFDSSxhQUFBO0VBekNWO0VBaURVO0lBQ0ksZUFBQTtFQS9DZDtFQWtEVTtJQUNJLHVCQUFBO0VBaERkO0VBbURVO0lBQ0ksa0JBQUE7RUFqRGQ7RUFvRFU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFsRGQ7RUFvRGM7SUFDSSxlQUFBO0VBbERsQjtBQUNGO0FBd0RBO0VBSVE7SUFDSSxlQUFBO0VBekRWO0VBOERVO0lBQ0ksZUFBQTtFQTVEZDtFQStEVTtJQUNJLDBCQUFBO0VBN0RkO0VBc0VVO0lBQ0ksWUFBQTtFQXBFZDtFQXVFVTtJQUNJLGVBQUE7RUFyRWQ7RUF3RVU7SUFDSSxlQUFBO0VBdEVkO0VBeUVVO0lBQ0ksZUFBQTtFQXZFZDtFQXlFYztJQUNJLGVBQUE7RUF2RWxCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4gICAgLnRvcC1jb250YWluZXIge1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucm9sZSwgLnBlcmlvZCwgLmxvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGFuZHNjYXBlIHtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuXG4gICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICBcbiAgICAub3ZlcmxheSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiA2ZW07XG4gICAgfVxuICAgIFxuICAgIC50b3AtY29udGFpbmVyIHtcblxuICAgICAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xuXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5tb2xkaW5nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDFlbSAxMHB4IDFlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByZXZpb3VzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEaXNhYmxlZCBmb3IgbW9iaWxlIHJlc29sdXRpb25zLlxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSwgLnJvbGUsIC5wZXJpb2QsIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG4gICAgLnRvcC1jb250YWluZXIge1xuXG4gICAgICAgIC50aXRsZSBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xuICAgIFxuICAgICAgICAgICAgLmN1cnJlbnQgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHggMTBweCA2cHg7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcblxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQge1xuXG4gICAgICAgICAgICAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: ["footer[_ngcontent-%COMP%] {\n    background-color: #3a5f8e;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.fork-github[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: none;\n}\n\n.fork-github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n}\n\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #fff;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #fff;\n    font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9yay1naXRodWIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mb3JrLWdpdGh1YiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JrLWdpdGh1YiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mb3JrLWdpdGh1YiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 500px) {\n\n    .copyright[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n}\n\n@media screen and (max-width: 370px) {\n\n    .fork-github[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        flex-grow: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuXG4gICAgLmZvcmstZ2l0aHViIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-navigator-share */ 8071);
/* harmony import */ var _services_pwa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pwa.service */ 366);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);







const _c0 = ["nav"];
const _c1 = ["shareBtn"];
const _c2 = ["installBtn"];
class HeaderComponent {
  constructor(locale, renderer, ngNavigatorShareService, pwaService) {
    this.locale = locale;
    this.renderer = renderer;
    this.pwaService = pwaService;
    this.showInstallButton = false;
    this.isInstalled = false;
    this.pwaSubscriptions = [];
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
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBars;
    this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faShareAlt;
    this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCloudDownloadAlt;
    this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faDownload;
    // S'abonner aux changements du service PWA
    this.pwaSubscriptions.push(this.pwaService.deferredPrompt$.subscribe(prompt => {
      this.showInstallButton = prompt !== null && !this.isInstalled;
    }));
    this.pwaSubscriptions.push(this.pwaService.isInstalled$.subscribe(installed => {
      this.isInstalled = installed;
      this.showInstallButton = false;
    }));
  }
  ngOnDestroy() {
    // Nettoyer les abonnements
    this.pwaSubscriptions.forEach(sub => sub.unsubscribe());
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
          text: "Hello, I'm a Full-stack DotNet Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!",
          url: "https://mohamedaliboudich.fr"
        });
      } catch (error) {
        console.log("You app is not shared, reason: ", error);
      }
    })();
  }
  installApp() {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.pwaService.installApp();
    })();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_4__.NgNavigatorShareService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_pwa_service__WEBPACK_IMPORTED_MODULE_1__.PwaService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.installBtn = _t.first);
        }
      },
      inputs: {
        pageXOffset: "pageXOffset",
        activeSection: "activeSection"
      },
      decls: 34,
      vars: 6,
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
        return [["nav", ""], ["shareBtn", ""], ["installBtn", ""], i18n_1, i18n_2, i18n_3, i18n_4, ["itemscope", "", "itemtype", "https://schema.org/WPHeader"], [1, "child", "navbar-toggle"], [1, "bar-icon", 3, "click", "icon"], ["itemprop", "brand", "itemscope", "", "itemtype", "https://schema.org/Brand", 1, "child", "logo-container"], ["href", "#", "itemprop", "name", "itemprop", "logo", 1, "logo", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/SiteNavigationElement", 1, "child", "nav-container", 3, "hidden"], ["href", "#about", "itemprop", "url", 3, "click"], ["itemprop", "name"], ["href", "#experience", "itemprop", "url", 3, "click"], ["href", "#posts", "itemprop", "url", 3, "click"], ["href", "#contact", "itemprop", "url", 3, "click"], ["href", "https://assets.guilhermeborgesbastos.com/live-resume/cv-english-guilherme-bastos-v2.0.pdf", "title", i18n_0, "target", "_blank", 3, "click"], [1, "bar-icon", 3, "icon"], [1, "child", "share-container"], ["alt", "share", "itemprop", "share", 1, "icon", 3, "click", "icon"], [1, "child", "install-container", 3, "hidden"], ["alt", "install", "title", "Installer l'application", 1, "icon", 3, "click", "icon"]];
      },
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 7)(1, "div", 8)(2, "fa-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onToggleBar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10)(4, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "maboudich");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12, 0)(8, "ul")(9, "li")(10, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](11, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li")(14, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](15, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li")(18, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](19, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li")(22, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](23, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.resetMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20, 1)(30, "fa-icon", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.share());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 22, 2)(33, "fa-icon", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.installApp());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faBars);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.hasMenuToggled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faShareAlt);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.showInstallButton || ctx.isInstalled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faDownload);
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
      styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  background: transparent;\n  flex-flow: row wrap;\n  max-width: 1400px;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 125px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 35px;\n  font-weight: 700;\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n  flex-grow: 5;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  align-items: center;\n  height: 52px;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 1em;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c;\n  padding: 14px;\n  border-radius: 15px;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #fff;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 52px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: inline-block;\n  height: 25px;\n  margin: 14px 0 0 0;\n  border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: rgba(34, 47, 92, 0.3490196078);\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\u202F\u202D\";\n}\nheader[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: none;\n  justify-content: center;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  background-color: #fff;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #4e5562;\n}\nheader[_ngcontent-%COMP%]   .child.install-container[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 10px;\n  background-color: #222f5c;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.install-container[_ngcontent-%COMP%]:hover {\n  background-color: #1a2445;\n  transform: scale(1.05);\n}\nheader[_ngcontent-%COMP%]   .child.install-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRVI7QUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFHZ0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRHBCO0FBR29CO0VBQ0ksc0JBQUE7RUFFQSwrQ0FBQTtBQUR4QjtBQUtnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSHBCO0FBV1E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSwrQ0FBQTtBQVRaO0FBV1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFUaEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtBQVRwQjtBQVdvQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksY0FBQTtBQVQ1QjtBQWFvQjtFQUNJLGNBQUE7QUFYeEI7QUFjb0I7RUFDSSxrQkFBQTtBQVp4QjtBQWdCZ0I7RUFDSSxhQUFBO0FBZHBCO0FBb0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFsQlI7QUFxQkk7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtBQXBCUjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBcEJaO0FBd0JJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXRCUjtBQXdCUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUF0Qlo7QUF5QlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXZCWiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcblxuICAgICAgICAuZnJhbWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjNTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMDJmXFwyMDJkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgIC8vIHZpc2libGUgb25seSBmb3IgbW9iaWxlIGJyb3dzZXJzIHRoYXQgYWNjZXB0IHNoYXJlIGludGVudC5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZTU1NjI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpbGQuaW5zdGFsbC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIHBhZGRpbmc6IDExcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDQ1O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@charset \"UTF-8\";\n@media screen and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n}\n@media screen and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    flex-grow: 4;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n    order: 5;\n    border-top: 2px solid rgba(191, 191, 191, 0.1019607843);\n    padding-top: 1em;\n    flex-basis: 100%;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-flow: column;\n    height: inherit;\n    align-items: flex-start;\n    line-height: 35px;\n    padding-left: 1em;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: rgba(94, 129, 171, 0.7411764706);\n    padding-left: 25px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #222f5c;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: \"\u2022\";\n    font-size: 50px;\n    position: absolute;\n    color: rgba(94, 129, 171, 0.7411764706);\n    margin-top: -4px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    flex-grow: initial;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 21px;\n    margin: 15px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 460px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n}\n@media screen and (max-width: 380px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid rgba(179, 183, 198, 0.1215686275);\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid rgba(191, 191, 191, 0.231372549);\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 0;\n    border-radius: 0;\n    margin-right: 5px;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBSVE7SUFDSSxrQkFBQTtFQURWO0VBSU07SUFDSSxrQkFBQTtFQUZWO0VBS007SUFDSSxpQkFBQTtFQUhWO0FBQ0Y7QUFPQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSw0QkFBQTtJQUVBLCtDQUFBO0lBQ0EsYUFBQTtFQU5OO0VBUU07SUFDSSxZQUFBO0VBTlY7RUFTTTtJQUNJLFFBQUE7SUFDQSx1REFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFQVjtFQVNVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBUGQ7RUFXa0I7SUFDSSxlQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQkFBQTtFQVR0QjtFQVdzQjtJQUNJLGNBQUE7SUFHQSxnQkFBQTtFQVQxQjtFQVlzQjtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQVYxQjtFQWFzQjtJQUNJLGdCQUFBO0VBWDFCO0VBZWtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHVDQUFBO0lBQ0EsZ0JBQUE7RUFidEI7RUFla0I7SUFDSSxjQUFBO0VBYnRCO0VBbUJNO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBakJWO0VBbUJVO0lBQ0ksNkJBQUE7SUFHQSxnQkFBQTtFQWpCZDtFQXFCTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBbkJWO0VBcUJVO0lBQ0ksZUFBQTtFQW5CZDtBQUNGO0FBd0JBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXZCTjtFQXlCTTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBdkJWO0VBNEJVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esd0RBQUE7RUExQmQ7RUE0QmM7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQTFCbEI7RUErQk07SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUE3QlY7RUErQlU7SUFDSSxlQUFBO0VBN0JkO0FBQ0Y7QUFtQ0E7RUFJUTtJQUNJLGVBQUE7SUFDQSxtREFBQTtJQUNBLDBCQUFBO0VBcENWO0VBdUNNO0lBQ0ksZUFBQTtFQXJDVjtFQXdDTTtJQUNJLGVBQUE7RUF0Q1Y7RUF5Q007SUFDSSxZQUFBO0VBdkNWO0VBeUNVO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0Esd0RBQUE7RUF2Q2Q7RUF5Q2M7SUFDSSxlQUFBO0lBQ0EsYUFBQTtFQXZDbEI7QUFDRjtBQThDQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLG1EQUFBO0lBQ0EsMEJBQUE7RUEvQ1Y7RUFrRE07SUFDSSxlQUFBO0VBaERWO0VBbURNO0lBQ0ksZUFBQTtFQWpEVjtFQW9ETTtJQUNJLFlBQUE7RUFsRFY7RUFvRFU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx3REFBQTtFQWxEZDtFQW9EYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VBbERsQjtFQXVETTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFyRFY7RUF1RFU7SUFDSSxlQUFBO0VBckRkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcblxuICAgIGhlYWRlciB7XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG9yZGVyOiA1O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiZmJmYmYxYTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDsgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFwyMDIyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiBpbml0aWFsO1xuXG4gICAgICAgICAgICAuZnJhbWUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5iYXItaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5mcmFtZSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcblxuICAgIGhlYWRlciB7XG4gICAgICAgIFxuICAgICAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG4gICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBcbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4296:
/*!************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostDetailComponent: () => (/* binding */ PostDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ 997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ 7989);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);








function PostDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement de l'article...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PostDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Erreur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostDetailComponent_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Retour aux posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostDetailComponent_div_7_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Retour \u00E0 l'accueil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function PostDetailComponent_article_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.post.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.getPostTitle());
  }
}
function PostDetailComponent_article_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 12)(1, "header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PostDetailComponent_article_8_div_2_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15)(4, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "meta", 18)(9, "meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "footer", 21)(12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostDetailComponent_article_8_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Retour aux posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.post.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getPostTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("content", ctx_r1.post.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(ctx_r1.post.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
class PostDetailComponent {
  constructor(route, router, postsService, sanitizer, locale) {
    this.route = route;
    this.router = router;
    this.postsService = postsService;
    this.sanitizer = sanitizer;
    this.locale = locale;
    this.post = null;
    this.markdownContent = '';
    this.htmlContent = '';
    this.isLoading = true;
    this.error = null;
    this.currentLanguage = 'en';
    // Déterminer la langue actuelle
    this.currentLanguage = this.locale.split('-')[0] || 'en';
  }
  ngOnInit() {
    // Utiliser route.params pour éviter les problèmes de rechargement
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (!postId) {
        this.error = 'ID du post manquant';
        this.isLoading = false;
        return;
      }
      // Réinitialiser l'état avant de charger un nouveau post
      this.post = null;
      this.markdownContent = '';
      this.htmlContent = '';
      this.error = null;
      this.isLoading = true;
      this.loadPost(postId);
    });
  }
  ngOnDestroy() {
    // Nettoyer l'abonnement pour éviter les fuites mémoire
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  loadPost(postId) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.isLoading = true;
        _this.error = null;
        // Récupérer le post
        const post = yield _this.postsService.getPostById(postId);
        if (!post) {
          _this.error = 'Post introuvable';
          _this.isLoading = false;
          return;
        }
        _this.post = post;
        // Si le post a un fichier markdown, le charger
        if (post.markdownFile) {
          try {
            console.log(`[PostDetail] Chargement du fichier markdown: ${post.markdownFile}`);
            _this.markdownContent = yield _this.postsService.getPostMarkdownContent(post.markdownFile);
            // Convertir le markdown en HTML
            // marked.parse() retourne une string synchronement
            const html = marked__WEBPACK_IMPORTED_MODULE_1__.marked.parse(_this.markdownContent);
            _this.htmlContent = _this.sanitizer.bypassSecurityTrustHtml(html);
            console.log(`[PostDetail] Contenu markdown chargé avec succès`);
          } catch (markdownError) {
            console.error('[PostDetail] Erreur lors du chargement du contenu markdown:', {
              error: markdownError,
              markdownFile: post.markdownFile,
              errorMessage: markdownError?.message || 'Erreur inconnue'
            });
            // Afficher un message d'erreur plus détaillé
            const errorMessage = markdownError?.message || 'Erreur inconnue';
            if (errorMessage.includes('n\'existe pas')) {
              _this.error = `Le fichier markdown "${post.markdownFile}" n'existe pas dans le stockage. Veuillez vérifier que le fichier a été correctement uploadé.`;
            } else if (errorMessage.includes('bucket')) {
              _this.error = `Erreur d'accès au stockage. Vérifiez la configuration du bucket.`;
            } else {
              _this.error = `Impossible de charger le contenu de l'article: ${errorMessage}`;
            }
          }
        } else {
          _this.error = 'Ce post n\'a pas de contenu disponible';
        }
        _this.isLoading = false;
      } catch (error) {
        console.error('Erreur lors du chargement du post:', error);
        _this.error = 'Une erreur est survenue lors du chargement du post';
        _this.isLoading = false;
      }
    })();
  }
  /**
   * Récupère le titre du post dans la langue actuelle
   */
  getPostTitle() {
    if (!this.post) return '';
    const intl = this.post.internationalizations.find(i => i.language === this.currentLanguage);
    return intl?.title || this.post.internationalizations[0]?.title || 'Sans titre';
  }
  /**
   * Récupère la description du post dans la langue actuelle
   */
  getPostDescription() {
    if (!this.post) return '';
    const intl = this.post.internationalizations.find(i => i.language === this.currentLanguage);
    return intl?.description || this.post.internationalizations[0]?.description || '';
  }
  /**
   * Formate la date du post
   */
  formatDate(dateString) {
    try {
      const [month, day, year] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString(this.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }
  /**
   * Retour à la liste des posts
   */
  goBack() {
    // Utiliser navigateByUrl pour éviter les problèmes de navigation
    this.router.navigateByUrl('/').then(() => {
      // Attendre un peu avant de scroller pour que la page soit chargée
      setTimeout(() => {
        const element = document.getElementById('posts');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    });
  }
  /**
   * Retour à l'accueil
   */
  goHome() {
    this.router.navigate(['/']);
  }
  static {
    this.ɵfac = function PostDetailComponent_Factory(t) {
      return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__.PostsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PostDetailComponent,
      selectors: [["app-post-detail"]],
      decls: 9,
      vars: 3,
      consts: [[1, "post-detail-container"], [1, "back-button-container"], ["aria-label", "Retour aux posts", 1, "back-button", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "post-article", "itemscope", "", "itemtype", "https://schema.org/Article", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "error-container"], [1, "error-actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/Article", 1, "post-article"], [1, "post-header"], ["class", "post-thumbnail", 4, "ngIf"], [1, "post-meta"], ["itemprop", "headline", 1, "post-title"], ["itemprop", "datePublished", 1, "post-date"], ["itemprop", "author", "content", "Mohamed Ali Boudich"], ["itemprop", "publisher", "content", "Mohamed Ali Boudich"], ["itemprop", "articleBody", 1, "post-content", 3, "innerHTML"], [1, "post-footer"], [1, "post-thumbnail"], ["itemprop", "image", 3, "src", "alt"]],
      template: function PostDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostDetailComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Retour aux posts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PostDetailComponent_div_6_Template, 4, 0, "div", 3)(7, PostDetailComponent_div_7_Template, 10, 1, "div", 4)(8, PostDetailComponent_article_8_Template, 14, 5, "article", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.post && !ctx.isLoading && !ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
      styles: [".post-detail-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  min-height: 80vh;\n}\n.post-detail-container[_ngcontent-%COMP%]   .back-button-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .back-button-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: transparent;\n  border: 2px solid #222f5c;\n  color: #222f5c;\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.post-detail-container[_ngcontent-%COMP%]   .back-button-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background-color: #222f5c;\n  color: #fff;\n  transform: translateX(-5px);\n}\n.post-detail-container[_ngcontent-%COMP%]   .back-button-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.post-detail-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #222f5c;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.post-detail-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #222f5c;\n  margin-bottom: 1rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 20px rgba(112, 112, 112, 0.1);\n  overflow: hidden;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #222f5c;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n  font-style: italic;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\n  padding: 0 2rem 2rem;\n  line-height: 1.8;\n  color: #333;\n  font-size: 1.1rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #222f5c;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-weight: 700;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #222f5c;\n  text-decoration: underline;\n  transition: color 0.3s ease;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1a2445;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-left: 2rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #222f5c;\n  padding-left: 1.5rem;\n  margin: 1.5rem 0;\n  font-style: italic;\n  color: #666;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9em;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 1rem;\n  border-radius: 8px;\n  overflow-x: auto;\n  margin-bottom: 1.5rem;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 1.5rem 0;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1.5rem 0;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  text-align: left;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px solid #eee;\n  margin: 2rem 0;\n}\n.post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-top: 1px solid #eee;\n  text-align: center;\n}\n.post-detail-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .post-detail-container[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n}\n.post-detail-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n}\n.post-detail-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1a2445;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(34, 47, 92, 0.3);\n}\n.post-detail-container[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #222f5c;\n}\n.post-detail-container[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n@media (max-width: 768px) {\n  .post-detail-container[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-thumbnail[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\n    padding: 0 1rem 1.5rem;\n    font-size: 1rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .post-detail-container[_ngcontent-%COMP%]   .post-article[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ047QUFDTTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBQ1I7QUFFTTtFQUNFLGVBQUE7QUFBUjtBQUtFOztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJOztFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZOO0FBS0k7RUFDRTtJQUFLLHVCQUFBO0VBRlQ7RUFHSTtJQUFPLHlCQUFBO0VBQVg7QUFDRjtBQUVJOztFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7O0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ047QUFJSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRk47QUFNRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUxSO0FBT1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTFY7QUFTTTtFQUNFLGFBQUE7QUFQUjtBQVNRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUFY7QUFVUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSVjtBQWFJO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVhOO0FBY007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWlI7QUFlTTtFQUFLLGVBQUE7QUFaWDtBQWFNO0VBQUssa0JBQUE7QUFWWDtBQVdNO0VBQUssaUJBQUE7QUFSWDtBQVNNO0VBQUssa0JBQUE7QUFOWDtBQVFNO0VBQ0UscUJBQUE7QUFOUjtBQVNNO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFQUjtBQVNRO0VBQ0UsY0FBQTtBQVBWO0FBV007RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFXUTtFQUNFLHFCQUFBO0FBVFY7QUFhTTtFQUNFLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVhSO0FBY007RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBWlI7QUFlTTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWJSO0FBZVE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFiVjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWZSO0FBa0JNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7QUFrQlE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFoQlY7QUFtQlE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWpCVjtBQXFCTTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFuQlI7QUF1Qkk7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQXJCTjtBQXlCRTs7RUFFRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXZCSjtBQTBCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQXhCSjtBQTBCSTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBQXhCTjtBQTRCRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTFCSjtBQTRCSTtFQUNFLHlCQUFBO0FBMUJOOztBQWdDQTtFQUNFO0lBQ0Usb0JBQUE7RUE3QkY7RUFpQ007SUFDRSxhQUFBO0VBL0JSO0VBa0NNO0lBQ0Usb0JBQUE7RUFoQ1I7RUFrQ1E7SUFDRSxrQkFBQTtFQWhDVjtFQXFDSTtJQUNFLHNCQUFBO0lBQ0EsZUFBQTtFQW5DTjtFQXFDTTtJQUFLLGlCQUFBO0VBbENYO0VBbUNNO0lBQUssa0JBQUE7RUFoQ1g7RUFpQ007SUFBSyxpQkFBQTtFQTlCWDtFQWlDSTtJQUNFLG9CQUFBO0VBL0JOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1kZXRhaWwtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWluLWhlaWdodDogODB2aDtcblxuICAuYmFjay1idXR0b24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjJmNWM7XG4gICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvYWRpbmctY29udGFpbmVyLFxuICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xuXG4gICAgLnNwaW5uZXIge1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjIyZjVjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgLmVycm9yLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgfVxuXG4gIC5wb3N0LWFydGljbGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5wb3N0LWhlYWRlciB7XG4gICAgICAucG9zdC10aHVtYm5haWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucG9zdC1tZXRhIHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcblxuICAgICAgICAucG9zdC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0LWRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucG9zdC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgMnJlbSAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG5cbiAgICAgIC8vIFN0eWxlcyBwb3VyIGxlIGNvbnRlbnUgbWFya2Rvd24gcmVuZHVcbiAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgaDEgeyBmb250LXNpemU6IDJyZW07IH1cbiAgICAgIGgyIHsgZm9udC1zaXplOiAxLjc1cmVtOyB9XG4gICAgICBoMyB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG4gICAgICBoNCB7IGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxYTI0NDU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdWwsIG9sIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjIyZjVjO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cblxuICAgICAgY29kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIH1cblxuICAgICAgcHJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xuXG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmY1YztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGhyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBvc3QtZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuYnRuLXByaW1hcnksXG4gIC5idG4tc2Vjb25kYXJ5IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI0NDU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDQ3LCA5MiwgMC4zKTtcbiAgICB9XG4gIH1cblxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogIzIyMmY1YztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucG9zdC1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcblxuICAgIC5wb3N0LWFydGljbGUge1xuICAgICAgLnBvc3QtaGVhZGVyIHtcbiAgICAgICAgLnBvc3QtdGh1bWJuYWlsIHtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QtbWV0YSB7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtIDFyZW07XG5cbiAgICAgICAgICAucG9zdC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3N0LWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICAgaDEgeyBmb250LXNpemU6IDEuNXJlbTsgfVxuICAgICAgICBoMiB7IGZvbnQtc2l6ZTogMS4zNXJlbTsgfVxuICAgICAgICBoMyB7IGZvbnQtc2l6ZTogMS4ycmVtOyB9XG4gICAgICB9XG5cbiAgICAgIC5wb3N0LWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils */ 7997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/directive/internationalization.directive */ 8955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ 4235);
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ 6171);










const _c0 = a0 => ({
  "partial": a0
});
const _c1 = a0 => ["/posts", a0];
function PostsCarouselComponent_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "meta", 23)(3, "meta", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "meta", 27)(10, "meta", 28)(11, "meta", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](17, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, post_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + post_r1.thumbnail + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, post_r1.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
  }
}
function PostsCarouselComponent_li_4_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 33)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "meta", 23)(3, "meta", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "meta", 27)(10, "meta", 28)(11, "meta", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](17, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", post_r1.http, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + post_r1.thumbnail + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, post_r1.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
  }
}
function PostsCarouselComponent_li_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "meta", 23)(3, "meta", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "meta", 27)(10, "meta", 28)(11, "meta", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](17, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + post_r1.thumbnail + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("content", post_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, post_r1.date), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", post_r1.internationalizations);
  }
}
function PostsCarouselComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PostsCarouselComponent_li_4_a_2_Template, 18, 15, "a", 18)(3, PostsCarouselComponent_li_4_a_3_Template, 18, 13, "a", 19)(4, PostsCarouselComponent_li_4_div_4_Template, 18, 12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", post_r1.markdownFile && post_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", post_r1.http && !post_r1.markdownFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !post_r1.markdownFile && !post_r1.http);
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
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc posts
           */
          const MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_3 = goog.getMsg("Read more");
          i18n_3 = MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_3;
        } else {
          i18n_3 = "Lire la suite";
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @desc posts
           */
          const MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_4 = goog.getMsg("Read more");
          i18n_4 = MSG_EXTERNAL_readMore$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS_4;
        } else {
          i18n_4 = "Lire la suite";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, ["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"], ["itemprop", "publisher", "content", "Mohamed ali boudich"], ["itemprop", "author", "content", "Mohamed ali boudich"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card"], ["itemprop", "url", 3, "routerLink", 4, "ngIf"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href", 4, "ngIf"], [4, "ngIf"], ["itemprop", "url", 3, "routerLink"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "author", "content", "Mohamed Ali Boudich"], ["itemprop", "creator", "content", "Mohamed Ali Boudich"], ["itemprop", "publisher", "content", "Mohamed Ali Boudich"], ["internationalization", "", "property", "title", "itemprop", "name", "itemprop", "headline", 1, "title", 3, "data"], ["internationalization", "", "property", "description", "ellipsis", "275", "itemprop", "description", 1, "description", 3, "data"], [1, "read-more"], ["rel", "nofollow", "target", "_blank", "itemprop", "url", 3, "href"]];
      },
      template: function PostsCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "meta", 6)(2, "meta", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ol", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PostsCarouselComponent_li_4_Template, 5, 4, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 10)(6, "span", 11)(7, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 15);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_1__.InternationalizationDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_2__.SafariDateFormatterPipe, _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalizedDatePipe],
      styles: [".events-content[_ngcontent-%COMP%] {\n  flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid rgba(200, 202, 213, 0.2784313725);\n  transition: all 0.2s ease-in-out;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 170px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 245px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUNZO0VBQ0ksZUFBQTtBQUNoQjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7QUFEWjtBQUdZO0VBQ0kscUJBQUE7QUFEaEI7QUFJWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQUZoQjtBQUlnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRnBCO0FBTVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFNZ0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSnBCO0FBT2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMcEI7QUFTWTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFQaEI7QUFTZ0I7RUFDSSx5QkFBQTtBQVBwQjtBQVdZO0VBQ0ksdUJBQUE7QUFUaEI7QUFZUTtFQUNJLHNCQUFBO0FBVlo7QUFZWTtFQUNJLGdCQUFBO0FBVmhCO0FBZUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWJSO0FBZVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFiWjtBQWdCUTtFQUNJLGdCQUFBO0FBZFo7QUFpQlE7RUFDSSx5QkFBQTtBQWZaIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cy1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuXG4gICAgb2wge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2FkNTQ3O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0NXB4O1xuXG4gICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU2Nzg4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ucmVhZC1tb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q0ODcwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYucGFydGlhbCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0b3Ige1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICMyMjJmNWM7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxtQkFBQTtFQUFOO0FBQ0Y7QUFHQTtFQVFnQjtJQUNJLGFBQUE7RUFSbEI7RUFXYztJQUNJLGNBQUE7RUFUbEI7RUFXa0I7SUFDSSxlQUFBO0VBVHRCO0VBWWtCO0lBQ0ksZUFBQTtFQVZ0QjtFQWFrQjtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQVh0QjtBQUNGO0FBa0JBO0VBUWdCO0lBQ0ksYUFBQTtFQXZCbEI7RUE0QmtCO0lBQ0ksZUFBQTtFQTFCdEI7RUE2QmtCO0lBQ0ksZUFBQTtFQTNCdEI7RUFvQ2M7SUFDSSxhQUFBO0VBbENsQjtBQUNGO0FBd0NBO0VBSVE7SUFDSSxrQkFBQTtFQXpDVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG4gICAgXG4gICAgICAgIG9sIHtcbiAgICBcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICBcbiAgICAgICAgICAgICAgICAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaDIudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZWFkLW1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgb2wge1xuICAgIFxuICAgICAgICAgICAgLmNhcmQge1xuICAgIFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdpbmF0b3Ige1xuXG4gICAgICAgICAgICAucmFuZ2Uge1xuICAgICAgICAgICAgICAgIC5zdGFydCwgLmRldmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5ldmVudHMtY29udGVudCB7XG5cbiAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)("fadeInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)("void", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)("void <=> *", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(300))])]
      }
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(25)], PostsCarouselComponent.prototype, "onResize", null);

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
      styles: ["#posts[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  justify-content: center;\n  background-color: #fbfafa;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-posts-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURSO0FBR1E7RUFDSSxZQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUlZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBRmhCO0FBS1k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFIaEI7QUFLZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSHBCO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBUVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5wQjtBQVFnQjtFQUNJLDJCQUFBO0FBTnBCO0FBVVk7RUFDSSxZQUFBO0FBUmhCO0FBYUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFYUjtBQWFRO0VBQ0ksV0FBQTtBQVhaIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3RzIHtcbiAgICB0b3A6IC00ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZmE7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODV2dztcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzIyMmY1YztcbiAgICB9XG5cbiAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzVlNjc4ODtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgXG4gICAgLnRvcC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJldmlvdXMge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjsgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtOyAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgYXBwLXBvc3RzLWNhcm91c2VsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxlQUFBO0VBRlY7RUFLTTtJQUNJLGVBQUE7RUFIVjtFQVFVO0lBQ0ksZUFBQTtFQU5kO0FBQ0Y7QUFXQTtFQUlRO0lBQ0ksZUFBQTtFQVpWO0VBZU07SUFDSSxlQUFBO0VBYlY7RUFrQlU7SUFDSSxlQUFBO0VBaEJkO0VBa0JjO0lBQ0ksV0FBQTtFQWhCbEI7RUFxQk07SUFDSSxtQkFBQTtFQW5CVjtBQUNGO0FBdUJBO0VBSVE7SUFDSSxnQkFBQTtFQXhCVjtFQTJCTTtJQUNJLGFBQUE7RUF6QlY7RUE4QlU7SUFDSSxlQUFBO0VBNUJkO0VBOEJjO0lBQ0ksV0FBQTtFQTVCbEI7RUErQmM7SUFDSSxhQUFBO0VBN0JsQjtFQWdDYztJQUNJLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBOUJsQjtFQWdDa0I7SUFDSSxlQUFBO0VBOUJ0QjtFQWlDa0I7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQS9CdEI7QUFDRjtBQXNDQTtFQUVJO0lBQ0ksYUFBQTtFQXJDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcblxuICAgIC5jb250YWluZXIge1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwLnN5bm9wc2lzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcC5zeW5vcHNpcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuY29udGFpbmVyIHtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNjVlbSAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHAuc3lub3BzaXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcbiAgICBcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubW9sZGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRjNzM7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHggNXB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuXG4gICAgLmNvbnRhaW5lciBwLnN5bm9wc2lzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component */ 6824);
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ 5310);
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail/post-detail.component */ 4296);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ 8423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









class PostsModule {
  static {
    this.ɵfac = function PostsModule_Factory(t) {
      return new (t || PostsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PostsModule, {
    declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent, _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_1__.PostsCarouselComponent, _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__.PostDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent, _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__.PostDetailComponent]
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
      styles: ["app-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    z-index: 1001;\n    width: 100%;\n    padding: 1em 0;\n    transition: 0.3s;\n}\n\n.sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: #fff;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.43);\n}\n\napp-footer[_ngcontent-%COMP%] {\n    position: relative;\n    top: -3em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQzKTtcbn1cblxuYXBwLWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "@media screen and (max-width: 1024px) {\n\n    app-header[_ngcontent-%COMP%] { padding: 0; }\n\n    .sticky[_ngcontent-%COMP%] {\n        background-color: transparent;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIGFwcC1oZWFkZXIgeyBwYWRkaW5nOiAwOyB9XG5cbiAgICAuc3RpY2t5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase-client.service */ 8548);




class ContactService {
  constructor(supabaseClientService) {
    this.supabaseClientService = supabaseClientService;
  }
  get supabase() {
    return this.supabaseClientService.client;
  }
  // Ajouter un nouveau contact
  addContact(contact) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this.supabase.from('contacts').insert([{
          name: contact.name,
          email: contact.email,
          message: contact.message,
          subject: contact.subject || '',
          date: contact.date ? new Date(contact.date).toISOString() : new Date().toISOString(),
          read: false
        }]).select();
        if (error) {
          throw error;
        }
        return data?.[0]?.id || '';
      } catch (error) {
        console.error("Erreur lors de l'ajout du contact:", error);
        throw error;
      }
    })();
  }
  // Récupérer tous les contacts
  getContacts() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.supabase.from('contacts').select('*').order('date', {
      ascending: false
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.error) {
        console.error("Erreur lors de la récupération des contacts:", response.error);
        return [];
      }
      return (response.data || []).map(item => ({
        id: item.id,
        name: item.name,
        email: item.email,
        subject: item.subject || '',
        message: item.message,
        date: new Date(item.date)
      }));
    }));
  }
  // Supprimer un contact
  deleteContact(id) {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          error
        } = yield _this2.supabase.from('contacts').delete().eq('id', id);
        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du contact:", error);
        throw error;
      }
    })();
  }
  // Mettre à jour un contact
  updateContact(id, contact) {
    var _this3 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const updateData = {};
        if (contact.name) updateData.name = contact.name;
        if (contact.email) updateData.email = contact.email;
        if (contact.subject) updateData.subject = contact.subject;
        if (contact.message) updateData.message = contact.message;
        if (contact.date) updateData.date = new Date(contact.date).toISOString();
        const {
          error
        } = yield _this3.supabase.from('contacts').update(updateData).eq('id', id);
        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour du contact:", error);
        throw error;
      }
    })();
  }
  static {
    this.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseClientService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7989:
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsService: () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase-client.service */ 8548);
/* harmony import */ var _supabase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supabase-storage.service */ 3520);





class PostsService {
  constructor(supabaseClientService, storageService) {
    this.supabaseClientService = supabaseClientService;
    this.storageService = storageService;
  }
  get supabase() {
    return this.supabaseClientService.client;
  }
  // Récupérer tous les posts avec leurs internationalisations
  getPosts() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.from('posts').select(`
          *,
          post_internationalizations (*)
        `).order('order_index', {
      ascending: false
    }).order('date', {
      ascending: false
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.error) {
        console.error("Erreur lors de la récupération des posts:", response.error);
        return [];
      }
      const posts = response.data || [];
      return posts.map(post => {
        const internationalizations = (post.post_internationalizations || []).map(intl => ({
          language: intl.language,
          title: intl.title,
          description: intl.description
        }));
        return {
          id: post.id,
          thumbnail: post.thumbnail,
          http: post.http || undefined,
          markdownFile: post.markdown_file || undefined,
          date: post.date,
          internationalizations: internationalizations
        };
      });
    }));
  }
  // Récupérer un post par ID
  getPostById(id) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this.supabase.from('posts').select(`
          *,
          post_internationalizations (*)
        `).eq('id', id).single();
        if (error) {
          console.error("Erreur lors de la récupération du post:", error);
          return null;
        }
        if (!data) return null;
        const post = data;
        const internationalizations = (post.post_internationalizations || []).map(intl => ({
          language: intl.language,
          title: intl.title,
          description: intl.description
        }));
        return {
          id: post.id,
          thumbnail: post.thumbnail,
          http: post.http || undefined,
          markdownFile: post.markdown_file || undefined,
          date: post.date,
          internationalizations: internationalizations
        };
      } catch (error) {
        console.error("Erreur lors de la récupération du post:", error);
        return null;
      }
    })();
  }
  /**
   * Récupère le contenu markdown d'un post depuis Supabase Storage
   * @param markdownFile Chemin du fichier markdown dans le storage
   * @returns Promise<string> Contenu markdown du fichier
   */
  getPostMarkdownContent(markdownFile) {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!markdownFile) {
        throw new Error('Le chemin du fichier markdown est requis');
      }
      try {
        console.log(`[PostsService] Récupération du contenu markdown pour: ${markdownFile}`);
        const content = yield _this2.storageService.downloadMarkdownFile(markdownFile);
        return content;
      } catch (error) {
        console.error('[PostsService] Erreur lors de la récupération du contenu markdown:', {
          error,
          markdownFile,
          errorMessage: error?.message || 'Erreur inconnue',
          errorName: error?.name || 'UnknownError'
        });
        // Propager l'erreur avec plus de contexte
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error(`Erreur lors de la récupération du contenu markdown: ${String(error)}`);
        }
      }
    })();
  }
  static {
    this.ɵfac = function PostsService_Factory(t) {
      return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_supabase_storage_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseStorageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: PostsService,
      factory: PostsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 366:
/*!*****************************************!*\
  !*** ./src/app/services/pwa.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PwaService: () => (/* binding */ PwaService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PwaService {
  constructor() {
    this.deferredPromptSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.deferredPrompt$ = this.deferredPromptSubject.asObservable();
    this.isInstalledSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isInstalled$ = this.isInstalledSubject.asObservable();
    this.checkIfInstalled();
    this.setupBeforeInstallPrompt();
    this.setupAppInstalled();
  }
  setupBeforeInstallPrompt() {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      const promptEvent = event;
      this.deferredPromptSubject.next(promptEvent);
      console.log('Prompt d\'installation disponible');
    });
  }
  setupAppInstalled() {
    window.addEventListener('appinstalled', () => {
      console.log('Application installée avec succès');
      this.isInstalledSubject.next(true);
      this.deferredPromptSubject.next(null);
    });
  }
  checkIfInstalled() {
    // Vérifier si l'app est en mode standalone (installée)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalledSubject.next(true);
      console.log('Application déjà installée');
      return;
    }
    // Vérifier sur iOS
    if (window.navigator.standalone === true) {
      this.isInstalledSubject.next(true);
      console.log('Application iOS déjà installée');
      return;
    }
    this.isInstalledSubject.next(false);
  }
  installApp() {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const deferredPrompt = _this.deferredPromptSubject.value;
      if (!deferredPrompt) {
        _this.showInstallInstructions();
        return false;
      }
      try {
        // Afficher le prompt d'installation
        yield deferredPrompt.prompt();
        // Attendre la réponse de l'utilisateur
        const {
          outcome
        } = yield deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('Utilisateur a accepté l\'installation');
          _this.deferredPromptSubject.next(null);
          return true;
        } else {
          console.log('Utilisateur a refusé l\'installation');
          return false;
        }
      } catch (error) {
        console.error('Erreur lors de l\'installation:', error);
        _this.showInstallInstructions();
        return false;
      }
    })();
  }
  showInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    let message = '';
    if (isIOS) {
      message = 'Pour installer cette application sur iOS:\n\n' + '1. Appuyez sur le bouton de partage (□↑) en bas de l\'écran\n' + '2. Faites défiler et sélectionnez "Sur l\'écran d\'accueil"\n' + '3. Appuyez sur "Ajouter"';
    } else if (isAndroid) {
      message = 'Pour installer cette application sur Android:\n\n' + '1. Ouvrez le menu (⋮) en haut à droite du navigateur\n' + '2. Sélectionnez "Ajouter à l\'écran d\'accueil" ou "Installer l\'application"\n' + '3. Confirmez l\'installation';
    } else {
      message = 'Pour installer cette application:\n\n' + '1. Recherchez l\'icône d\'installation (➕) dans la barre d\'adresse\n' + '2. Cliquez sur "Installer"';
    }
    alert(message);
  }
  get canInstall() {
    return this.deferredPromptSubject.value !== null && !this.isInstalledSubject.value;
  }
  static {
    this.ɵfac = function PwaService_Factory(t) {
      return new (t || PwaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PwaService,
      factory: PwaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8548:
/*!*****************************************************!*\
  !*** ./src/app/services/supabase-client.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseClientService: () => (/* binding */ SupabaseClientService)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ 7785);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class SupabaseClientService {
  constructor() {
    this._supabase = null;
  }
  get client() {
    if (!this._supabase) {
      // Configuration pour éviter les conflits de verrous Navigator
      const options = {
        auth: {
          storage: typeof window !== 'undefined' ? {
            getItem: key => {
              try {
                return window.localStorage.getItem(key);
              } catch (e) {
                return null;
              }
            },
            setItem: (key, value) => {
              try {
                window.localStorage.setItem(key, value);
              } catch (e) {
                // Ignore storage errors
              }
            },
            removeItem: key => {
              try {
                window.localStorage.removeItem(key);
              } catch (e) {
                // Ignore storage errors
              }
            }
          } : undefined,
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false,
          flowType: 'pkce'
        },
        global: {
          headers: {}
        },
        db: {
          schema: 'public'
        }
      };
      this._supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.supabaseUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.supabaseKey, options);
    }
    return this._supabase;
  }
  static {
    this.ɵfac = function SupabaseClientService_Factory(t) {
      return new (t || SupabaseClientService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SupabaseClientService,
      factory: SupabaseClientService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3520:
/*!******************************************************!*\
  !*** ./src/app/services/supabase-storage.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseStorageService: () => (/* binding */ SupabaseStorageService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase-client.service */ 8548);



class SupabaseStorageService {
  constructor(supabaseClientService) {
    this.supabaseClientService = supabaseClientService;
    this.BUCKET_NAME = 'posts-content';
  }
  get supabase() {
    return this.supabaseClientService.client;
  }
  /**
   * Télécharge un fichier markdown depuis Supabase Storage
   * @param filePath Chemin du fichier dans le bucket (ex: "post-uuid-123.md")
   * @returns Promise<string> Contenu du fichier markdown
   */
  downloadMarkdownFile(filePath) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Normaliser le chemin du fichier
        // Le filePath peut être :
        // - Juste le nom du fichier : "post-123.md"
        // - Chemin avec dossier : "posts-content/post-123.md" ou "folder/post-123.md"
        // - Chemin complet avec bucket : "posts-content/post-123.md"
        let fileName = filePath;
        // Si le chemin contient le nom du bucket, l'enlever
        if (filePath.startsWith(`${_this.BUCKET_NAME}/`)) {
          fileName = filePath.replace(`${_this.BUCKET_NAME}/`, '');
        }
        // Extraire le nom du fichier si c'est un chemin avec dossier
        if (fileName.includes('/')) {
          fileName = fileName.split('/').pop() || fileName;
        }
        console.log(`[SupabaseStorage] Tentative de téléchargement: bucket="${_this.BUCKET_NAME}", file="${fileName}"`);
        // Télécharger directement le fichier
        // Note: On ne vérifie pas l'existence du bucket/fichier car listBuckets() et list() 
        // nécessitent des permissions élevées. La méthode download() retournera 
        // une erreur claire si le bucket ou le fichier n'existe pas.
        const {
          data,
          error
        } = yield _this.supabase.storage.from(_this.BUCKET_NAME).download(fileName);
        if (error) {
          console.error('[SupabaseStorage] Erreur lors du téléchargement:', {
            error,
            errorMessage: error.message,
            errorName: error.name,
            errorStatus: error.statusCode,
            bucket: _this.BUCKET_NAME,
            fileName: fileName,
            originalPath: filePath
          });
          // Fournir un message d'erreur plus détaillé selon le type d'erreur
          let errorDetails = error.message || 'Erreur inconnue';
          // Gérer les erreurs spécifiques de Supabase Storage
          if (error.name === 'StorageUnknownError' || error.statusCode === 400) {
            errorDetails = `Le bucket "${_this.BUCKET_NAME}" ou le fichier "${fileName}" n'existe pas, ou le bucket n'est pas public. Vérifiez que :
- Le bucket "${_this.BUCKET_NAME}" existe dans Supabase Storage
- Le bucket est configuré comme "public" dans les paramètres
- Le fichier "${fileName}" existe dans le bucket
- Le nom du fichier correspond exactement (sensible à la casse)`;
          } else if (error.statusCode === 403 || error.statusCode === 401) {
            errorDetails = `Accès refusé. Vérifiez que le bucket "${_this.BUCKET_NAME}" est public et que les permissions sont correctement configurées.`;
          } else if (error.statusCode === 404) {
            errorDetails = `Le fichier "${fileName}" n'existe pas dans le bucket "${_this.BUCKET_NAME}".`;
          }
          throw new Error(`Impossible de télécharger le fichier "${fileName}": ${errorDetails}`);
        }
        if (!data) {
          throw new Error(`Le fichier "${fileName}" est vide ou introuvable`);
        }
        // Convertir le Blob en texte
        const text = yield data.text();
        console.log(`[SupabaseStorage] Fichier "${fileName}" téléchargé avec succès (${text.length} caractères)`);
        return text;
      } catch (error) {
        console.error('[SupabaseStorage] Erreur dans downloadMarkdownFile:', {
          error,
          filePath,
          bucket: _this.BUCKET_NAME,
          errorType: error instanceof Error ? error.constructor.name : typeof error,
          errorMessage: error instanceof Error ? error.message : String(error)
        });
        throw error;
      }
    })();
  }
  /**
   * Obtient l'URL publique d'un fichier dans le bucket
   * @param filePath Chemin du fichier
   * @returns URL publique du fichier
   */
  getPublicUrl(filePath) {
    const fileName = filePath.includes('/') ? filePath.split('/').pop() || filePath : filePath;
    const {
      data
    } = this.supabase.storage.from(this.BUCKET_NAME).getPublicUrl(fileName);
    return data.publicUrl;
  }
  /**
   * Vérifie si un fichier existe dans le bucket
   * @param filePath Chemin du fichier
   * @returns Promise<boolean> True si le fichier existe
   */
  fileExists(filePath) {
    var _this2 = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fileName = filePath.includes('/') ? filePath.split('/').pop() || filePath : filePath;
        const {
          data,
          error
        } = yield _this2.supabase.storage.from(_this2.BUCKET_NAME).list('', {
          search: fileName
        });
        if (error) {
          console.error('Erreur lors de la vérification du fichier:', error);
          return false;
        }
        return data && data.length > 0 && data.some(file => file.name === fileName);
      } catch (error) {
        console.error('Erreur dans fileExists:', error);
        return false;
      }
    })();
  }
  static {
    this.ɵfac = function SupabaseStorageService_Factory(t) {
      return new (t || SupabaseStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseClientService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SupabaseStorageService,
      factory: SupabaseStorageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9692:
/*!**********************************************!*\
  !*** ./src/app/services/supabase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseService: () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase-client.service */ 8548);



class SupabaseService {
  constructor(supabaseClientService) {
    this.supabaseClientService = supabaseClientService;
  }
  get supabase() {
    return this.supabaseClientService.client;
  }
  // Méthode pour envoyer un message de contact
  sendContactMessage(name, email, message) {
    var _this = this;
    return (0,_home_runner_work_live_resume_live_resume_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this.supabase.from('contacts').insert([{
          name: name,
          email: email,
          message: message,
          date: new Date().toISOString(),
          read: false
        }]).select();
        if (error) {
          console.error("Erreur lors de l'envoi du message:", error);
          return {
            success: false,
            error: error
          };
        }
        return {
          success: true,
          id: data?.[0]?.id
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
        const {
          data,
          error
        } = yield _this2.supabase.from('contacts').select('email').eq('email', email).limit(1);
        if (error) {
          console.error("Erreur lors de la vérification de l'email:", error);
          return false;
        }
        return data && data.length > 0;
      } catch (error) {
        console.error("Erreur lors de la vérification de l'email:", error);
        return false;
      }
    })();
  }
  static {
    this.ɵfac = function SupabaseService_Factory(t) {
      return new (t || SupabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_supabase_client_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseClientService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SupabaseService,
      factory: SupabaseService.ɵfac,
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
      styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 5px;\n  z-index: 0;\n}\n.skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n  width: 535px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  animation-name: _ngcontent-%COMP%_floating-icons;\n  -webkit-animation-name: _ngcontent-%COMP%_floating-icons;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-duration: 4s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%]:nth-child(2n+3) {\n  animation-duration: 5s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n  top: 385px;\n  left: -35px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n  top: 300px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n  top: 205px;\n  left: -85px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n  top: 120px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n  top: 40px;\n  left: -20px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n  top: -20px;\n  right: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n  bottom: 110px;\n  right: -30px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n  bottom: 40px;\n  right: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0gsVUFBQTtBQUNEO0FBQ0M7RUFDQyxZQUFBO0FBQ0Y7QUFFQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0FBRkY7QUFLRTtFQUNDLHNCQUFBO0FBSEg7QUFPRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBTEg7QUFRRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBTkg7QUFTRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBUEg7QUFVRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBUkg7QUFXRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0FBVEg7QUFZRTtFQUNDLFVBQUE7RUFDQSxVQUFBO0FBVkg7QUFhRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBWEg7QUFjRTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FBWkg7QUFlRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBYkg7O0FBa0JBO0VBQ0M7SUFBSyw0QkFBQTtFQWRKO0VBZUQ7SUFBTSw2QkFBQTtFQVpMO0VBYUQ7SUFBTSw2QkFBQTtFQVZMO0VBV0Q7SUFBTSw2QkFBQTtFQVJMO0VBU0Q7SUFBTyw0QkFBQTtFQU5OO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiA1cHg7XG5cdHotaW5kZXg6IDA7XG5cdFxuXHRpbWcuYmFja2dyb3VuZCB7XG5cdFx0d2lkdGg6IDUzNXB4O1xuXHR9XG5cblx0LnNraWxsLWljb24ge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogNTBweDtcblxuXHRcdC8vIERlZmluZSB0aGUgYW5pbWF0aW9ucyBmb3IgdGhlIGljb25zXG5cdFx0YW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nLWljb25zO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nLWljb25zO1xuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDRzO1xuXG5cdFx0Ly8gT2RkIGljb25zIGhhdmUgZGlmZmVyZW50IGFuaW1hdGlvbiBmcmFtZS5cblx0XHQmOm50aC1jaGlsZCgybiszKSB7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDVzO1xuXHRcdH1cblxuXHRcdC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmdcblx0XHQmLmZpcnN0IHtcblx0XHRcdHRvcDogMzg1cHg7XG5cdFx0XHRsZWZ0OiAtMzVweDtcblx0XHR9XG5cblx0XHQmLnNlY29uZCB7XG5cdFx0XHR0b3A6IDMwMHB4O1xuXHRcdFx0bGVmdDogLTY1cHg7XG5cdFx0fVxuXG5cdFx0Ji50aGlyZCB7XG5cdFx0XHR0b3A6IDIwNXB4O1xuXHRcdFx0bGVmdDogLTg1cHg7XG5cdFx0fVxuXG5cdFx0Ji5mb3VydGgge1xuXHRcdFx0dG9wOiAxMjBweDtcblx0XHRcdGxlZnQ6IC02NXB4O1xuXHRcdH1cblxuXHRcdCYuZmlmdGgge1xuXHRcdFx0dG9wOiA0MHB4O1xuXHRcdFx0bGVmdDogLTIwcHg7XG5cdFx0fVxuXG5cdFx0Ji5zaXh0aCB7XG5cdFx0XHR0b3A6IC0yMHB4O1xuXHRcdFx0bGVmdDogNTBweDtcblx0XHR9XG5cblx0XHQmLnNldmVudGgge1xuXHRcdFx0dG9wOiAtMjBweDtcblx0XHRcdHJpZ2h0OiA1MHB4O1xuXHRcdH1cblxuXHRcdCYuZWlnaHRoIHtcblx0XHRcdGJvdHRvbTogMTEwcHg7XG5cdFx0XHRyaWdodDogLTMwcHg7XG5cdFx0fVxuXG5cdFx0Ji5uaW50aCB7XG5cdFx0XHRib3R0b206IDQwcHg7XG5cdFx0XHRyaWdodDogMTBweDtcblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1pY29ucyB7XG5cdDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTsgfVxuXHQyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTUlKTsgfVx0XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwJSwgNSUpOyB9XHRcblx0NzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDE1JSk7IH1cdFxuXHQxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTsgfVx0XHRcdFxufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 140px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 310px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 250px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 175px;\n    left: -60px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 100px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -10px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -20px;\n    right: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 80px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 220px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 170px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 60px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -30px;\n    left: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -30px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 45px;\n    right: -15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 165px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 130px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 90px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 50px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: -5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 50px;\n    right: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 22px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 135px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 105px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 70px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 35px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: -3px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 40px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 70px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -10px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 55px;\n    right: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: -10px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 110px;\n    left: -13px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 35px;\n    right: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvd2VsY29tZS1iYWNrZ3JvdW5kLnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLFVBQUE7RUFBTjtFQUVNO0lBQ0ksWUFBQTtFQUFWO0VBR007SUFDSSxXQUFBO0VBRFY7RUFJVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRmQ7RUFLVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBSGQ7RUFNVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBSmQ7RUFPVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBTGQ7RUFRVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBTmQ7RUFTVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBUGQ7RUFVVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBUmQ7RUFXVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBVGQ7RUFZVTtJQUNJLFlBQUE7SUFDQSxRQUFBO0VBVmQ7QUFDRjtBQWVBO0VBSVE7SUFDSSxZQUFBO0VBaEJWO0VBbUJNO0lBQ0ksV0FBQTtFQWpCVjtFQW9CVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbEJkO0VBcUJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFuQmQ7RUFzQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQXBCZDtFQXVCVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBckJkO0VBd0JVO0lBQ0ksU0FBQTtJQUNBLE9BQUE7RUF0QmQ7RUF5QlU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXZCZDtFQTBCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBeEJkO0VBMkJVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF6QmQ7RUE0QlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTFCZDtBQUNGO0FBK0JBO0VBSVE7SUFDSSxZQUFBO0VBaENWO0VBbUNNO0lBQ0ksV0FBQTtFQWpDVjtFQW9DVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBbENkO0VBcUNVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFuQ2Q7RUFzQ1U7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQXBDZDtFQXVDVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBckNkO0VBd0NVO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUF0Q2Q7RUF5Q1U7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXZDZDtFQTBDVTtJQUNJLE1BQUE7SUFDQSxRQUFBO0VBeENkO0VBMkNVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF6Q2Q7RUE0Q1U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQTFDZDtBQUNGO0FBK0NBO0VBRUk7SUFDSSxVQUFBO0VBOUNOO0VBZ0RNO0lBQ0ksWUFBQTtFQTlDVjtFQWlETTtJQUNJLFdBQUE7RUEvQ1Y7RUFrRFU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQWhEZDtFQW1EVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBakRkO0VBb0RVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFsRGQ7RUFxRFU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQW5EZDtFQXNEVTtJQUNJLFFBQUE7SUFDQSxVQUFBO0VBcERkO0VBdURVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUFyRGQ7RUF3RFU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQXREZDtFQXlEVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBdkRkO0VBMERVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUF4RGQ7QUFDRjtBQTZEQTtFQUVJO0lBQ0ksU0FBQTtFQTVETjtFQThETTtJQUNJLFlBQUE7RUE1RFY7RUErRE07SUFDSSxXQUFBO0VBN0RWO0VBZ0VVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUE5RGQ7RUFpRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQS9EZDtFQWtFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBaEVkO0VBbUVVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUFqRWQ7RUFvRVU7SUFDSSxRQUFBO0lBQ0EsT0FBQTtFQWxFZDtFQXFFVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBbkVkO0VBc0VVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFwRWQ7RUF1RVU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQXJFZDtFQXdFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VBdEVkO0FBQ0Y7QUEyRUE7RUFFSTtJQUNJLFNBQUE7RUExRU47RUE0RU07SUFDSSxZQUFBO0VBMUVWO0VBNkVNO0lBQ0ksV0FBQTtFQTNFVjtFQThFVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBNUVkO0VBK0VVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUE3RWQ7RUFnRlU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQTlFZDtFQWlGVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBL0VkO0VBa0ZVO0lBQ0ksUUFBQTtJQUNBLE9BQUE7RUFoRmQ7RUFtRlU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQWpGZDtFQW9GVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VBbEZkO0VBcUZVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFuRmQ7RUFzRlU7SUFDSSxZQUFBO0lBQ0EsUUFBQTtFQXBGZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiAxNDBweDtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMzkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMzEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDE3NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcblxuICAgIC5za2lsbHMge1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTE1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5laWdodGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogODVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDVweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cbiAgICAuc2tpbGxzIHtcblxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGwtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjdweDtcblxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgICAgIHRvcDogMTY1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNpeHRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDEwMHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIHRvcDogMTA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5mb3VydGgge1xuICAgICAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5maWZ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNldmVudGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5za2lsbHMge1xuICAgICAgICB0b3A6IDcwcHg7XG5cbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xuICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG5cbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgICB0b3A6IDExNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA4NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRoaXJkIHtcbiAgICAgICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm91cnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2l4dGgge1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZXZlbnRoIHtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1NXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uaW50aCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiBcbiAgICAuc2tpbGxzIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5za2lsbC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgJi5maXJzdCB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgdG9wOiA4NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYudGhpcmQge1xuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuZmlmdGgge1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5zaXh0aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuZWlnaHRoIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYubmludGgge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n\tz-index: 2;\n\tmargin-top: 5em;\n\tanimation: _ngcontent-%COMP%_float-dialog 6s ease-in-out infinite;\n}\n\n.dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 580px;\n    margin-left: -7em;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n\tposition: absolute;\n    top: 7em;\n    left: -5px;\n    width: 380px;\n\ttext-align: center;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tmargin: 0;\n    padding: 0;\n    text-align: center;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n\tfont-size: 60px;\n    font-weight: 600;\n    color: #222f5c;\n}\n\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n\tfont-size: 40px;\n    color: #576183;\n\tfont-weight: 600;\n\tmargin-top: 10px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_float-dialog {\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(-20px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsK0NBQStDO0FBQ2hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7SUFDTixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGNBQWM7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQSwrQkFBK0I7QUFDL0I7Q0FDQztFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQywwQkFBMEI7Q0FDM0I7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogRGlhbG9nIGNvbnRhaW5lciAqL1xuLmRpYWxvZy1jb250YWluZXIge1xuXHR6LWluZGV4OiAyO1xuXHRtYXJnaW4tdG9wOiA1ZW07XG5cdGFuaW1hdGlvbjogZmxvYXQtZGlhbG9nIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA1ODBweDtcbiAgICBtYXJnaW4tbGVmdDogLTdlbTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3ZW07XG4gICAgbGVmdDogLTVweDtcbiAgICB3aWR0aDogMzgwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgcCB7XG5cdG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcblx0Zm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyMjJmNWM7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcblx0Zm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjNTc2MTgzO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4vKiBEaWFsb2cgY29udGFpbmVyIGFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBmbG9hdC1kaWFsb2cge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "@media screen and (max-width: 1024px) {\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 435px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 6em;\n        width: 280px;\n        left: -2em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 25px;\n    }\n\n}\n\n@media screen and (max-width: 880px) {\n    \n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 325px;\n        margin-left: -5em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n        left: -1em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 310px;\n        margin-left: -4em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 4em;\n        width: 210px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n        \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 2em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 220px;\n        margin-left: -3em;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 40px;\n        width: 130px;\n        left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n         \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 11px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n\n@media screen and (max-width: 320px) {\n       \n    .dialog-container[_ngcontent-%COMP%] {\n        margin-top: 3em;\n        margin-left: 0;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 160px;\n        margin-left: -45px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\n        top: 30px;\n        width: 120px;\n        left: -25px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 15px;\n        display: inline-block;\n        margin-top: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogNDM1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDZlbTtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBsZWZ0OiAtMmVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiA0ZW07XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbGVmdDogLTFlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTRlbTtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zZW07XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00NXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICBcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: ["#welcome[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: 780px;\n    padding-top: 5em;\n}\n\n.layer_one[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    height: 780px;\n    z-index: 1;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiI3dlbGNvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA3ODBweDtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xufVxuXG4ubGF5ZXJfb25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICBoZWlnaHQ6IDc4MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media screen and (max-width: 1024px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 585px;\n    }\n}\n\n@media screen and (max-width: 880px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 465px;\n    }\n}\n\n@media screen and (max-width: 720px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 385px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 290px;\n    } \n}\n\n@media screen and (max-width: 500px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 250px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 250px;\n    } \n}\n\n@media screen and (max-width: 320px) {\n    #welcome[_ngcontent-%COMP%] {\n        height: 220px;\n    }\n    \n    .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n        height: 220px;\n    } \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICAjd2VsY29tZSB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XG4gICAgICAgIGhlaWdodDogNDY1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICN3ZWxjb21lIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG4gICAgXG4gICAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH0gXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH0gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  supabaseUrl: "https://auoiubngdazzhyryvrzk.supabase.co",
  supabaseKey: "sb_publishable_e10A1nnnYID8s0JYvz6Z6A_IBkdGDAO"
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