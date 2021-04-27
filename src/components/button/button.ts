import { ApheleiaIcon } from '../icon/icon';

export class ApheleiaButton extends HTMLElement {

    stateClicked(): void {
        if (this.button) {
            this.button.classList.add(`aph-btn-type-${this.buttonType}-clicked`);
            if (this.autoDisable) {
                this.button.disabled = true;
            };
            this.showLoader();
        };
    };

    stateReset(): void {
        if (this.button) {
            this.button.classList.remove(`aph-btn-type-${this.buttonType}-clicked`);
            if (this.autoDisable) {
                this.button.disabled = false;
            };
            this.showText();
        };
    };

    showText(): void {
        if (this.hasLoader) {
            this.loader?.classList.remove('aph-btn-loader-active');
        };
        if (this.buttonText != null) {
            this.text?.classList.add('aph-btn-text-active');
        };
    };

    showLoader(): void {
        if (this.hasLoader) {
            this.loader?.classList.add('aph-btn-loader-active');
        };
        if (this.buttonText != null) {
            this.text?.classList.remove('aph-btn-text-active');
        };
    };

    updateIcon(newButtonIcon: string): void {
        if (this.buttonIcon) {
            this.icon?.setIconName(newButtonIcon);
        };
    };

    construct(): void {

        this.innerHTML = '';

        /*
            Generates html button element
        */
        this.button = document.createElement('button');
        this.button.className = 'aph-btn';

        /*
            Sets the button type
        */
        this.button.classList.add(`aph-btn-type-${this.buttonType}`);

        /*
            Generates laoder element if the button has one
        */
        if (this.hasLoader) {

            this.loader = document.createElement('div');
            this.loader.className = 'aph-btn-loader';

            this.button.appendChild(this.loader);
        };

        /*
 
        */
        if (this.buttonSize != 'custom') {

            this.button.classList.add(`aph-btn-size-${this.buttonSize}`);
        };

        /*
            Checks the button for text and or icons
        */
        /*
            Text
            Text LI
            RI Text
            RI Text LI
            I
        */
        if (this.buttonLeftIcon != null) {

            this.iconLeft = new ApheleiaIcon();
            this.iconLeft.setIconName(this.buttonLeftIcon);
            this.iconLeft.setIconSize('24px');
            this.iconLeft.style.marginRight = '6px';
            this.iconLeft.style.marginLeft = '8px';

            this.button.appendChild(this.iconLeft);
        };

        /*
 
        */
        if (this.buttonText != null) {

            this.text = document.createElement('span');
            this.text.className = 'aph-btn-text';
            this.text.innerHTML = this.buttonText;

            this.button.appendChild(this.text);

            if (this.isFullWidth) {

                this.button.style.width = '100%';
            };

            if (this.hasMargin) {

                //this.text.style.width = `${80 + (8 * this.buttonText.length)}px`;
                this.text.style.marginLeft = '16px';
                this.text.style.marginRight = '80px';
            } else {

                if (this.buttonLeftIcon != null && this.buttonRightIcon != null) {

                    this.text.style.marginLeft = '0px';
                    this.text.style.marginRight = '0px';
                } else if (this.buttonLeftIcon != null && this.buttonRightIcon == null) {

                    this.text.style.marginLeft = '0px';
                    this.text.style.marginRight = '16px';
                } else if (this.buttonLeftIcon == null && this.buttonRightIcon != null) {

                    this.text.style.marginLeft = '16px';
                    this.text.style.marginRight = '16px';
                } else {

                    this.text.style.marginLeft = '16px';
                    this.text.style.marginRight = '16px';
                };
            };
        };

        if (this.buttonIcon != null) {

            this.icon = new ApheleiaIcon();
            this.icon.setIconName(this.buttonIcon);
            this.icon.setIconSize('24px');
            this.icon.style.marginRight = '3px';
            this.icon.style.marginLeft = '3px';

            this.button.appendChild(this.icon);
        };

        /*
 
        */
        if (this.buttonText != null && this.buttonRightIcon != null) {

            this.iconRight = new ApheleiaIcon();
            this.iconRight.setIconName(this.buttonRightIcon);
            this.iconRight.setIconSize('24px');
            this.iconRight.style.marginRight = '8px';
            this.iconRight.style.marginLeft = '6px';

            this.button.appendChild(this.iconRight);
        };



        if (this.isDisabled) {

            this.button.disabled = true;
        };

        if (this.autoDisable) {

            this.button.addEventListener('click', () => {

                this.stateClicked();
            });
        } else if (this.hasLoader) {

            this.button.addEventListener('click', () => {

                this.stateClicked();
            });
        };

        this.appendChild(this.button);
        this.showText();
    };

