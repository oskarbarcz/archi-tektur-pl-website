interface Openable {
    open(): void;

    close(): void;

    isOpened(): boolean;
}

export {Openable};