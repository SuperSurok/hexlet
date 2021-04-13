import fs from 'fs';

/// Asynchronous with global state
const state = {
  count: 0,
  resulst: [],
};

const tryWithNewFile = () => {
  if (state.count !== 2) {
    return;
  }

  fs.writeFile(
    '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/7_parallel_execution/theory/new_file.js',
    state.resulst.join(''),
    (error) => {
      if (error) {
        return;
      }
      console.log('finished');
    },
  );
};

console.log('fist reading was started');
fs.readFile(
  'utf-8',
  '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/7_parallel_execution/theory/parallel_execution_theory.js',
  (error1, data) => {
    console.log('first callback');
    if (error1) {
      return;
    }
    state.count += 1;
    state.resulst[0] = data;
    tryWithNewFile();
  },
);

fs.readFile(
  'utf-8',
  '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/6_error_handling/theory/error_handling_theory.js',
  (error2, data) => {
    console.log('second callback');
    if (error2) {
      return;
    }
    state.count += 1;
    state.resulst[1] = data;
    tryWithNewFile();
  },
);
