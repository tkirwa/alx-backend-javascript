// 100-main.js

import { queryAPI, weakMap } from './100-weak';

const endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
