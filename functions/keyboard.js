// @ts-check

/**
 * @param {function} callback 
 */
export function onKeyboardPressed(callback) {
    document.addEventListener('keydown', (event) => {
        callback(event.key); // ArrowUp ArrowDown ArrowLeft ArrowRight
    }, false);
} 