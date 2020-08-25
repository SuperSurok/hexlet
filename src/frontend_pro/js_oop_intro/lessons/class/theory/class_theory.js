// Обычная абстракция на JS
{
    function Company(name, email) {
        this.name = name;
        this.email = email;
    }

    Company.prototype.getName = function getName() {
        return this.name;
    }

    Company.prototype.getEmail = function getEmail() {
        return this.email;
    }

    Company.prototype.setEmail = function setEmail(email) {
        this.email = email;
    }

    const company = new Company('Hexlet');
    console.log(company.getName()) // Hexlet
}

{
    // Этот код можно представить классом

    // Каждый класс должен лежать в собственном файле
    // Идеально, если назавание класса совпадает с названием класса с учётом регистра
    class Company { // имя класса - это имя функции конструктора
        // Метод с именем constructor соотвествует функции-конструктору
        // Он вызыватеся, когда мы делаем new Company(name, email)
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        // Это свойства с записанными в него обычными функциями
        getName() {
            return this.name;
        }

        getEmail() {
            return this.email;
        }

        setEmail(email) {
            this.email = email;
        }
    }

    // Сточки зрения использования ничего не меняется
    const company = new Company('Hexlet', 'support@hexlet.io');
    console.log(company.getName()) // => Hexlet
    // Метод соотвествущтй функции конструктору внутри класса назвается constructor
    // Вызвается автоматом при создании новго объекта через new
    // Если конструктора нет, ничего страшного. Это равносильно созданию и вызову пустой функции конструктора

    function Company_2() {

    }

    const company_1 = new Company_2();
}

{
    // СВОЙСТВА
    // В объектах встречаются свойства, имеющие значения по умолчанию
    const company = new Company();
    Company.prototype.getEmployees = function getEmployees() {
        return this.employees;
    }
    company.getEmployees(); // []

    // В функциях конструкторах
    function Company() {
        this.employees = [];
    }

    // В классах
    class Company_1 {
        constructor() {
            this.employees = [];
        }
    }

    // Новый синтаксис в классах
    {
        class Company {
            employess = [];
        }
    }
}

{
    // Подводные камни

    // Классы не статичны, как во многих других языках
    // Можно сделать следующее после того, как класс был переопределён
    Company.prototype.greeting = function greeting() {
        return `Hello , ${this.name}!`;
    }
    const company = new Company('Hexlet');
    console.log(company.greeting());
}