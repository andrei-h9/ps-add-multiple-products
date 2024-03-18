import { displayCheckboxes } from './components/checkboxes';
import { displayAddToCartButton } from './components/add-to-cart-button';
import addCheckboxListeners from './listeners/checkbox';
import addButtonListener from './listeners/button';

displayAddToCartButton();
displayCheckboxes(); 
addCheckboxListeners();
addButtonListener();
