import _ from 'lodash';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
export const normalize = (data) => (
    Object.keys(data).map((key) => {
        switch (key) {
            case 'name':
                data[key] = _.capitalize(_.toLower(data[key]));
                break;
            case 'description':
                data[key] = _.toLower(data[key]);
                break;
            default:
                break;
        }
    })
);


//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    // eslint-disable-next-line no-unused-vars
    const normalizeMaster = (lesson) => {
        lesson.name = _.capitalize(lesson.name);
        lesson.description = _.toLower(lesson.description);
    }
}