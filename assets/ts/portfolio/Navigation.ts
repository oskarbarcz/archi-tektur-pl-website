import {Openable} from './Openable';

/**
 * Handles navigation work by given elements
 */
class Navigation implements Openable {

    /** Holds button that switches menu visibility */
    private readonly _button: HTMLElement;

    /** Holds nav links that have to be displayed or not */
    private readonly _links: HTMLElement;

    /** CSS class name for changing visibility */
    private readonly openedClassName = 'navigation_links--opened';

    /**
     * Creates object with
     * @param button
     * @param links
     */
    public constructor(button: HTMLElement, links: HTMLElement) {
        this._button = button;
        this._links = links;
        this.init();
    }

    /**
     * Changes hamburger to close and back
     * @param event
     * @param toClose
     */
    private static changeIcon(event, toClose) {
        let iconClose = 'fa-times';
        let iconOpen = 'fa-bars';
        toClose ? event.target.classList.replace(iconClose, iconOpen) : event.target.classList.replace(iconOpen, iconClose);
    };

    /**
     * Forces menu to open
     */
    public open() {
        if (!this.isOpened()) {
            return this._links.classList.add(this.openedClassName);
        }
    }

    /**
     * Forces menu to close
     */
    public close() {
        if (this.isOpened()) {
            return this._links.classList.remove(this.openedClassName);
        }
    }

    /**
     * Checks if menu is opened
     */
    public isOpened(): boolean {
        return this._links.classList.contains(this.openedClassName);
    }

    /**
     * Initializes navigation's work
     */
    private init() {
        let observe = (event) => {
            if (event.target != this._links && event.target != this._button) {
                this.close();
            }
        };

        this._button.addEventListener('click', (event) => {
            if (!this.isOpened()) {
                // if closed
                this.open();
                Navigation.changeIcon(event, false);
                window.addEventListener('click', observe)
            } else {
                // if opened
                window.removeEventListener('click', observe);
                Navigation.changeIcon(event, true);
                this.close();
            }
        });
    }
}

export {Navigation};