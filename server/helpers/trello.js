import Trello from 'node-trello';

let apiKey = process.env.TRELLO_KEY;
let apiToken = process.env.TRELLO_TOKEN;

var trello = new Trello(apiKey, apiToken);

export function cardFromCFPRequest(request) {
    let {
        name: name, 
        email: email, 
        topic: topic,
        progress: progress,
        conference: conference,
        additional: additional
    } = request;
    
    let idList = "5a90999f8bdb915623f4a8f1";
    
    if (typeof(name) === "undefined") {
        res.status(500).json({
            error: "name is undefined"
        })
        throw new Error("name is undefined")
    }

    if (name.length > 30) {
        res.status(500).json({
            error: "name is too long"
        })
        throw new Error("name is undefined")
    }

    if (typeof(email) === "undefined") {
        res.status(500).json({
            error: "email is undefined"
        })
        throw new Error("email is undefined")
    }

    if (email.length > 30) {
        res.status(500).json({
            error: "email is too long"
        })
        throw new Error("email is undefined")
    }

    let description = "CFP Review for " + name + "(" + email + ")." + 
                      "\nTopic is: " + topic + "." + 
                      "\nProgress: " + progress +
                      "\nConference: " + conference + "." +
                      "\nAdditional Info: " + additional + ".";

    let twoDaysAhead = new Date();
    twoDaysAhead.setDate(twoDaysAhead.getDate() + 2);

    let card = {
        name: name,
        idList: idList,
        desc: description,
        due: twoDaysAhead,
        pos: "top"
    }

    let cardId = null; 

    trello.post("/1/cards", card, 
      (err, data) =>
        {
          if (err) throw err;
          cardId = data.id;
          
          // Add the default checklist for paper reviews
          let checkList = {
              idCard: cardId,
              idChecklistSource: "5a90d3edadd24879f4581561"
          }

          trello.post("/1/checklists", checkList, 
            (err, data) => {
                if (err) throw err;
            });
        }
    );
}

export default trello;
