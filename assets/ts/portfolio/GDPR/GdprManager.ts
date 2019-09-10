class GdprManager {

    _box: HTMLElement;
    _closeButton: HTMLElement;

    public constructor(box: HTMLElement, closeButton: HTMLElement) {
        this._box = box;
        this._closeButton = closeButton;
        this.handle();
    }

    private static removeElement(element: HTMLElement) {
        element.remove();
    }

    private handle() {
        this._closeButton.addEventListener('click', () => {
            // toggle class
            this._box.classList.add('cookies--invisible');

            // remove after 100ms
            setTimeout(() => {
                GdprManager.removeElement(this._box);
            }, 100);
        });
    }

}

export {GdprManager};