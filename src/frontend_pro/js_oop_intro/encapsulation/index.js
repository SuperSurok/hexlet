//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const getMutualFriends = (userData1, userData2) => {
        const users1 = userData1.getFriends();
        const users2 = userData2.getFriends();
        const result = [];
        users1.filter((user) => (
            users2.filter((user2) => {
                if (user.id === user2.id) {
                    return result.push(user);
                }
            })
        ));

        return result;
    };
}
//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    export const getMutualFriends = (userData1, userData2) => {
        const users1 = userData1.getFriends();
        const users2 = userData2.getFriends();
        const result = users1.filter((user) => {
            const findUser = users2.find((user2) => user.id === user2.id);
            return findUser;
        });

        return result;
    };
}

//////////////////////////////////////////////////////
///////////////// Third Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const getMutualFriends = (userData1, userData2) => {
        const users1 = userData1.getFriends();
        const users2 = userData2.getFriends();
        return users1.filter((user) => users2.find((user2) => user.id === user2.id));
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
export const getMutualFriends = (userData1, userData2) => {
    const users1 = userData1.getFriends();
    const users2 = userData2.getFriends();
    return users1.filter((user) => users2.find((user2) => user.id === user2.id));
};