Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), \
которая считает размер переданной директории (не включая поддиректории).

### Пример:

```ecmascript 6
import { getDirectorySize } from './file.js';

getDirectorySize('/usr/local/bin').then(console.log);
```

### Подсказка

* [fsPromises.readdir](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) - чтение содержимого директории
* [path.join](https://nodejs.org/api/path.html#path_path_join_paths) - конструирует пути
* [fsPromises.stat](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options) - информация о файле
* [_.sumBy](https://lodash.com/docs#sumBy) - нахождение суммы в массиве
