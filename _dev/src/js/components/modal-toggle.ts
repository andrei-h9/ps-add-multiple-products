import createElement from "../elements/create-element";

function createToggleButton(targetId) {
    const button = createElement(
        'button',
        {
            attributes: [
                { 'id': `${targetId}-button` },
                { 'data-toggle': 'modal' },
                { 'data-target': `#${targetId}` },
                { 'type':'button' },
                { 'style': 'display: none' }, 
            ]
        }
    )
    document.querySelector('.button-container').appendChild(button);
}

function toggleModal(targetId) {
    const addedButton = document.querySelector(`#${targetId}-button`) as HTMLButtonElement;
    addedButton.click();
}

export {
    createToggleButton,
    toggleModal
}