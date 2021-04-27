import { ApheleiaIcon } from '../icon/icon';

export class ApheleiaNotification extends HTMLElement {

    removeNotification(element: HTMLElement): void {

        element.remove();
    };

    newNotification(type: string, text: string, timeout: number | null): void {

        let icon: string = '';

        switch (type) {
            case 'error':
                icon = 'error';
                break;
            case 'success':
                icon = 'success';
                break;
            case 'warning':
                icon = 'warning';
                break;
            default:
                type = 'success';
                icon = 'success';
                break;
        };

        let notification = document.createElement('div');
        notification.className = `aph-notification aph-notification-${type}`;

        let notificationIcon = new ApheleiaIcon();
        notificationIcon.setIconName(icon);
        notificationIcon.setIconSize('18px');

        let notificationText = document.createElement('span');
        notificationText.innerHTML = text;

        notification.appendChild(notificationIcon);
        notification.appendChild(notificationText);

        this.appendChild(notification);

        if (timeout != null) {

            setTimeout(this.removeNotification, timeout, notification);
        };
    };

    constructor() {

        super();
    };
};

window.customElements.define('aph-notification', ApheleiaNotification);