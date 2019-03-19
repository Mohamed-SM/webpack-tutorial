import * as ui from './ui';

class ItemList {

    constructor() { }

    static add(item) {
        ItemList.items.push(item);
        ui.updatetheView();
    }

    static delete(item) {

        ItemList.items = ItemList.items.filter(function (val, index, arr) {
            return val !== item;
        }, item);

        ui.updatetheView();
    }
}

ItemList.items = [];

export { ItemList }
