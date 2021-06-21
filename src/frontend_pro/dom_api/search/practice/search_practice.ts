//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
type Items = {
  title: string;
  description: string;
};

type ExecutorResult = {
  title?: string;
  items: Items[];
  description?: string;
};

export const extractor = (document: Document): ExecutorResult => {
  const root = document.querySelector('.content');

  const titleNode = document.querySelector('h1');
  const title = titleNode?.innerHTML;

  const descriptionNode = document.querySelector('.description');
  const description = descriptionNode?.innerHTML;

  const itemsNode = root!.querySelectorAll('.links div');

  const items = Array.from(itemsNode).map((item) => {
    const elementTitle = document.querySelector('a');
    const elementDescription = item.children[1];
    return { title: elementTitle!.innerHTML, description: elementDescription!.innerHTML };
  });

  return {
    title,
    items,
    description,
  };
};

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
const executorMaster = (document: Document): ExecutorResult => {
  const root = document.querySelector('.content');

  const categoryTitleElement = root?.querySelector('h1');
  const categoryTitle = categoryTitleElement?.innerHTML;
  const categoryDescriptionElement = root?.querySelector('.description');
  const categoryDescription = categoryDescriptionElement?.innerHTML;

  const itemElements = root!.querySelectorAll('.links div');

  const items = Array.from(itemElements).map((element) => {
    const titleElement = element.querySelector('a');
    const descriptionElement = element.querySelector('p');

    return {
      title: titleElement!.innerHTML,
      description: descriptionElement!.innerHTML,
    };
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
};
