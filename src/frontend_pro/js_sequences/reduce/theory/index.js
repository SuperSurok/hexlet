import { l, isEmpty, is, head, tail } from '@hexlet/pairs-data';
import { node, append, make, reduce } from "@hexlet/html-tags/src";

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
      if (isEmpty(items)) {
          return acc;
      }
      const item = head(items);
      const newAcc = is(tagName, item) ? acc + 1 : acc;
      return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};

reduce((element, acc) => {
   return is('h1', element) ? acc + 1 : acc;
}, 0, html3);

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max(), head(list), list); // 38
const list3 = reduce((item, acc) => item + acc, 0, list); // 30