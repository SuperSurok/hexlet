import {get} from 'lodash';

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];

/////////////////////////////////////////////////////
/////////// First Solution //////////////////////////
/////////////////////////////////////////////////////
{
    const getFreeDomainsCount = (emails) => (
        emails.map((email) => email.split('@')[1])
            .filter((email) => freeEmailDomains.includes(email))
            .reduce((acc, email) => {
                const count = get(acc, email, 0) + 1;
                return {...acc, [email]: count};
            }, {})
    );
}

//////////////////////////////////////////////////////
/////////// Master Solution //////////////////////////
//////////////////////////////////////////////////////
{
    const getFreeDomainsCount = (emails) => emails
        .map((email) => {
            const [, domain] = email.split('@');
            return domain;
        })
        .filter((domain) => freeEmailDomains.includes(domain))
        .reduce((acc, domain) => {
            const count = get(acc, domain, 0) + 1;
            return {...acc, [domain]: count};
        }, {});
}