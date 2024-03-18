import { getCheckboxes, getActiveCheckboxes } from "../components/checkboxes";
import { getButton } from "../components/add-to-cart-button";

function addListeners() {
    for (let checkbox of Array.from(getCheckboxes())) {
        checkbox.addEventListener('click', () => {
            toggleButtonDisable();
        });
    }
}

function toggleButtonDisable() {
    if (getActiveCheckboxes().length === 0) {
        getButton().setAttribute('disabled', 'disabled');
    } else {
        getButton().removeAttribute('disabled');
    }
}

export default addListeners;