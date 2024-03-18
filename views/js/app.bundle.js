/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 932:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 99:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_element_1 = __importDefault(__webpack_require__(745));
function updateMinicart(quantity) {
    addActiveClass();
    var currentQuantity = document.querySelector('.cart-products-count');
    var newQuantity = Number(currentQuantity.textContent.match(/\d+/)[0]) + quantity;
    currentQuantity.textContent = "(".concat(newQuantity, ")");
    addCartLink(newQuantity);
}
exports["default"] = updateMinicart;
function addActiveClass() {
    var cartPreview = document.querySelector('.cart-preview');
    cartPreview.classList.remove('inactive');
    cartPreview.classList.add('active');
}
function addCartLink(cartItemsCount) {
    var cartPreview = document.querySelector('.cart-preview');
    if (cartPreview.querySelector('a')) {
        return;
    }
    var link = (0, create_element_1.default)('a', {
        attributes: [
            { rel: 'nofollow' },
            { 'aria-label': window.addmultipleproducts.minicartLinkLabel.replace('%d', cartItemsCount.toString()) },
            { href: window.prestashop.urls.pages.cart + '?action=show' }
        ]
    });
    var cartPreviewHeader = cartPreview.querySelector('.header');
    link.append.apply(link, Array.from(cartPreviewHeader.childNodes));
    cartPreviewHeader.append(link);
}


/***/ }),

/***/ 176:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getButton = exports.displayAddToCartButton = void 0;
var product_1 = __webpack_require__(108);
var create_element_1 = __importDefault(__webpack_require__(745));
function displayAddToCartButton() {
    if ((0, product_1.getProducts)().length === 0) {
        return;
    }
    var div = (0, create_element_1.default)('div', { className: 'button-container' });
    var button = (0, create_element_1.default)('button', {
        className: 'btn btn-primary center-block',
        text: window.addmultipleproducts.addProductsButtonText,
        attributes: [
            { disabled: 'disabled' }
        ]
    });
    div.appendChild(button);
    (0, product_1.getProductsSection)().insertAdjacentElement('beforebegin', div);
}
exports.displayAddToCartButton = displayAddToCartButton;
function getButton() {
    return document.querySelector('.button-container button');
}
exports.getButton = getButton;


/***/ }),

/***/ 898:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetCheckboxes = exports.getActiveCheckboxes = exports.getCheckboxes = exports.displayCheckboxes = void 0;
var product_1 = __webpack_require__(108);
var create_element_1 = __importDefault(__webpack_require__(745));
function displayCheckboxes() {
    var products = (0, product_1.getProducts)();
    if (products.length === 0) {
        return;
    }
    for (var _i = 0, _a = Array.from(products); _i < _a.length; _i++) {
        var product = _a[_i];
        var label = createCheckbox();
        product.appendChild(label);
    }
}
exports.displayCheckboxes = displayCheckboxes;
function createCheckbox() {
    var label = (0, create_element_1.default)('label', { className: 'checkbox-container' });
    label.appendChild((0, create_element_1.default)('input', {
        attributes: [
            { type: 'checkbox' }
        ]
    }));
    label.appendChild((0, create_element_1.default)('span', { className: 'checkmark' }));
    return label;
}
function getActiveCheckboxes() {
    return document.querySelectorAll('.checkbox-container input:checked');
}
exports.getActiveCheckboxes = getActiveCheckboxes;
function getCheckboxes() {
    return document.querySelectorAll('.checkbox-container input');
}
exports.getCheckboxes = getCheckboxes;
function resetCheckboxes() {
    for (var _i = 0, _a = Array.from(getActiveCheckboxes()); _i < _a.length; _i++) {
        var activeCheckbox = _a[_i];
        activeCheckbox.click();
    }
}
exports.resetCheckboxes = resetCheckboxes;


/***/ }),

/***/ 703:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleModal = exports.createToggleButton = void 0;
var create_element_1 = __importDefault(__webpack_require__(745));
function createToggleButton(targetId) {
    var button = (0, create_element_1.default)('button', {
        attributes: [
            { 'id': "".concat(targetId, "-button") },
            { 'data-toggle': 'modal' },
            { 'data-target': "#".concat(targetId) },
            { 'type': 'button' },
            { 'style': 'display: none' },
        ]
    });
    document.querySelector('.button-container').appendChild(button);
}
exports.createToggleButton = createToggleButton;
function toggleModal(targetId) {
    var addedButton = document.querySelector("#".concat(targetId, "-button"));
    addedButton.click();
}
exports.toggleModal = toggleModal;


/***/ }),

