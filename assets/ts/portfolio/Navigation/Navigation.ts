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
     * Forces menu to openMenu
     */
    public openMenu(): void {
        if (!this.isOpened()) {
            this.changeIcon();
            window.addEventListener('click', (event) => {
                if (event.target != this._links && event.target != this._button) {
                    this.closeMenu();
                }
            });
            return this._links.classList.add(this.openedClassName);
        }
    }

    /**
     * Forces menu to closeMenu
     */
    public closeMenu(): void {
        if (this.isOpened()) {
            this.changeIcon();
            window.removeEventListener('click', (event) => {
                if (event.target != this._links && event.target != this._button) {
                    this.closeMenu();
                }
            });
            this._links.classList.remove(this.openedClassName);
        }
    }

    /**
     * Initializes navigation's work
     */
    private init(): void {
        this._button.addEventListener('click', () => {
            this.isOpened() ? this.closeMenu() : this.openMenu();
        });
    }

    /**
     * Changes hamburger to closeMenu and back
     */
    private changeIcon(): void {
        let iconClose = 'fa-times';
        let iconOpen = 'fa-bars';
        (this._button.classList.contains(iconClose))
            ? this._button.classList.replace(iconClose, iconOpen)
            : this._button.classList.replace(iconOpen, iconClose);
    };

    /**
     * Checks if menu is opened
     */
    public isOpened(): boolean {
        return this._links.classList.contains(this.openedClassName);
    }
}

export {Navigation};