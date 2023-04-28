(()=>{"use strict";var t=document.querySelector(".popup_type_image"),e=(t.querySelector(".popup__image"),t.querySelector(".popup__image-name"),document.querySelector(".profile")),n=e.querySelector(".profile__title"),r=e.querySelector(".profile__subtitle"),o=e.querySelector(".profile__avatar"),i=e.querySelector(".profile__edit-avatar"),u=e.querySelector(".profile__edit-btn"),c=document.forms.editProfileForm,a=document.forms.editAvatarForm,l=c.elements.profileName,s=c.elements.profileJob,f=e.querySelector(".profile__add-btn"),p=document.forms.addCardForm;function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var v=function(){function t(e,n,r,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._ownerId=e.owner._id,this._myId=r,this._template=n,this._handleCardClick=o,this._handleButtonTrashClick=i,this._deleteLike=c,this._putLike=u,this._cardElement=this._getCardTemplate(),this._buttonTrash=this._cardElement.querySelector(".card__trash-btn"),this._cardImage=this._cardElement.querySelector(".card__image"),this._heartCount=this._cardElement.querySelector(".card__heart-count"),this._buttonLike=this._cardElement.querySelector(".card__heart-btn")}var e,n;return e=t,(n=[{key:"_isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._myId}))}},{key:"_getCardTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card").cloneNode(!0)}},{key:"_fillTemplate",value:function(){this._cardElement.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._isLiked()&&this._buttonLike.classList.add("card__heart-btn_active"),this._heartCount.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._isLiked()?t._deleteLike(t._id):t._putLike(t._id)})),this._ownerId!==this._myId?this._buttonTrash.remove():this._buttonTrash.addEventListener("click",(function(){t._handleButtonTrashClick(t._id)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"updateLikes",value:function(t){this._likes=t.likes,this._heartCount.textContent=this._likes.length,this._buttonLike.classList.toggle("card__heart-btn_active")}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"createCard",value:function(){return this._fillTemplate(),this._setEventListeners(),this._cardElement}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&document.querySelector(".popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._element.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-btn")&&t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._element.querySelector(".popup__image"),e._imageName=e._element.querySelector(".popup__image-name"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._image.src=n,this._image.alt=e,this._imageName.textContent=e,E(P(u.prototype),"open",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formElement=n._element.querySelector(".popup__form"),n._handleSubmit=e,n._inputValues={},n._inputs=Array.from(n._formElement.elements),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;this._inputs.forEach((function(e){t._inputValues[e.name]=e.value}))}},{key:"close",value:function(){T(q(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){var t=this;T(q(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._getInputValues(),t._handleSubmit(t._inputValues)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.name,r=e.job;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._titleElement=document.querySelector(n),this._subTitleElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{title:this._titleElement.textContent,subtitle:this._subTitleElement.textContent}}},{key:"setUserInfo",value:function(t,e){this._titleElement.textContent=t,this._subTitleElement.textContent=e}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonAttribute:"disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_active"},N=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorsSet=e,this._form=n,this._buttonSubmit=this._form.querySelector(this._selectorsSet.submitButtonSelector),this._inputsList=Array.from(this._form.querySelectorAll(this._selectorsSet.inputSelector))}var e,n;return e=t,(n=[{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._selectorsSet.errorClass),t.classList.remove(this._selectorsSet.inputErrorClass)}},{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));n.textContent=e,n.classList.add(this._selectorsSet.errorClass),t.classList.add(this._selectorsSet.inputErrorClass)}},{key:"_submitBtnState",value:function(){this._form.checkValidity()?this._buttonSubmit.removeAttribute(this._selectorsSet.inactiveButtonAttribute):this._buttonSubmit.setAttribute(this._selectorsSet.inactiveButtonAttribute,!0)}},{key:"_checkInputValidity",value:function(t){this._submitBtnState(),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputsList.forEach((function(e){e.addEventListener("input",(function(){return t._checkInputValidity(e)}))})),this._form.addEventListener("reset",(function(){setTimeout((function(){t._submitBtnState()})),t._inputsList.forEach((function(e){t._form.addEventListener("reset",(function(){return t._hideInputError(e)}))}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUserInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getCardsInfo",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"putLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," Я не нашел карточку ").concat(t))}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},G.apply(this,arguments)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._element.querySelector(".popup__form"),e}return e=u,(n=[{key:"setSubmit",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;G(Q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function X(t,e){var n=new v(t,"#card","2b01e36423326e5584005ba4",(function(t,e){tt.open({name:t,link:e})}),(function(t){Z.open(),Z.setSubmit((function(){et.deleteCard(t).then((function(){n.deleteCard(),Z.close()})).catch((function(t){alert(t)}))}))}),(function(t){et.putLike(t).then((function(t){n.updateLikes(t)})).catch((function(t){alert(t)}))}),(function(t){et.deleteLike(t).then((function(t){n.updateLikes(t)})).catch((function(t){alert(t)}))}));e.addItem(n.createCard())}new N(A,c).enableValidation(),new N(A,p).enableValidation(),new N(A,a).enableValidation();var Y=new R(".popup_type_edit-avatar",(function(t){console.log(t.avatarLink),Y.close()}));Y.setEventListeners();var Z=new W(".popup_type_delete");Z.setEventListeners();var $=new B({name:".profile__title",job:".profile__subtitle"}),tt=new O(".popup_type_image");tt.setEventListeners();var et=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"020a6041-0af9-4bc3-8a98-f14edb94cfd4","Content-Type":"application/json"}});et.getUserInfo().then((function(t){n.textContent=t.name,r.textContent=t.about,o.src=t.avatar})).catch((function(t){alert(t)}));var nt=new m((function(t){X(t,nt)}),".cards");et.getCardsInfo().then((function(t){nt.renderItems(t)})).catch((function(t){alert(t)}));var rt=new R(".popup_type_edit-profile",(function(t){et.editUserInfo(t.profileName,t.profileJob).then((function(t){$.setUserInfo(t.name,t.about)})).catch((function(t){alert(t)})),rt.close()}));rt.setEventListeners();var ot=new R(".popup_type_add-card",(function(t){et.addNewCard(t.cardTitle,t.cardLink).then((function(t){X(t,nt)})).catch((function(t){alert(t)})),ot.close()}));ot.setEventListeners(),i.addEventListener("click",(function(){a.reset(),Y.open()})),u.addEventListener("click",(function(){c.reset(),rt.open();var t=$.getUserInfo();l.value=t.title,s.value=t.subtitle})),f.addEventListener("click",(function(){p.reset(),ot.open()}))})();