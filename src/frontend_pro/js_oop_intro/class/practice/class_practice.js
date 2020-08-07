import _ from 'lodash';

export  default class Cart {
    constructor() {
        this.good = [];
    }

    addItem(good, count) {
        return this.good.push({good, count});
    }

    getItems() {
        return this.good;
    }

    getCost() {
        const count = this.good.map((item) => item.good.price * item.count);
        return _.sum(count);
    }

    getCount() {
        return this.good.reduce((acc, cur) => acc + cur.count, 0);
    }
}

{
    class Cart {
        constructor() {
            this.items = [];
        }

        addItem(good, count) {
            this.items.push({good, count});
        }

        getItems() {
            return this.items;
        }

        getCount() {
            return _.sumBy(this.items, (item) => item.count);
        }

        getCost() {
            return _.sumBy(this.items, (item) => item.good.price * item.count);
        }
    }
}