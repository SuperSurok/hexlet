import square from './square';
import { getTriangleArea } from './myMathModule';

export default (n) => {
    const h = n;
    const b = square(n) / 2;
    return getTriangleArea(h, b);
};
