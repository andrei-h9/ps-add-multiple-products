import { getProducts, getProductsSection } from "./product";
import createElement from "../elements/create-element";

function displayAddToCartButton() {
    if (getProducts().length === 0) {
        return;
    }
    
    const div = createElement('div', { className: 'button-container' });
    const button = createElement(
        'button',
        {
            className: 'btn btn-primary center-block',
            text: window.addmultipleproducts.addProductsButtonText,
            attributes: [
                 { disabled: 'disabled' }
            ]
        }
    );

    div.appendChild(button);
    getProductsSection().insertAdjacentElement('beforebegin', div);
}

function getButton() {
    return document.querySelector('.button-container button');
}

export {
     displayAddToCartButton,
     getButton
};