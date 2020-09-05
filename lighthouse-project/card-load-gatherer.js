'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToApi extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardCallApi')
            .then(cardCallApi => {
                if (!cardCallApi) {

                    throw new Error('Unable to find card call api metrics in page');
                }
                return cardCallApi;
            });
    }
}


module.exports = TimeToApi;