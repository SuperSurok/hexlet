import {sortBy} from 'lodash';

const users = [
    {name: 'Tirion', birthday: '1988-11-19'},
    {name: 'Sam', birthday: '1999-11-22'},
    {name: 'Rob', birthday: '1975-01-11'},
    {name: 'Sansa', birthday: '2001-03-20'},
    {name: 'Tisha', birthday: '1992-02-27'},
    {name: 'Chris', birthday: 'Dec 25, 1995'},
];

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const takeOldest = (list, num = 1) => {
        const sorted = sortBy(list, (pers) => Date.parse(pers.birthday));
        const result = [];
        for (let i = 0; i < num; i += 1) {
            result.push(sorted[i]);
        }
        return result;
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const takeOldest = (list, num = 1) => {
        const sorted = sortBy(list, (personage) => Date.parse(personage.birthday));
        return sorted.slice(0, num);
    }
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const takeOldest = (list, num = 1) => {
        const sorted = sortBy(list, ({birthday}) => Date.parse(birthday));
        return sorted.slice(0, num);
    }
}