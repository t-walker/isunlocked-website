import Trello from 'node-trello';

let apiKey = process.env.TRELLO_KEY;
let apiToken = process.env.TRELLO_TOKEN;

console.log("API KEY: " + apiKey);
console.log("API TOKEN: " + apiToken);

let trello = new Trello(apiKey, apiToken);

export default trello;