//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
const extractor = (dom: HTMLElement): string[] => {
  const nodes = dom.children[1].children;
  const resultNodes = Array.from(nodes)
    .filter((item) => item.tagName === 'P')
    .map((item) => item.innerHTML.trim());
  return resultNodes;
};

export default extractor;

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
const extractorMaster = (root: any): string[] => {
  const children = Array.from(root?.parentNode?.body?.children);
  // todo update types
  return children.filter((element) => element?.tagName === 'P').map((element) => element.innerHTML.trim());
};
