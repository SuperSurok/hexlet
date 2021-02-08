{
    // В JS с каждым объектом связан прототип.
    // Прототип - это обычный объект, хранящийся в специальном служебном поле [[prototype]]
    // (к этому полю нельзя обратиться напрямую).
    // Но можно извлечь:
    const date = new Date();
    // Эта функция извлекает прототип не из конструктора, а из объекта!
    Object.getPrototypeOf(date); // => Date {}

    const numbers = [1, 2];
    Object.getPrototypeOf(numbers); // => []
}

{
    // Прототипы есть и у конструкторов, которые мы определяем сами
    function Company(name) {
        this.name = name;
    }

    const company = new Company();
    Object.getPrototypeOf(company); // => Company {}

    // JS ищет свойства объектов по цепочке прототипов, до конца цепочки
    // Последний прототип всегда равен null
    // На базе этого мезанизма реализуется наследование

    // Прототип есть даже у обычных объектов
    Object.getPrototypeOf({}); // => {}
    // Именно по этой причине даже пустые объекты "содержат"
    // (помним, что их содрежит прототип) свойства и методы}
}

{
    const obj = {}; // Можно сделать так: const obj = new Object();
    // Это функция конструктор из которой был получен текущий объект,
    // в данном случае Object.
    obj.constructor; // => [Function: Object]
    // У obj нет своего собственного свойства constructor, оно пришло из прототипа
    obj.hasOwnProperty('constructor') // => false
    obj.hasOwnProperty('name') // => false
    obj.name = 'hexlet';
    // Имя есть в самом объекте, потому что мы его только что добавили
    obj.hasOwnProperty('name'); // => true
}

{
    // Проверить работу прототипов достаточно легко, изменив их.
    // Доступ к прототипу можно получить не только из объектов,
    // но и их свойства prototype констурктора,
    // который эти объекты создаёт:
    function Company(name) {
        this.name = name;
    }
    // Одно и тоже полченное разными способами
    // Object.prototype === Object.getPrototypeOf(new Company())

    // Добавляем свойство getName (делаем его методом)
    Company.prototype.getName = function  getName() {
        // this по-прежнему зависит от контекста, в которм вызвается
        return this.name;
    }
    const company = new Company('Hexlet');
    // Свойство доступно
    company.getName(); // => Hexlet
    // При этом никто не мешает заменить значение свойства getName в конкретном объекте
    // Это никаким образом не отразиться на других объектах,
    // так как они извлекают getName их прототипа
    const company1 = new Company('Hexlet');
    const company2 = new Company('Google');
    company2.getName = function getName () {
        return 'Alphabet';
    }
    // Этот вызов возьмёт свойство из самого объекта
    company2.getName() // => Alphabet
    // Это вызов возьмёт занчение свойства из прототоипа
    company1.getName(); // => Hexlet
}
//
//
//
