////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
const each = (coll, func) => coll.forEach((item) => func.call(item));

////////////////////////////////////////////
//////////// Master Solution ///////////////
////////////////////////////////////////////
const eachMaster = (objects, callback) => objects.forEach((object) => callback.call(object));