/***/ 278:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_element_1 = __importDefault(__webpack_require__(745));
var create_div_element_1 = __importDefault(__webpack_require__(387));
var modal_toggle_1 = __webpack_require__(703);
function displayModal(label, isSuccessful) {
    var id = 'add-multiple-products-modal';
    if (document.querySelector("#".concat(id))) {
        changeModalLabel(id, label, isSuccessful);
        (0, modal_toggle_1.toggleModal)(id);
        return;
    }
    var modal = (0, create_div_element_1.default)({
        className: 'modal fade in',
        attributes: [
            { id: id },
            { tabindex: '-1' },
            { role: 'dialog' },
            { 'aria-labelledby': id + '-label' }
        ]
    });
    var modalDialog = (0, create_div_element_1.default)({
        className: 'modal-dialog',
        attributes: [
            { role: 'document' },
        ]
    });
    var modalContent = (0, create_div_element_1.default)({
        className: 'modal-content',
    });
    var modalHeader = (0, create_div_element_1.default)({
        className: 'modal-header',
    });
    var closeButton = (0, create_element_1.default)('button', {
        className: 'close',
        attributes: [
            { 'type': 'button' },
            { 'data-dismiss': 'modal' },
            { 'aria-label': 'Close' }
        ],
        innerHtml: '<span aria-hidden="true"><i class="material-icons">close</i></span>'
    });
    var modalLabel = (0, create_div_element_1.default)({
        className: 'modal-title h6 text-sm-center',
        attributes: [
            { id: id + '-label' },
        ],
        innerHtml: buildModalLabel(label, isSuccessful),
    });
    modalHeader.appendChild(closeButton);
    modalHeader.appendChild(modalLabel);
    modalContent.appendChild(modalHeader);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
    document.body.appendChild(modal);
    (0, modal_toggle_1.createToggleButton)(id);
    (0, modal_toggle_1.toggleModal)(id);
}
function changeModalLabel(modalId, label, isSuccessful) {
    document.querySelector("#".concat(modalId, " .modal-title")).innerHTML = buildModalLabel(label, isSuccessful);
}
function buildModalLabel(label, isSuccessful) {
    return isSuccessful ? "<i class=\"material-icons rtl-no-flip\">\uE876</i> ".concat(label) : "<i class=\"material-icons\" style=\"color: red\">close</i> ".concat(label);
}
exports["default"] = displayModal;


/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSelectedProducts = exports.getProductsSection = exports.getProducts = void 0;
var checkboxes_1 = __webpack_require__(898);
function getProducts() {
    return document.querySelectorAll('.product-miniature .thumbnail-container');
}
exports.getProducts = getProducts;
function getProductsSection() {
    return document.querySelector('#products, .products');
}
exports.getProductsSection = getProductsSection;
function getSelectedProducts() {
    var products = [];
    for (var _i = 0, _a = Array.from((0, checkboxes_1.getActiveCheckboxes)()); _i < _a.length; _i++) {
        var activeCheckbox = _a[_i];
        var product = activeCheckbox.closest('.product-miniature');
        if (product.dataset.idProduct) {
            products.push(product.dataset.idProduct);
        }
    }
    return products;
}
exports.getSelectedProducts = getSelectedProducts;


/***/ }),

/***/ 387:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var create_element_1 = __importDefault(__webpack_require__(745));
function createDivElement(props) {
    return (0, create_element_1.default)('div', props);
}
exports["default"] = createDivElement;


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createElement(elementType, props) {
    var el = document.createElement(elementType);
    var className = props.className, text = props.text, innerHtml = props.innerHtml, attributes = props.attributes;
    if (className) {
        el.className = className;
    }
    if (text) {
        el.textContent = text;
    }
    if (innerHtml) {
        el.innerHTML = innerHtml;
    }
    if (attributes) {
        attributes.forEach(function (attr) {
            var name = Object.keys(attr)[0];
            var value = Object.values(attr)[0];
            el.setAttribute(name, value);
        });
    }
    return el;
}
exports["default"] = createElement;


/***/ }),

/***/ 694:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var checkboxes_1 = __webpack_require__(898);
var add_to_cart_button_1 = __webpack_require__(176);
var checkbox_1 = __importDefault(__webpack_require__(311));
var button_1 = __importDefault(__webpack_require__(710));
(0, add_to_cart_button_1.displayAddToCartButton)();
(0, checkboxes_1.displayCheckboxes)();
(0, checkbox_1.default)();
(0, button_1.default)();


/***/ }),

/***/ 710:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var add_to_cart_button_1 = __webpack_require__(176);
var product_1 = __webpack_require__(108);
var modal_1 = __importDefault(__webpack_require__(278));
var update_minicart_1 = __importDefault(__webpack_require__(99));
var checkboxes_1 = __webpack_require__(898);
function addListeners() {
    var _this = this;
    (0, add_to_cart_button_1.getButton)().addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var response, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(window.addmultipleproducts.addProductsController, {
                        method: 'POST',
                        body: JSON.stringify({
                            productIds: (0, product_1.getSelectedProducts)()
                        })
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    (0, modal_1.default)(result.message, result.success);
                    if (result.success) {
                        (0, update_minicart_1.default)(result.productsCount);
                        (0, checkboxes_1.resetCheckboxes)();
                    }
                    return [2 /*return*/];
            }
        });
    }); });
}
exports["default"] = addListeners;


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var checkboxes_1 = __webpack_require__(898);
var add_to_cart_button_1 = __webpack_require__(176);
function addListeners() {
    for (var _i = 0, _a = Array.from((0, checkboxes_1.getCheckboxes)()); _i < _a.length; _i++) {
        var checkbox = _a[_i];
        checkbox.addEventListener('click', function () {
            toggleButtonDisable();
        });
    }
}
function toggleButtonDisable() {
    if ((0, checkboxes_1.getActiveCheckboxes)().length === 0) {
        (0, add_to_cart_button_1.getButton)().setAttribute('disabled', 'disabled');
    }
    else {
        (0, add_to_cart_button_1.getButton)().removeAttribute('disabled');
    }
}
exports["default"] = addListeners;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(694);
/******/ 	var __webpack_exports__ = __webpack_require__(932);
/******/ 	
/******/ })()
;