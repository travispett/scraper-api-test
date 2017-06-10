const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000/api/v1.2/';
const POSTBACK_DELAY = 1000;

class Actions {
  static ableToLogin(req, res) {
    res.send('ok');

    const accountId = req.body.account_id || req.body.accountId;
    postScraperResult(`accounts/${accountId}/credentials`, {
      type: 'credentials',
      data: {
        account_id: accountId,
        success: true
      }
    });
  }

  static latestBilling(req, res) {
    res.send('ok');

    const accountId = req.body.account_id || req.body.accountId;
    postScraperResult(`accounts/${accountId}/utility_statements`, {
      type: 'latest_bill',
      data: {
        account_id: accountId,
        statement_date: Date.now()
      }
    });
  }

  static billings(req, res) {
    res.send('ok');
  }

  static onboarding(req, res) {
    res.send('ok');

    const accountId = req.body.account_id || req.body.accountId;
    postScraperResult(`accounts/${accountId}/onboard`, {
      type: 'onboard',
      data: {
        account_id: accountId,
        account_number: '123456'
      }
    });
  }
}

function postScraperResult(route, payload) {
  delay()
    .then(() => axios.post(route, payload))
    .then((response) => console.log(`ok`))
    .catch((err) => console.log(`Error: ${err}`));
}

function delay(timeout = POSTBACK_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

module.exports = Actions;
