import { ApheleiaIcon } from '../icon/icon';

export class ApheleiaInput extends HTMLElement {

    displayError(): void {

        this.input.classList.add('aph-input-error');
        this.icon.classList.add('aph-input-icon-error');

        this.icon.setIconName('error');
        this.icon.setIconSize('16px');
        this.input.style.paddingRight = '28px';

        if (this.inputIcon == null && !this.input.disabled) {
            this.appendChild(this.icon);
        };

        this.inputError = true;
    };

    removeError(): void {

        this.input.classList.remove('aph-input-error');
        this.icon.classList.remove('aph-input-icon-error');

        if (this.inputIcon != null) {

            this.icon.setIconName(this.inputIcon);
            this.icon.setIconSize('16px');
            this.input.style.paddingRight = '28px';
        } else {

            this.removeChild(this.icon);
            this.input.style.paddingRight = '8px';
        };

        
        this.inputError = false;
    };

    construct(): void {

        this.input.className = 'aph-input';

        if (this.inputPlaceholder) {
            this.input.setAttribute('placeholder', this.inputPlaceholder);
        };

        if (this.inputIcon != null) {
            this.icon.setIconName(this.inputIcon);
            this.icon.setIconSize('16px');
            this.input.style.paddingRight = '28px';

            this.appendChild(this.icon);
        };

        this.input.disabled = this.inputDisabled;

        this.input.addEventListener('keyup', () => { if (this.inputError) this.removeError() });

        this.appendChild(this.input);
    };

    setAttributes(): void {

    };

    getAttributes(): void {

        this.inputPlaceholder = this.getAttribute('placeholder') || null;
        this.inputDisabled = this.hasAttribute('disabled');
        this.inputIcon = this.getAttribute('icon') || null;
    };

    /*
        Class attributes
    */
    inputPlaceholder: string | null = null;
    inputDisabled: boolean = false;
    inputIcon: string | null = null;
    inputError: boolean = false;

    /*
        Class elements
    */
    input: HTMLInputElement = document.createElement('input');
    icon: ApheleiaIcon = new ApheleiaIcon();

    constructor() {

        super();

        this.getAttributes();
        this.construct();
    };
};

window.customElements.define('aph-input', ApheleiaInput);