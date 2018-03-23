import { Router } from 'express';

import axios from 'axios';

import {trello, cardFromCFPRequest} from "../helpers/trello";

import CFPRequest from "../models/CFPRequest";

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
    var request = new CFPRequest(req.body);

    request.save(function (err) {
        if (err) {
            res.status(500).json(
                {data: err}
            )
        }

        cardFromCFPRequest(req.body);

        let slack_message = request.name + " has requested a CFP review.";
        let slackHook = process.env.SLACK_WEBHOOK;
        
        axios.post(slackHook, {text: slack_message})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        
        res.status(200).json(
            {data: "Created successfully"}
        );

    });
}


export default router;
