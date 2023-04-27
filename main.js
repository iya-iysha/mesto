(()=>{"use strict";var t=document.querySelector(".popup_type_image"),e=(t.querySelector(".popup__image"),t.querySelector(".popup__image-name"),document.querySelector(".profile")),r=e.querySelector(".profile__edit-btn"),n=document.forms.editProfileForm,o=n.elements.profileName,i=n.elements.profileJob,u=e.querySelector(".profile__add-btn"),c=document.forms.addCardForm;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var s=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._link=r,this._template=n,this._handleCardClick=o,this._cardElement=this._getCardTemplate(),this._cardImage=this._cardElement.querySelector(".card__image")}var e,r;return e=t,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card").cloneNode(!0)}},{key:"_fillTemplate",value:function(){this._cardElement.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name}},{key:"_setEventListeners",value:function(){var t=this;this._cardElement.querySelector(".card__heart-btn").addEventListener("click",(function(t){return t.target.classList.toggle("card__heart-btn_active")})),this._cardElement.querySelector(".card__trash-btn").addEventListener("click",(function(){return t._cardElement.remove()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"createCard",value:function(){return this._fillTemplate(),this._setEventListeners(),this._cardElement}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&document.querySelector(".popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._element.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-btn")&&t.close()}))}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(n);if(o){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._element.querySelector(".popup__image"),e._imageName=e._element.querySelector(".popup__image-name"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;this._image.src=r,this._image.alt=e,this._imageName.textContent=e,_(g(u.prototype),"open",this).call(this)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(o){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._formElement=r._element.querySelector(".popup__form"),r._handleSubmit=e,r._inputValues={},r._inputs=Array.from(r._formElement.elements),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;this._inputs.forEach((function(e){t._inputValues[e.name]=e.value}))}},{key:"close",value:function(){k(O(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){var t=this;k(O(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._getInputValues(),t._handleSubmit(t._inputValues,e)}))}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var q=function(){function t(e){var r=e.name,n=e.job;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._titleElement=document.querySelector(r),this._subTitleElement=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{title:this._titleElement.textContent,subtitle:this._subTitleElement.textContent}}},{key:"setUserInfo",value:function(t,e){this._titleElement.textContent=t,this._subTitleElement.textContent=e}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonAttribute:"disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_active"},B=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorsSet=e,this._form=r,this._buttonSubmit=this._form.querySelector(this._selectorsSet.submitButtonSelector),this._inputsList=Array.from(this._form.querySelectorAll(this._selectorsSet.inputSelector))}var e,r;return e=t,(r=[{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._selectorsSet.errorClass),t.classList.remove(this._selectorsSet.inputErrorClass)}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));r.textContent=e,r.classList.add(this._selectorsSet.errorClass),t.classList.add(this._selectorsSet.inputErrorClass)}},{key:"_submitBtnState",value:function(){this._form.checkValidity()?this._buttonSubmit.removeAttribute(this._selectorsSet.inactiveButtonAttribute):this._buttonSubmit.setAttribute(this._selectorsSet.inactiveButtonAttribute,!0)}},{key:"_checkInputValidity",value:function(t){this._submitBtnState(),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputsList.forEach((function(e){e.addEventListener("input",(function(){return t._checkInputValidity(e)}))})),this._form.addEventListener("reset",(function(){setTimeout((function(){t._submitBtnState()})),t._inputsList.forEach((function(e){t._form.addEventListener("reset",(function(){return t._hideInputError(e)}))}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}var A=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(t){fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.json()})).then((function(e){t(e)}))}},{key:"getInitialCards",value:function(){}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"020a6041-0af9-4bc3-8a98-f14edb94cfd4","Content-Type":"application/json"}}),D=document.querySelector(".profile__title"),N=document.querySelector(".profile__subtitle"),z=document.querySelector(".profile__avatar");function F(t,e,r){var n=new y(t,e,"#card",(function(t,e){M.open({name:t,link:e})}));r.addItem(n.createCard())}A.getUserInfo((function(t){D.textContent=t.name,N.textContent=t.about,z.textContent=t.avatar})),fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards",{headers:{authorization:"020a6041-0af9-4bc3-8a98-f14edb94cfd4"}}).then((function(t){return t.json()})).then((function(t){var e=new s({items:t,renderer:function(t){F(t.name,t.link,e)}},".cards");e.renderItems()})),new B(x,n).enableValidation(),new B(x,c).enableValidation();var J=new q({name:".profile__title",job:".profile__subtitle"}),M=new w(".popup_type_image");M.setEventListeners();var G=new C(".popup_type_edit-profile",(function(t){J.setUserInfo(t.profileName,t.profileJob),G.close()}));G.setEventListeners();var H=new C(".popup_type_add-card",(function(t){F(t.cardTitle,t.cardLink,cardsContainer),H.close()}));H.setEventListeners(),r.addEventListener("click",(function(){n.reset(),G.open();var t=J.getUserInfo();o.value=t.title,i.value=t.subtitle})),u.addEventListener("click",(function(){c.reset(),H.open()}))})();