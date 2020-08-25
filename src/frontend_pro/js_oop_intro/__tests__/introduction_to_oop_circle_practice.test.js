import {Circle} from "../challenges/introduction_to_oop_circle/introduction_to_oop_circle_practice";
test('getArea1', () => {
  const newCircle = new Circle(1);
  expect(newCircle.getArea(1)).toBeCloseTo(Math.PI);
})

test('getArea2', () => {
  const newCircle = new Circle(3);
  expect(newCircle.getArea(1)).toBeCloseTo(28.274);
})

test('getCircumference1', () => {
  const newCircle = new Circle(1);
  expect(newCircle.getCircumference()).toBeCloseTo(2 * Math.PI);
})

test('getCircumference2', () => {
  const newCircle = new Circle(3);
  expect(newCircle.getCircumference()).toBeCloseTo(18.849);
})

