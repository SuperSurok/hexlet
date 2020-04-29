//////////// Обход в глубину ////////////
/// Массивы
{

    const tree = ['A', [
        ['B', [['E'], ['F']]],
        ['C'],
        ['D', [['G'], ['J']]],
    ]];
    const dfs = (tree) => {
        const [name, children] = tree;
        console.log(name);
        if (!children) return;
        children.map(dfs);
    };

    console.log(dfs(tree));
}

// Объекты
{
    const tree = {
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {name: 'E', children: []},
                    {name: 'F', children: []},
                ],
            },
            {name: 'C', children: []},
            {
                name: 'D',
                children: [
                    {name: 'G', children: []},
                    {name: 'J', children: []},
                ],
            },
        ],
    }

    const dfs = (tree) => {
        const {name, children} = tree;
        console.log(name);
        if (!children) return;
        children.map(elem => dfs(elem));
    };
    console.log(`${dfs(tree)}`);
}