    /*
        Function to set attribute values for button
    */
    setAttributes(buttonType: string, buttonSize: string, buttonText: string | null, buttonIcon: string | null, buttonRightIcon: string | null, buttonLeftIcon: string | null, hasLoader: boolean, isDisabled: boolean, autoDisable: boolean, hasMargin: boolean, isFullWidth: boolean): void {

        /*
            Get the button type attribute
        */
        switch (buttonType) {
            case 'primary':
                this.buttonType = 'primary';
                break;
            case 'secondary':
                this.buttonType = 'secondary';
                break;
            case 'tertiary':
                this.buttonType = 'tertiary';
                break;
            case 'ghost':
                this.buttonType = 'ghost';
                break;
            case 'danger':
                this.buttonType = 'danger';
                break;
            case 'gray':
                this.buttonType = 'gray';
                break;
            case 'dropdown-menu-item':
                this.buttonType = 'dropdown-menu-item';
                break;
            case 'gray-hover':
                this.buttonType = 'gray-hover';
                break;
            default:
                this.buttonType = 'primary';
                break;
        };

        /*
            Get the button size attribute
        */
        switch (buttonSize) {
            case 'custom':
                this.buttonSize = 'custom';
                break;
            case 'small':
                this.buttonSize = 'small';
                break;
            case 'medium':
                this.buttonSize = 'medium';
                break;
            case 'large':
                this.buttonSize = 'large';
                break;
            case 'extralarge':
                this.buttonSize = 'extralarge';
                break;
            default:
                this.buttonSize = 'medium';
                break;
        };

        /*
            Get the button text attribute
        */
        this.buttonText = buttonText;

        /*
            Get the button icon attribute
        */
        this.buttonIcon = buttonIcon;

        /*
            Get the button right icon attribute
        */
        this.buttonRightIcon = buttonRightIcon;

        /*
            Get the button left icon attribute
        */
        this.buttonLeftIcon = buttonLeftIcon;

        /*
            Get the button has loader attribute
        */
        this.hasLoader = hasLoader;

        /*
            Get the button is disabled attribute
        */
        this.isDisabled = isDisabled;

        /*
            Get the button no disable attribute
        */
        this.autoDisable = autoDisable;

        /*
            Get the button has margin attribute
        */
        this.hasMargin = hasMargin;

        /*
            Get the button is full width attribute
        */
        this.isFullWidth = isFullWidth;
    };

    /*
        Function to get all attributes from html
    */
    getAttributes(): void {

        /*
            Get the button type attribute
        */
        switch (this.getAttribute('type')) {
            case 'primary':
                this.buttonType = 'primary';
                break;
            case 'secondary':
                this.buttonType = 'secondary';
                break;
            case 'tertiary':
                this.buttonType = 'tertiary';
                break;
            case 'ghost':
                this.buttonType = 'ghost';
                break;
            case 'danger':
                this.buttonType = 'danger';
                break;
            case 'gray':
                this.buttonType = 'gray';
                break;
            case 'dropdown-menu-item':
                this.buttonType = 'dropdown-menu-item';
                break;
            case 'gray-hover':
                this.buttonType = 'gray-hover';
                break;
            default:
                this.buttonType = 'primary';
                break;
        };

        /*
            Get the button size attribute
        */
        switch (this.getAttribute('size')) {
            case 'custom':
                this.buttonSize = 'custom';
                break;
            case 'small':
                this.buttonSize = 'small';
                break;
            case 'medium':
                this.buttonSize = 'medium';
                break;
            case 'large':
                this.buttonSize = 'large';
                break;
            case 'extralarge':
                this.buttonSize = 'extralarge';
                break;
            default:
                this.buttonSize = 'medium';
                break;
        };

        /*
            Get the button text attribute
        */
        this.buttonText = this.getAttribute('text') || null;

        /*
            Get the button icon attribute
        */
        this.buttonIcon = this.getAttribute('icon') || null;

        /*
            Get the button right icon attribute
        */
        this.buttonRightIcon = this.getAttribute('righticon') || null;

        /*
            Get the button left icon attribute
        */
        this.buttonLeftIcon = this.getAttribute('lefticon') || null;

        /*
            Get the button has loader attribute
        */
        this.hasLoader = this.hasAttribute('noloader') ? false : true;

        /*
            Get the button is disabled attribute
        */
        this.isDisabled = this.hasAttribute('disabled');

        /*
            Get the button no disable attribute
        */
        this.autoDisable = this.hasAttribute('nodisable') ? false : true;

        /*
            Get the button has margin attribute
        */
        this.hasMargin = this.hasAttribute('nomargin') ? false : true;

        /*
            Get the button is full width attribute
        */
        this.isFullWidth = this.hasAttribute('fullwidth');
    };

    /*
        Class attributes
    */
    buttonType?: string;
    buttonSize?: string;
    buttonText?: string | null;
    buttonIcon?: string | null;
    buttonRightIcon?: string | null;
    buttonLeftIcon?: string | null;
    hasLoader?: boolean;
    isDisabled?: boolean;
    autoDisable?: boolean;
    hasMargin?: boolean;
    isFullWidth?: boolean;

    /*
        Class elements
    */
    button?: HTMLButtonElement;
    loader?: HTMLDivElement;
    text?: HTMLSpanElement;
    secondaryText?: HTMLSpanElement;
    iconLeft?: ApheleiaIcon;
    iconRight?: ApheleiaIcon;
    icon?: ApheleiaIcon;

    constructor() {

        super();

        this.getAttributes();
        this.construct();
    };
};

window.customElements.define('aph-button', ApheleiaButton);