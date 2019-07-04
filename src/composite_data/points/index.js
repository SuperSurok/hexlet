///////////////////////////////////////
///// Задание /////////////////////////
///////////////////////////////////////


//      Реализуйте и экспортируйте следующие функции для работы с точками:
//
//      getQuadrant - функция, которая вычисляет квадрант, в котором находится точка. Ниже приведена схема, показывающая номера квадрантов на плоскости.
//              +
//            2 | 1
//              |
//      +----------------+
//              |
//            3 | 4
//              +
// const point = makePoint(1, 5);
// getQuadrant(point); // 1
// getQuadrant(makePoint(3, -3)); // 4
//      Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат), то функция должна возвращать null:
//
// const point = makePoint(0, 7);
// getQuadrant(point); // null
// getQuadrant(makePoint(2, 0)); // null

// getSymmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат. Такая симметричность означает, что меняются знаки у x и y.
// getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
// calculateDistance - функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
// calculateDistance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28


///////////////////////////////////////
///// Решение /////////////////////////
///////////////////////////////////////


// Создаём точку по заданным координатам
const makePoint = (pointX, pointY) => {
    return {
        point_x: pointX,
        point_y: pointY
    };
};

// Получаем координаты по оси X
const getX = (point) => point.point_x;

// Получаем координаты по оси Y
const getY = (point) => point.point_y;


// Находим квадрант точки
const getQuadrant = (point) => {
    const pointX = getX(point);
    const pointY = getY(point);

    if (pointX > 0 && pointY > 0) return 1;
    if (pointX > 0 && pointY < 0) return 4;
    if (pointX < 0 && pointY > 0) return 2;
    if (pointX < 0 && pointY < 0) return 3;

    return null;
};

// Создаём зеркальную точку (меняем знаки)
const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));

// Вычисляем расстояние между точками
const calculateDistance = (point1, point2) => {
    const distX = getX(point2) - getX(point1);
    const distY = getY(point2) - getY(point1);
    return Math.sqrt((distX ** 2) + (distY ** 2));
};


getQuadrant(makePoint(1, 5)); // 1

getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

calculateDistance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28