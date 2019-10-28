// 'use strict';
import { table, tr, td } from './tags';

const buildHtml = () => table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')));
export default buildHtml;