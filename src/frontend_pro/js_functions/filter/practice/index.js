import {flatten} from 'lodash';

const users = [
    {
        name: 'Tirion',
        friends: [
            {name: 'Mira', gender: 'female'},
            {name: 'Ramsey', gender: 'male'},
        ],
    },
    {name: 'Bronn', friends: []},
    {
        name: 'Sam',
        friends: [
            {name: 'Aria', gender: 'female'},
            {name: 'Keit', gender: 'female'},
        ],
    },
    {
        name: 'Rob',
        friends: [
            {name: 'Taywin', gender: 'male'},
        ],
    },
];

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getGirlFriends = (list) => {
        const result = list.map(({friends}) => friends.filter(({gender}) => gender === 'female'));
        return flatten(result);
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const getGirlFriends = (list) => {
        const friendsOfUsers = users.map(({friends}) => friends);
        const flattened = flatten(friendsOfUsers);
        return flattened.filter(({gender}) => gender === 'female');
    };
}