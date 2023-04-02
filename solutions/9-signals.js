import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  let domains = emails.map(email => {
    let domain = email.split('@')[1];
    return domain;
  })
  let countDomains = {};
  for (let domain of domains) {
    countDomains[domain] ? countDomains[domain] += 1 : countDomains[domain] = 1;
  }
  let result = {};
  for (let domain of freeEmailDomains) {
    result[domain] = get(countDomains, domain)
  }
  return result;
}


export default getFreeDomainsCount;
// END