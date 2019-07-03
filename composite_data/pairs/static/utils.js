// Создаём точку по заданным координатам
const cons = (pointX, pointY) => {
    return {
        point_x: pointX,
        point_y: pointY
    };
};

// Получаем координаты по оси X
const car = (point) => point.point_x;

// Получаем координаты по оси Y
const cdr = (point) => point.point_y;

const isPair = (pair) => {
  return Object.keys(pair).length === 2;
};

export { cons, car, cdr, isPair };

