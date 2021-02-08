import Cart from '../lessons/class/practice/class_practice'

test('Cart', () => {
    const cart = new Cart();
    expect(cart.getItems()).toHaveLength(0);

    cart.addItem({name: 'car', price: 3}, 5);
    const expectedItems = [{good: {name: 'car', price: 3}, count: 5}];
    expect(cart.getItems()).toStrictEqual(expectedItems);
    expect(cart.getCost()).toBe(15);
    expect(cart.getCount()).toBe(5);

    cart.addItem({name: 'house', price: 10}, 2);
    const expectedItems2 = [
        {good: {name: 'car', price: 3}, count: 5},
        {good: {name: 'house', price: 10}, count: 2},
    ];
    expect(cart.getItems()).toStrictEqual(expectedItems2);
    expect(cart.getCost()).toBe(35);
    expect(cart.getCount()).toBe(7);
});