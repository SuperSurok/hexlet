/// /////////////////////////////////////////
/// ///////// First Solution ////////////////
/// /////////////////////////////////////////
const uniq = (arr) => [...new Set([...arr])];

/// /////////////////////////////////////////
/// ///////// Second Solution ///////////////
/// /////////////////////////////////////////
const predicate = (el, index, arr) => index === arr.lastIndexOf(el);
const uniqSecond = (arr) => arr.filter(predicate);

/// /////////////////////////////////////////
/// ///////// Master Solution ///////////////
/// /////////////////////////////////////////
const predicateMaster = (el, index, collection) => index === collection.indexOf(el);
const uniqMaster = (coll) => coll.filter(predicate);