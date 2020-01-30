import _ from 'lodash';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getMenByYear = (list) => {
        const cb = (acc, {birthday}) => {
            if (_.has(acc, birthday)) {
                acc[birthday] += 1;
            } else {
                acc[birthday] = 1;
            }
        };

        list.map((person) => person.gender = new Date(person.birthday).getFullYear());
        return list.filter(({gender}) => gender === 'male').reduce(cb, {});
    }
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const getMenCountByYear = (list) => {
        const filteredMen = list.filter(({gender}) => gender === 'male');
        const getYears = filteredMen.map(({ birthday }) => {
            const year = new Date(birthday);
            return year.getFullYear();
        });
        return getYears.reduce((acc, year) => {
            const count = _.get(acc, year, 0) + 1;
            return {...acc, [year]: count};
        }, {})
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getMenCountByYear = (users) => {
        const men = users.filter(({gender}) => gender === 'male');

        const years = men.map(({birthday}) => {
            const date = new Date(birthday);
            return date.getFullYear();
        });

        return years.reduce((acc, year) => {
            const count = _.get(acc, year, 0) + 1;
            return {...acc, [year]: count};
        }, {});
    };
}