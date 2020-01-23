import {flatten} from 'lodash';

////////////////////////////////////////
//////// First Solution ///////////////
////////////////////////////////////////
{
    const getChildren = (list) => {
        const result = list.map(({children}) => children);
        return flatten(result);
    };

}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getChildren = (users) => {
        const childrenOfUsers = users.map(({children}) => children);
        return flatten(childrenOfUsers);
    };
}