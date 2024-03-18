import { getActiveCheckboxes } from "./checkboxes";

function getProducts() {
    return document.querySelectorAll('.product-miniature .thumbnail-container');
}

function getProductsSection() {
    return document.querySelector('#products, .products');
}

function getSelectedProducts() {
    const products = [];
    for (const activeCheckbox of Array.from(getActiveCheckboxes())) {
        const product = activeCheckbox.closest('.product-miniature') as HTMLElement;
        if (product.dataset.idProduct) {
            products.push(product.dataset.idProduct);
        }
    }

    return products;
}

export {
    getProducts,
    getProductsSection,
    getSelectedProducts
}