describe('matcher-lesson', () => {
    // Проверка равенства по ссылке
    // assert.equal([1, 2], [1, 2]);
    // expect([1, 2]).toBe([1, 2]); // false

    // Проверка равентсва по значению
    // assert.deepEqual([1, 2], [1, 2])
    test('toEqual', () => {
        expect([1, 2]).toEqual([1, 2]);
    });

    test('Array length', () => {
       expect([1, 2]).toHaveLength(2);
    });
    test('Popular matcher examples', () => {
        expect(null).toBeNull();
        // Проверяется значение на truthy (любое значение, которое приводится к true)
        expect(true).toBeTruthy();
        // Точное сравнение с true
        expect(true).toBe(true);
        expect(undefined).toBeUndefined();
        // Массив содержит элемент
        expect([1, 2, 3]).toContain(2);
        // Строка содержит подстроку
        expect('Hello, World!').toMatch('Hello');
        // Проверка, что в объекте есть свойство с определённым значением
        expect({key: 'value'}).toHaveProperty('key', 'value');
    });
    test('Matchers invertion', () => {
        expect(false).not.toBeNull();
        expect(true).not.toBeUndefined();
        expect([1, 4, 3]).not.toContain(2);
        expect('Hello, World').not.toMatch('hello');
    });
    test('Match Objects', () => {
        const user = {
            firstName: 'Tolya',
            lastName: 'Petrov',
            age: 33,
        };

        expect(user).toMatchObject({firstName: 'Tolya'});
    });
});


//