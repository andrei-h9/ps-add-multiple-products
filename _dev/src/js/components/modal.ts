import createElement from "../elements/create-element";
import createDivElement from "../elements/create-div-element";
import { createToggleButton, toggleModal } from './modal-toggle';

function displayModal(label, isSuccessful) {
    const id = 'add-multiple-products-modal';
    if (document.querySelector(`#${id}`)) {
        changeModalLabel(id, label, isSuccessful);
        toggleModal(id);
        return;
    }

    const modal = createDivElement(
        {
            className: 'modal fade in',
            attributes: [
                { id },
                { tabindex: '-1' },
                { role: 'dialog' },
                { 'aria-labelledby': id + '-label' }
            ]
        }
    )
    const modalDialog = createDivElement(
        {
            className: 'modal-dialog',
            attributes: [
                { role: 'document' },
            ]
        }
    )
    const modalContent = createDivElement(
        {
            className: 'modal-content',
        }
    )
    const modalHeader = createDivElement(
        {
            className: 'modal-header',
        }
    )
    const closeButton = createElement(
        'button',
        {
            className: 'close',
            attributes: [
                { 'type': 'button' },
                { 'data-dismiss': 'modal' },
                { 'aria-label': 'Close' }

            ],
            innerHtml: '<span aria-hidden="true"><i class="material-icons">close</i></span>'
        }
    )
    const modalLabel = createDivElement(
        {
            className: 'modal-title h6 text-sm-center',
            attributes: [
                { id: id + '-label'},
            ],
            innerHtml: buildModalLabel(label, isSuccessful),
        }
    )

    modalHeader.appendChild(closeButton);
    modalHeader.appendChild(modalLabel);
    modalContent.appendChild(modalHeader);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog)
    document.body.appendChild(modal);

    createToggleButton(id);
    toggleModal(id);
}

function changeModalLabel(modalId, label, isSuccessful) {
    document.querySelector(`#${modalId} .modal-title`).innerHTML = buildModalLabel(label, isSuccessful);
}

function buildModalLabel(label, isSuccessful) {
    return isSuccessful ? `<i class="material-icons rtl-no-flip"></i> ${label}` : `<i class="material-icons" style="color: red">close</i> ${label}`;
}

export default displayModal;
