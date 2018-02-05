import { Router } from 'express';

import axios from 'axios';

const router = Router();

router.route('/cfptime').get(cfpTime);

// Create a park following the model's schema
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

export default router;
