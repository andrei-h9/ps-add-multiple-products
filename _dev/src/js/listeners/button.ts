import { getButton } from "../components/add-to-cart-button";
import { getSelectedProducts } from "../components/product";
import displayModal from "../components/modal";
import updateMinicart from "../actions/update-minicart";
import { resetCheckboxes } from "../components/checkboxes";

function addListeners() {
    getButton().addEventListener('click', async () => {
        const response = await fetch(window.addmultipleproducts.addProductsController, {
            method: 'POST',
            body: JSON.stringify(
                {
                    productIds: getSelectedProducts()
                }
            )
        });
        const result = await response.json();
        displayModal(result.message, result.success);
        if (result.success) {
            updateMinicart(result.productsCount);
            resetCheckboxes();
        }
    });
}

export default addListeners;
