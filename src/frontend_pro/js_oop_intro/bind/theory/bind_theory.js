////////// bind //////////
const printer = {
    name: 'Hexlet',
    print(greeting = 'Hello') {
        console.log(`${greeting}, ${this.name}`);
    },
};
// Этот код выдаст Hello undefined.
// Потому что внутрь setTimeout был передана только функция print без объекта printer.
// Это значит, что функция потеряла связь с объектом и её this больше не указывает на объект.
setTimeout(printer.print, 1000); // Hello, undefined
// Иллюстрация
const print = printer.print;
print(); // hello, undefined
// Если контекста нет, то this оказывается равным пустому объекту если речь об обычных функциях.

///// Вызов функции в контексте того объекта к которму он принадлежит.
/// Способ №1.
setTimeout(() => printer.print(), 1000); // Hello Hexlet
// Можно захватить внешние переменные
const value = 'hi';
setTimeout(() => printer.print(value), 1000); // hi, Hexlet

/// Способ №2.
// Метод bind доступен у функций, и в его задачу входит связывание функции с каким-то контекстом.
// Контекст передаётся в неё первым параметром.
// Контекстом является тот же объект, в котором определён метод.
// Это довольно странная штука
const bindedPrinter = printer.print.bind(printer);
bindedPrinter(); // Hello, Hexlet
setTimeout(bindedPrinter, 1000);
// Можно вызвать bind прямо по месту
setTimeout(printer.print.bind(printer), 1000); // Hello, Hexlet
// Кроме контекста bind принимает параметы, которые нужны функции и их можно сразу применить.
//
//
// Можно сразу применить нужные аргументы
setTimeout(printer.print.bind(printer, 'hi'), 1000); //