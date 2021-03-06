Практика курса по тестированию сильно отличается от практик других курсов. 
Обычно вам нужно написать реализацию какой-то функции под существующий набор тестов. 
Здесь же все наоборот. Вам нужно написать тесты для готового кода.

Существует ровно один хороший способ, проверить, что вы написали тесты правильно – вызывать эти тесты с разными 
реализациями функции. Если реализация правильная, то тесты должны успешно пройти, если нет, 
то тесты должны свалиться с ошибкой. Такой подход позволяет проверять не реализацию тестов, а их эффективность.

Наша проверочная система использует специальную библиотеку suppressor, которая может понять,
 успешно ли завершилось выполнение тестов. У неё есть два режима работы.

Проверяет, что тесты выполнились успешно. 
В такой проверке в ваши тесты подставляется правильная реализация функции, которая тестируется (без ошибок).

suppressor pass 'babel-node ./tests/collection.assert.test.js'
Аргумент pass говорит о том, что suppressor ожидает успешного завершения тестов. 
Следующий аргумент – команда, которую надо запустить.

Проверяет, что тесты упали с ошибкой. В этом запуске тесты выполняются с неправильной реализацией тестируемой функции. 
Правильно написанные тесты должны найти ошибку и сигнализировать об этом:

FUNCTION_VERSION=fail1 suppressor fail 'babel-node ./tests/collection.assert.test.js'
Аргумент fail говорит о том, что suppressor ожидает, что выполняемая команда завершится с ошибкой. 
Тогда тесты написаны верно. Переменная окружения FUNCTION_VERSION определяет конкретную реализацию функции, 
которую надо подставить в этот запуск тестов. Сами реализации можно подсмотреть в файле functions.js.

tests/collection.assert.test.js
Напишите тесты для функции get(obj, key, defaultValue). Тесты должны быть построены по такому же принципу, 
как это описывалось в теории урока: проверка через if и исключение в случае провала теста.

Эта функция извлекает значение из объекта при условии, что ключ существует. В ином случае возвращается defaultValue.

get({ key: 'value' }, 'key'); // 'value'
get({}, 'key', 'defaultValue'); // 'defaultValue'
Для хорошего тестирования этой функции, понадобится как минимум три теста:

Проверка что функция возвращает нужное значение по существующему ключу (прямой тест на работоспособность)
Проверка на то что возвращается значение по умолчанию если ключа нет
Проверка на то что возвращается значение по существующему ключу, даже если передано значение по умолчанию (пограничный случай)
Подсказки