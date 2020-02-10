const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

const abc = (tree) => {
    const [name, children] = tree;
    console.log(name);
    if (!children) return;
    return children.map(abc);
};

abc(tree);