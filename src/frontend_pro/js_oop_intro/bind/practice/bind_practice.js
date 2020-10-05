////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
const bind = (obj, func) => (...args) => func.call(obj, ...args);


////////////////////////////////////////////
//////////// Master Solution ///////////////
////////////////////////////////////////////
const bindMaster =  (context, fn) => (...args) => fn.apply(context, args);