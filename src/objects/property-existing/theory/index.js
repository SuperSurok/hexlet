{
    const bag = [
        'apple', 'banana', 'pear',
        'apricot', 'apple', 'banana',
        'apple', 'orange', 'pear',
    ];

    const fruitsCounter = (data) => {
        const result = {};
        for (const fruit of data) {
            if (result.hasOwnProperty(fruit)) {
                result[fruit] += 1;
            } else {
                result[fruit] = 1;
            }
        }
        return result;
    };

    fruitsCounter(bag);
}

{
    const firstSemestrSubjects = {
        chemistry: {
            faculty: 'Chemistry faculty',
            teacher: 'Ivanov',
        },
        law: {
            // какие-то характеристики
        },
        informatics: null,
        microeconomics: {
            // какие-то характеристики
        },
    };

    const secondSemestrSubjects = {
        microeconomics: null,
        chemistry: {
            faculty: 'Chemistry faculty',
            teacher: 'Ivanov',
        },
        informatics: {
            // какие-то характеристики
        },
    };

    const getRemovedSubjects = (firs, second) => {
        const result = [];
        for (const item of Object.keys(firs)) {
            if (!Object.keys(second).includes(item)) {
                result.push(item);
            }
        }
        return result;
    };
    getRemovedSubjects(firstSemestrSubjects, secondSemestrSubjects);
}
