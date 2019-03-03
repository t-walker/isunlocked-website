import { Router } from 'express';
import axios from 'axios';

import {trello, cardFromCFPRequest} from "../helpers/trello";

import CFPRequest from "../models/CFPRequest";

const router = Router();

router.route('/cfptime').get(cfpTime);
router.route('/cfp-review-registration').post(cfpReviewRegistration);

const mockCFPEntry = {
    id: 479,
    name: null,
    cfp_deadline: null,
    conf_start_date: null,
    city: "Bochum",
    province: "North Rhine-Westphalia",
    country: "DE",
    twitter: "ruhrsec",
    website: "https://www.ruhrsec.de/2019/",
    cfp_details: "In RuhrSec's fourth edition, we have once again a call for presentations. Areas of interest are (but are not restricted to) Internet/Web Security, Data and Application Security, Network Security, Security in the Internet of Things, and Usable Security.\r\n\r\nPlease submit your proposal to the RuhrSec program committee until the 20th of February 2018. We have an ongoing acceptance process; your chance is higher if you submit as early as possible. Your talk must have a length of 45 minutes including Q&A and it has to be in English. Each speaker gets a free two-day conference ticket, an invitation to the speakers dinner on Wednesday, and a travel reimbursement up to a limit of EUR 1,200 (economy (plus))."
};

let mockCFPData = [];
const today = new Date();

for (let i = 0; i < 100; i++) {
    mockCFPData.push({
        ...mockCFPEntry,
        name: `Test Entry ${i}`,
        cfp_deadline: today.setDate(today.getDate() + i),
        conf_start_date: today.setDate(today.getDate() + i)
    });
}


// Get the open CFPs from @cfpTime
function cfpTime(req, res) {
    res.status(200).json({
        cfps: mockCFPData
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
