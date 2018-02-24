import { Router } from 'express';

import axios from 'axios';

import trello from "../helpers/trello";

const router = Router();

router.route('/cfptime').get(cfpTime);
router.route('/cfp-review-registration').post(cfpReviewRegistration);

// Get the open CFPs from @cfpTime
function cfpTime(req, res) {
    axios.get('https://cfptime.org/api/cfps')
    .then(function (response) {
        res.status(200).json({
            cfps: response.data
          });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function cfpReviewRegistration(req, res) {
    console.log(req.body);

    let {
        name: name, 
        email: email, 
        topic: topic,
        progress: progress,
        conference: conference,
        additional: additional
    } = req.body;
    
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

    res.status(200).json(
        {data: "Created successfully"}
    )
}


export default router;
