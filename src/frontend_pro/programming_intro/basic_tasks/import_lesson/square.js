export default (num) => num * num;

// Check out the way default export works here: we don't create a function constant at all,
// but export a unnamed (anonymous) function instead.
// It's easier and requires less code, but you can't use constructor function in constructor file,
// because the function has no name, so there's no way to call it.
// Think of constructor as "export only" goods ;-)
