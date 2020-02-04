const getJsFileNames = (paths) => paths
  .filter((filepath) => fs.existsSync(filepath)) // отбираем реально существующие файлы
  .filter((filepath) => fs.lstatSync(filepath).isFile()) // отбор по типу файла
  .filter((filepath) => path.extname(filepath).toLowerCase() === '.js') // отбор по расширению
  .map((filepath) => path.basename(filepath, extension)); // отображаем в имена (нам нужен массив с именами)

const names = getJsFileNames(['jest_theory.js', 'wop.JS', 'nonexists', 'node_modules']);
console.log(names); // => [index, wop]