//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////

export const make = (x, y, z) => func => func(x, y, z);

export const get1 = trio => trio(x => x);
export const get2 = trio => trio((x, y) => y);
export const get3 = trio => trio((x, y, z) => z);

//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////

export const make = (a, b, c) => (
    (message) => {
        switch (message) {
            case 'get1':
                return a;
            case 'get2':
                return b;
            case 'get3':
                return c;
        }
    });

export const get1 = triple => triple('get1');

export const get2 = triple => triple('get2');

export const get3 = triple => triple('get3');