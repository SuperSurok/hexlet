//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const calculateDistance = (point1, point2) => {
        const x = point2[0] - point1[0];
        const y = point2[1] - point1[1];
        return Math.sqrt(((x ** 2) + (y ** 2)));
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const calculateDistance = (point1, point2) => {
        const deltaX = point2[0] - point1[0];
        const deltaY = point2[1] - point1[1];

        return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
    };
}