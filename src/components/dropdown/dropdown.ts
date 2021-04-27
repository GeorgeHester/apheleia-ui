import { ApheleiaButton } from '../button/button';

export class ApheleiaDropdown extends HTMLElement {

    setDropdownItems(dropdownItems: Array<Array<string>>): void {

        this.dropdownItems = dropdownItems;
    };

    getDropdownItems(): void {

        let dropdownGroups: HTMLCollectionOf<Element> = this.getElementsByTagName('aph-dropdown-group');

        for (let i: number = 0; i < dropdownGroups.length; i++) {

            let dropdownItems: HTMLCollectionOf<Element> = dropdownGroups[i].getElementsByTagName('aph-dropdown-item');
            let dropdownGroup: string[] = [];

            for (let j: number = 0; j < dropdownItems.length; j++) {

                dropdownGroup.push(dropdownItems[j].innerHTML);

                if (dropdownItems[j].hasAttribute('default')) {

                    this.dropdownDefaultItem = dropdownItems[j].innerHTML;
                    this.currentValue = dropdownItems[j].innerHTML;
                };

                if (dropdownItems[j].innerHTML.length > this.dropdownMaxWidthItem.length) {

                    this.dropdownMaxWidthItem = dropdownItems[j].innerHTML;
                };
            };

            this.dropdownItems.push(dropdownGroup);
        };
    };

    getAttributes(): void {

        this.cookie = this.getAttribute('cookie') || null;
    };

    dropdownItemClicked(newValue: string): void {

        this.currentValue = newValue;
        if (this.cookie != null) {
            console.log(`${this.cookie}=${newValue}`);
            document.cookie = `${this.cookie}=${newValue}`;
        };
        this.button.setAttributes('gray', 'small', newValue, null, 'chevron-down', null, false, false, false, false, false);
        this.button.construct();
        this.button.button?.addEventListener('click', () => this.buttonClicked());
        this.menu.style.display = 'none';
        this.dropdownOpen = false;
    };

    buttonClicked(): void {

        switch (this.dropdownOpen) {
            case true:
                this.menu.style.display = 'none';
                this.dropdownOpen = !this.dropdownOpen;
                break;
            case false:
                this.menu.style.display = 'block';
                this.dropdownOpen = !this.dropdownOpen;
                break;
        };
    };

    construct(): void {

        this.innerHTML = '';

        this.button.setAttributes('gray', 'small', this.dropdownDefaultItem, null, 'chevron-down', null, false, false, false, false, false);
        this.button.construct();
        this.button.button?.addEventListener('click', () => this.buttonClicked());
        this.appendChild(this.button);
        //this.style.height = `${this.button.clientHeight}`;

        this.style.height = '32px';

        if (this.dropdownItems) {

            for (let i = 0; i < this.dropdownItems?.length; i++) {

                if (i != 0) {

                    this.menu.appendChild(document.createElement('aph-dropdown-menu-seperator'));
                };

                for (let j = 0; j < this.dropdownItems[i].length; j++) {

                    let itemButton = new ApheleiaButton();
                    itemButton.style.width = '100%';
                    itemButton.setAttributes('dropdown-menu-item', 'small', this.dropdownItems[i][j], null, null, null, false, false, false, false, true);
                    itemButton.construct();
                    itemButton.button?.addEventListener('click', () => this.dropdownItemClicked(this.dropdownItems[i][j]));
                    this.menu.appendChild(itemButton);
                };
            };
        };

        this.menu.style.display = 'none';
        this.appendChild(this.menu);
    };

    /*
        Class attributes
    */
    dropdownItems: Array<Array<string>> = [];
    currentValue: string | null = null;
    cookie: string | null = null;

    /*
        Class functional values
    */
    dropdownOpen: boolean = false;
    dropdownDefaultItem: string | null = null;
    dropdownMaxWidthItem: string = '';

    /*
        Class elements
    */
    button: ApheleiaButton = new ApheleiaButton();
    menu: HTMLElement = document.createElement('aph-dropdown-menu');

    constructor() {

        super();

        this.getAttributes();
        this.getDropdownItems();
        this.construct();
    };
};

window.customElements.define('aph-dropdown', ApheleiaDropdown);