// Переопрделить метод toString()
const company = {
    name: 'Hexlet',
    toString() {
        return this.name;
    }
};
company.toString() // => 'Hexlet'
console.log(`${company}`) // => 'Hexlet'

// Можно сделать в прототипе любого контструктора
function Company(name) {
    this.name = name;
}
Company.prototype.toString = function toString () {
    return this.name;
}

const company_1 = new Company('Hexlet');
console.log(`${company_1}`); // => Hexlet

// Если нужно вывести объект как есть и у объекта не определён toString();
const company_2 = new Company('Helxlet');
console.log(JSON.stringify(company_2)) // => {"name": "Hexlet"}