/**
 * Represents data sent to server
 */
export class FormData {
    public name: string;
    public email: string;
    public reason: string;
    public content: string;

    public static validate(): boolean {
        return true;
    }
}