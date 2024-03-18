import { getProducts } from "./product";
import createElement from "../elements/create-element";

function displayCheckboxes() {
    const products = getProducts();
    if (products.length === 0) {
        return;
    }

    for (let product of Array.from(products)) {
        const label = createCheckbox();
        product.appendChild(label);
    }
}

function createCheckbox() {
    const label = createElement('label', { className: 'checkbox-container' });

    label.appendChild(createElement(
            'input',
            {
                attributes: [
                    { type: 'checkbox' }
                ]
            }
        )
    );
    label.appendChild(createElement('span', { className: 'checkmark' }));

    return label;
}

function getActiveCheckboxes() {
    return document.querySelectorAll('.checkbox-container input:checked');
}

function getCheckboxes() {
    return document.querySelectorAll('.checkbox-container input');
}

function resetCheckboxes() {
    for (var activeCheckbox of Array.from(getActiveCheckboxes())) {
        (activeCheckbox as HTMLInputElement).click();
    }
}

export { 
    displayCheckboxes,
    getCheckboxes,
    getActiveCheckboxes,
    resetCheckboxes
};
