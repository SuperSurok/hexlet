/// /////////////////////////////////////
///  First Solution /////////////////////
/// /////////////////////////////////////
interface ObjectKeys {
  [key: string]: string;
}

interface Company extends ObjectKeys {
  name: string;
  state: string;
  website: string;
}

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };

const company11 = { name: 'Hexlet' };
const company22 = { name: 'Google' };

const is = (company1: Partial<Company>, company2: Partial<Company>): boolean =>
  Object.keys(company1).every((keyCompany) => company1[keyCompany] === company2[keyCompany]);

is(company1, company2); // false
is(company11, company22); // false

/// /////////////////////////////////////
///  Master Solution ////////////////////
/// /////////////////////////////////////
const isMaster = (company1: Partial<Company>, company2: Partial<Company>) => {
  const keys = ['name', 'state', 'website'];

  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }
  return true;
};

export {};
