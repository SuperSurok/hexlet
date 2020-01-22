const apply = (counter, func, arg) => {
  if (counter === 0) return arg;
  const result = func(arg);
  return apply(counter - 1, func, result);
};

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////

const apply_2 = (counter, func, arg) => (
  counter === 0 ? arg : apply_2(counter -1, func, func(arg))
);

// apply(0, Math.sqrt, 4); // => 4
// apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
// apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply_2(3, Math.sqrt, 256); // => 2

// apply(1, v => v ** 2, 3); // => 9
// apply(5, v => v + 10, 3); // => 53
