const coll = ['milk', 'butter'];

// Такой способ влияет на производиетльность
const buildHTMLList = (coll) => {
    let result = '<ul>';
    for (const item of coll) {
        result = `${result}<li>${item}</li>`;
        // или так: result += `<li>${item}</li>`
    }
    result = `${result}</ul>`;
    return result;
};
console.log(buildHTMLList(coll));
// <ul><li>milk</li><li>butter</li></ul>

// Правильно, в случае с динамическими языками, -
// формировать массив, который затем с помощью метода join()
// превратить в строку
const buildHTMLList_2 = (coll) => {
    const parts = [];
    for (const item of coll) {
        parts.push(`<li>${item}</li>`);
    }
    // Метод join() объединяет элементы массива в строку
    // В качестве разделителя между значениями
    // используется то, что передано первым параметром
    const innerValue = parts.join('');
    const result = `<ul>${innerValue}</ul>`;
    return result;
};
console.log(buildHTMLList_2(coll));
// <ul><li>milk</li><li>butter</li></ul>