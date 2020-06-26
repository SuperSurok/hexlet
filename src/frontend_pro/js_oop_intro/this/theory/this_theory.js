///// Эти варианты не используют данные объекта!!!
// Добавить функцию в объект
const company = {name: 'Hexlet'};
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = () => 'Hexlet'; // Функция возвращает строку "Hexlet"
// Вызов метода
company.getName() // 'Hexlet';

// При создании объекта
const obj = {
    getName: () => 'Hexlet',
}
// Через присваивание константы
{
    const company = {name: 'Hexlet'};
    const getHexlet = () => 'Hexlet';
    company.getName = getHexlet();
}
///// Варианты выше не используют данные объекта!!!


{
    // Для доступа к данным объекта внутри метода используется ключевое слово this
    // this внутри функции ссылается на ближайший внешний объект или на текущий объект
    // к которму привязан метод
    // Так this работает для обычных функций
    // У стрелочных другой механизм

    const company = {name: 'Hexlet'};

    // Методы извлекающие данные из объекта называются геттерами
    // Стрелочная функция будет работать по-другому
    company.getName = function getName() {
        return this.name;
    };
    company.getName(); // Hexlet
    company.name = 'Hexlet Plus';
    company.getName(); // Hexlet Plus

    // Методы меняющие данные объекта называются сеттерами
    company.setName = function setName(name) {
        this.name = name;
    }
    company.getName() // Hexlet Plus

    company.setName('Hexlet Plus Plus');
    company.getName() // Hexlet Plus Plus
}

{
    // В JS this ссылается на текущий объект к которму привязан метод
    // this может измениться прямо во время исполнения программы
    const company1 = {
        name: 'Hexlet',
        getName: function getName() {
            return this.name
        },
    };
    const company2 = {name: 'Hexlet Plus'};
    company1.getName(); // Hexlet
    // Копируется ссылка на функцию, а не сама функция
    // Сама функция существует независимо от этих объектов
    company2.getName = company1.getName;
    company2.getName(); // 'Hexlet Plus'
    // Вызов функции в другом объекте привёл к смене контекста метода
    // Контест определяется не моментом определения, а моментом вызова функции
    // Или, другими словами в момент обращения к this
}

{
    // Про метод вызова функции call
    // Первым параметром передаётся контекст, объект на который
    // будет ссылаться this внутри функции
    // И для этого ей необязательно быть методом
    const sayHi = () => 'Hi!';
    sayHi.call(); // Hi!

    const getName = function getName() {
        return this.name;
    };
    const company1 = {name: 'Hexlet'};
    getName.call(company1); // Hexlet

    const company2 = {name: 'Hexlet Plus'};
    getName.call(company2); // Hexlet Plus
}

{
    // Еще немного про контекст
    // Контекстом для метода служит объект внутри которого он объявлен
    // Для обычных функция контекст всегда связан с окружением вызова
    const company = {
        name: 'Hexlet',
        country: {
            name: 'Finland',
            getName() {
                return this.name;
            }
        }
    }
    company.country.getName(); // Finland
}