import chevronLeft from './svg/chevron-left';
import chevronRight from './svg/chevron-right';
import chevronUp from './svg/chevron-up';
import chevronDown from './svg/chevron-down';
import close from './svg/close';
import hamburger from './svg/hamburger';
import chat from './svg/chat';
import success from './svg/success';
import error from './svg/error';
import warning from './svg/warning';
import search from './svg/search';

type iconType = {
    [key: string]: string
};

const supportedIcons: iconType = {
    'chevron-left': chevronLeft,
    'chevron-right': chevronRight,
    'chevron-up': chevronUp,
    'chevron-down': chevronDown,
    'close': close,
    'hamburger': hamburger,
    'chat': chat,
    'success': success,
    'error': error,
    'warning': warning,
    'search': search
};

export class ApheleiaIcon extends HTMLElement {

    get iconSize(): string {
        switch (this.getAttribute('size')) {
            case '16':
                return '16px';
            case '20':
                return '20px';
            case '24':
                return '24px';
            case '32':
                return '32px';
            default:
                return '16px';
        };
    };

    get iconName(): string {
        return this.getAttribute('name') || '';
    };

    setIconName(newIconName: string): void {
        if (supportedIcons[newIconName]) {
            this.innerHTML = supportedIcons[newIconName];
        };
    };

    setIconSize(newIconSize: string): void {
        this.style.width = newIconSize;
        this.style.height = newIconSize;
    };

    constructor() {

        super();

        if (supportedIcons[this.iconName]) {
            this.innerHTML = supportedIcons[this.iconName];
            this.style.width = this.iconSize;
            this.style.height = this.iconSize;
        };
    };
};

window.customElements.define('aph-icon', ApheleiaIcon);