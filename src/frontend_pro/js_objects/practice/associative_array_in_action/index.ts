//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////

type Keys = {
  name: string;
  null?: number;
};

type Hosts = keyof Keys;

type Data = {
  hosts: { '0': { name: string }; '1': { count: number; name: string } };
  user: string;
};

type keysArray = (string | number)[];

type DomainAddress = {
  scheme?: string;
  name?: string;
};

{
  const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        count: 3,
      },
    },
  };

  const getIn = (data: Data, keysArray: keysArray) => {
    let workData: Data = { ...data };
    for (let i = 0; i < keysArray.length; i += 1) {
      if (!workData.hasOwnProperty(keysArray[i])) return null;
      //todo Add types
      //@ts-ignore
      workData = workData[keysArray[i]];
    }
    return workData;
  };
  console.log(getIn(data, ['hosts', 1, 'count'])); // 3)
}

const getDomainInfo = (filePath: string) => {
  const dataObj: DomainAddress = {};
  const scheme = filePath.startsWith('https') ? (dataObj.scheme = 'https') : (dataObj.scheme = 'http');

  const splitData = filePath.split('//');
  const name = splitData.length > 1 ? splitData[1] : splitData[0];

  return { scheme, name };
};

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

  const getIn = (data: Data, keysArray: keysArray) => {
    let workData = { ...data };
    for (const key of keysArray) {
      if (!workData.hasOwnProperty(key)) return null;
      //todo Add types
      //@ts-ignore
      workData = workData[key];
    }
    return workData;
  };
  //todo Add types
  //@ts-ignore
  console.log(getIn(data, ['hosts', 1, 'name'])); // 'web2'
}

const getDomainInfoMaster = (domain: string) => {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
    // else if другие протоколы
  } else {
    scheme = 'http';
  }

  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};
