let Cookies = require('js-cookie/src/js.cookie.js');

class GdprManager {

    _box: HTMLElement;
    _closeButton: HTMLElement;

    readonly COOKIE_NAME = 'ACCEPT_GDPR';

    /**
     *
     * @param box whole box that stores info
     * @param closeButton button to set event listener
     */
    public constructor(box: HTMLElement, closeButton: HTMLElement) {
        this._box = box;
        this._closeButton = closeButton;
        const cookieValue = Cookies.get(this.COOKIE_NAME);

        if (cookieValue) {
            // user clicked before
            this._box.remove();

        } else {
            // user did not clicked before
            this._box.classList.add('cookies-visible');
            this.handle();
        }
    }

    private handle() {
        this._closeButton.addEventListener('click', () => {
            // toggle class
            this._box.classList.add('cookies--visible');
            // add cookie
            Cookies.set(this.COOKIE_NAME, {acceptedOn: new Date()}, {expires: 7, path: ''});
            // remove after 100ms
            setTimeout(() => {
                this._box.remove();
            }, 100);
        });
    }
}

export {GdprManager};