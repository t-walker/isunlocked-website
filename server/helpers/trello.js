import Trello from 'node-trello';

let apiKey = process.env.TRELLO_KEY;
let apiToken = process.env.TRELLO_TOKEN;

let trello = new Trello(apiKey, apiToken);

export default trello;