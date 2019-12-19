//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////

{
    const data = {
        user: 'ubuntu',
        hosts: {
            0: {
                name: 'web1',
            },
            1: {
                name: 'web2',
                null: 3,
            },
        },
    };

    const getIn = (data, keysArray) => {
        let workData = {...data};
        for (let i = 0; i < keysArray.length; i += 1) {
            if (!workData.hasOwnProperty(keysArray[i])) return null;
            workData = workData[keysArray[i]];
        }
        return workData;
    };
    console.log(getIn(data, ['hosts', 1, null]));   // 3)
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////

{
    const data = {
        user: 'ubuntu',
        hosts: {
            0: {
                name: 'web1',
            },
            1: {
                name: 'web2',
                null: 3,
            },
        },
    };

    const getIn = (data, keysArray) => {
      let workData = { ...data };
      for (const key of keysArray) {
          if (!workData.hasOwnProperty(key)) return null;
          workData = workData[key];
      }
      return workData;
    };

    console.log(getIn(data, ['hosts', 1, 'name'])); // 'web2'
}