////////// Привязать метод к объекту //////////
// Метод возвращает строку и не использует данные объекта
const company = {name: 'Hexlet'};
company.getName = () => 'Hexlet';
// При создании объекта
const obj = {
    getName: () => 'Hexlet',
};
// Через присваиввание константы
const company2 = {name: 'Hexlet'};
const getHexlet = () => 'Hexlet';
company2.getName = getHexlet;
// Вызвать функцию без объекта
getHexlet();

////////// Используем слово this //////////
/// this даёт возможность читать и менять данные
// Читать
const companyThis = {name: 'Hexlet'};
companyThis.getName = function () {
    return this.name;
};
companyThis.getName(); // Hexlet
companyThis.name = 'Hexlet Plus ';
companyThis.getName(); // Hexlet Plus
// Менять
companyThis.setName = function (name) {
    this.name = name;
};
companyThis.setName('Hexlet Plus Plus'); // Hexlet Plus Plus

////////// <------ Контекст ------> //////////
/// В JS this может измениится прямо во время работы программы
const companyThisContext1 = {
    name: 'Hexlet',
    getName: function getName() {
        return this.name;
    },
};
const companyThisContext2 = {name: 'Hexlet Plus'};
companyThisContext1.getName(); // Hexlet
// Копируется ссылка на функцию, а не сама функция
// Сама функция существует независимо от этих объектов
companyThisContext2.getName = companyThisContext1.getName;
companyThisContext2.getName(); // Hexlet Plus
/// Вызов функции из другого объекта привел к смене объекта, на который ссылается this.
/// Эта особенность называется поздним связыванием.
/// Значение this вычисляется не во время определения кода,
/// а во время обращения к этому ключевому слову.
///./ Разберём подробно
// В JS фукции это объекты и у них есть свои методы.
// Один из таких методов call для вызова функции.
// Первым параметром call принимает контекст,
// объект на который и будет ссылаться this внутри функции
// (для этого ей не обязаетльно быть методом)

const sayHi = () => 'Hi!';
sayHi.call(); // Hi!

const getName = function () {
    return this.name;
};

getName.call(companyThisContext1);
getName.call(companyThisContext2);

/// Весь секрет - это контекст, который JS прокидывыает автоматически в функцию если она
/// вызывается как метод. В этом случае можно точно сказать к каому объекту она принадлежит
// Пример
const companyThisExample = {
    name: 'Hexlet',
    country: {
        name: 'Finland',
        getName: function () {
            return this.name;
        },
    },
};
/// Сокращённое определение методов
const companyCut = {
    name: 'Hexlet',
    getName() {
        return this.name;
    },
};

// Ещё один пример
{
    function foo(num) {
        console.log('foo: ' + num);
        this.count += 1;
    }

    foo.count = 0;
    let i = 0;
    for (i = 0; i < 10; i += 1) {
        if (i > 5) foo.call(foo, i);
    }
    console.log(foo.count);
}