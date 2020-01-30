//Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.
//
// Примеры:
//
// diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
// diff(0, 180) === 180;
// diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
// diff(120, 280) === 160;


//////////////////////////////////////////
//////////// Solution ////////////////////
//////////////////////////////////////////

const diff = (integer1, integer2) => {
    if (integer1 > 180 && integer2 < 180) {
        return 360 - integer1 + integer2;
    }
    if (integer1 < 180 && integer2 > 180) {
        return 360 - integer2 + integer1;
    }
    if (integer1 < 180 && integer2 < 180) {
        return Math.abs(integer2 - integer1);
    }
    if (integer1 > 180 && integer2 > 180) {
        return Math.abs(integer2 - integer1);
    }

    return integer2 - integer1;
};

//////////////////////////////////////////
//////////// Master Solution /////////////
//////////////////////////////////////////

const diff = (a, b) => {
    const angle = Math.abs(a - b);
    return Math.min(angle, 360 - angle);
};