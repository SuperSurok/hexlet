// Абстракция без использования инкапсуляции
const make = (name, website) => {
    return {name, website};
};
// Селекторы
const getName = (company) => company.name;
const getWebsite = (company) => company.website;
// Использование
const company = make('Hexlet', 'https://hexlet.io');
getName(company) // Hexlet

// Абстракция с инкапсуляцией

{
    const make = (name, website) => {
        return {
            name,
            website,
            getName() {
                return this.name;
            },
            getWebsite() {
                return this.website;
            },
        }
    };
    const company = make('Hexlet', 'https://hexlet.io');
    company.getWebsite(); // Hexlet

    // Здесь мы видим два момента:
    // 1) Не нужно делать отдельного импорта функций
    // 2) Есть автодополнение кода
    // Еще момент - каждый вызов конструктора возвращает новый объект
    // Чего точно нужно избегать - создания методов на каждый вызов конструктора
    // Методы в отличие от обычных данных не меняются
    // Нет смысла создавать из заново, расходуя память и процессорное время
    {

        // Перепишем код, избежав постоянного создания методов
        function getName() {
            return this.name;
        }

        function getWebsite() {
            return this.website;
        }

        const make = (name, website) => {
            return {
                name,
                website,
                getName,
                getWebsite,
            };
        }
    }
}

////// Оператор new
{
    function getName() {
        return this.name;
    }

    function getWebsite() {
        return this.website;
    }

    function Company(name, website) {
        // Такую функцию нельзя вызвать просто так, потому что тут есть this
        this.name = name;
        this.website = website;
        // Методы по прежнему определены снаружи как обычные функции
        this.getName = getName;
        this.webSite = getWebsite;
    }

    // Использование
    const company = new Company('Hexlet', 'https://hexlet.io');
    company.getName(); // => Hexlet
    // Упрощённая иллюстрация работы new внутри интерпретатора при таком вызове:
    // new Company()
    // const obj = {};
    // Company.bind(obj)(name, website); это вызов просто наполнил this (равный obj) нужными данными
    // return obj;
}
{
    // Все типы данных в JS, которые могут быть представлены объектами (или являются объектами внутри себя,
    // например функции), имеют встроенные конструкторы. Ингода они заменяют специальнй синтаксис создания
    // данных (как в случае с массивами), а иногда это единственный способ создать данные этого типа
    // (как в случае с датами).


    // Специальный синтаксис создания массивов
    // Массивы это объекты
    const numbers = [1, 2, 3, 4]; // литерал

    // Объектный способ создания через конструктор
    // Результат ниже эквивалентен тому, что происходит выше
    const numbersObj = new Array(1, 2, 3, 4);

    // У дат нет литералов, они создаются как объекты
    const date = new Date('January 17, 1995, 03:24:00')
    date.getMonth(); // => 0

    // Так можно создавать даже функции
    // Последний аргумент это тело, все предыдущие - аргументы
    const sum = new Function('a', 'b', 'return a + b');
    sum(2, 6) // => 8
}
