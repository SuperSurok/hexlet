Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.

import { touch } from './file.js';
touch('/myfile').then(() => console.log('created!'));

Подсказка:
[fsPromises.access](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode) — проверка существования файла