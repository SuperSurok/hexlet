//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const removeFirstLevel = (tree) => {
        const nodeTree = tree.filter((node) => Array.isArray(node));
        return nodeTree.flat();
    };
}

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const removeFirstLevel = (tree) => tree.filter(Array.isArray).flat();
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const removeFirstLevel = (tree) => {
        const nodes = tree.filter(Array.isArray);
        return nodes.flat();
    };
}