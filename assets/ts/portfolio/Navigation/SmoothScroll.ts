class SmoothScroll {
    private _links;

    public constructor(autoInit: boolean = false) {
        this._links = document.querySelectorAll('a[href^="#"]');
        if (autoInit) this.init();
    }

    public init() {
        this._links.forEach(this._applySmoothScroll);
    }

    private _applySmoothScroll(anchor) {
        anchor.addEventListener('click', function (e) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            e.preventDefault();
        });
    }
}

export {SmoothScroll};