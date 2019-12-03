definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

///////////////////////////////////////////////////
///////////////// First Solution //////////////////
///////////////////////////////////////////////////

{
    const buildDefinitionsList = arr => {
        let define = ``;
        let result = [];
        if (arr.length === 0) return define;
        for (let i = 0; i < arr.length; i += 1) {
            let pair = arr[i];
            for (let k = 0; k < pair.length - 1; k += 1) {
                result.push(`<dt>${pair[k]}</dt><dd>${pair[k + 1]}</dd>`);
            }
        }
        const inner = result.join('');
        return `<dl>${inner}</dl>`;
    };

    buildDefinitionsList(definitions);
}

///////////////////////////////////////////////////
///////////////// Second Solution //////////////////
///////////////////////////////////////////////////
{
    const buildDefinitionsList = (arr) => {
        const result = [];
        if (arr.length === 0) return '';
        for (let i = 0; i < arr.length; i += 1) {
            const dt = arr[i][0];
            const dd = arr[i][1];
            result.push(`<dt>${dt}</dt><dd>${dd}</dd>`);
        }
        const inner = result.join('');
        return `<dl>${inner}</dl>`;
    };
    buildDefinitionsList(definitions);
}

///////////////////////////////////////////////////
///////////////// Master Solution //////////////////
///////////////////////////////////////////////////
{
    const buildDefinitionList = (definitions) => {
        if (definitions.length === 0) {
            return '';
        }

        const parts = [];

        for (let i = 0; i < definitions.length; i += 1) {
            const name = definitions[i][0];
            const description = definitions[i][1];
            parts[i] = `<dt>${name}</dt><dd>${description}</dd>`;
        }

        const innerValue = parts.join('');
        const result = `<dl>${innerValue}</dl>`;

        return result;
    };
    buildDefinitionsList(definitions);
}